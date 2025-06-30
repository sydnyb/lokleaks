import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../lib/firebase";

const DynamicMap = dynamic(() => import("../components/UpMap"), { ssr: false });

export default function Home() {
  const [userComplaint, setUserComplaint] = useState({
    department: "", official: "", title: "", complaintNumber: "", description: "",
    district: "", tehsil: "", village: "", file: null
  });
  const [complaintMarkers, setComplaintMarkers] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchComplaints = async () => {
      const snapshot = await getDocs(collection(db, "complaints"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComplaintMarkers(data.filter(d => d.district && d.tehsil));
    };
    fetchComplaints();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserComplaint((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      let fileUrl = "";
      if (userComplaint.file) {
        const fileRef = ref(storage, `complaints/${Date.now()}_${userComplaint.file.name}`);
        await uploadBytes(fileRef, userComplaint.file);
        fileUrl = await getDownloadURL(fileRef);
      }

      await addDoc(collection(db, "complaints"), {
        ...userComplaint,
        fileUrl,
        timestamp: Timestamp.now()
      });

      alert("Complaint submitted successfully.");
      setUserComplaint({
        department: "", official: "", title: "", complaintNumber: "", description: "",
        district: "", tehsil: "", village: "", file: null
      });
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Failed to submit complaint. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>LokLeaks - Lodge Complaint</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
        <input name="department" placeholder="Department" onChange={handleChange} />
        <input name="official" placeholder="Official Name" onChange={handleChange} />
        <input name="title" placeholder="Complaint Title" onChange={handleChange} />
        <input name="complaintNumber" placeholder="Case No" onChange={handleChange} />
        <input name="district" placeholder="District" onChange={handleChange} />
        <input name="tehsil" placeholder="Tehsil" onChange={handleChange} />
        <input name="village" placeholder="Village" onChange={handleChange} />
        <input name="file" type="file" onChange={handleChange} />
        <textarea name="description" placeholder="Complaint Details" onChange={handleChange}></textarea>
        <button onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Complaint"}
        </button>
      </div>
      <div style={{ height: "500px", width: "100%" }}>
        <DynamicMap markers={complaintMarkers} />
      </div>
    </div>
  );
}
