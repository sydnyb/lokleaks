// components/MapComponent.tsx
import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapComponent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = L.map('up-map').setView([26.8467, 80.9462], 8)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors & CartoDB'
      }).addTo(map)

      // Add sample markers
      L.marker([26.4499, 80.3319]).addTo(map).bindPopup('Kanpur - Bribery Case')
      L.marker([25.4358, 81.7627]).addTo(map).bindPopup('Varanasi - Delay in Service')
    }
  }, [])

  return (
    <div id="up-map" style={{ height: '400px' }}></div>
  )
}