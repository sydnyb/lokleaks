// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Chart from 'chart.js'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Home() {
  const { t, locale } = useTranslation('common')

  // Initialize Leaflet map
  useEffect(() => {
    import('leaflet').then(L => {
      const map = L.map('map').setView([26.8467, 80.9462], 8)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors & CartoDB'
      }).addTo(map)

      // Add sample markers
      L.marker([26.4499, 80.3319]).addTo(map).bindPopup('Kanpur - Bribery Case')
      L.marker([25.4358, 81.7627]).addTo(map).bindPopup('Varanasi - Delay in Service')
    })
  }, [])

  // Initialize Charts
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.myLineChart) {
      const ctxLine = document.getElementById('lineChart') as HTMLCanvasElement
      const ctxBar = document.getElementById('barChart') as HTMLCanvasElement
      const ctxPie = document.getElementById('pieChart') as HTMLCanvasElement

      new Chart(ctxLine, {
        type: 'line',
         {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Monthly Complaints',
             [120, 150, 130, 200, 180],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 77, 77, 0.2)',
            tension: 0.4,
            fill: true
          }]
        }
      })

      new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: ['Revenue', 'Police', 'Education', 'Health', 'PWD'],
          datasets: [{
            label: 'Complaint Count',
             [300, 250, 150, 100, 200],
            backgroundColor: '#ff4d4d'
          }]
        }
      })

      new Chart(ctxPie, {
        type: 'pie',
         {
          labels: ['Bribery', 'Land Scam', 'Fund Misuse', 'Delay', 'Other'],
          datasets: [{
             [400, 300, 200, 150, 306],
            backgroundColor: ['#ff4d4d', '#ffd700', '#00bfff', '#98fb98', '#dda0dd']
          }]
        }
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Lokleaks Engine</title>
        <meta name="description" content="Anti-Corruption Public Complaint Visualizer for Uttar Pradesh" />
      </Head>

      <header className="text-center py-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-primary">𝐋𝐨𝐤𝐥𝐞𝐚𝐤𝐬 𝐄𝐧𝐠𝐢𝐧𝐞</h1>
        <nav className="mt-3 flex justify-center gap-5 text-sm text-gray-400">
          <Link href="/submit">{t('submit')}</Link>
          <Link href="/dashboard">{t('dashboard')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/faq">{t('faq')}</Link>
          <Link href="/disclaimer">{t('disclaimer')}</Link>
          <span className="text-primary">Filed: 1356</span>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-5">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Map Section */}
          <div className="md:col-span-2">
            <div id="map" className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg"></div>
          </div>

          {/* Recent Cases */}
          <div>
            <h2 className="text-xl font-semibold mb-3">{t('recent_cases')}</h2>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded border-l-2 border-primary">
                <p className="font-medium">Revenue Department</p>
                <p>Misappropriation of funds</p>
                <small className="text-gray-400">2 days ago</small>
              </div>
              <div className="bg-gray-800 p-3 rounded border-l-2 border-primary">
                <p className="font-medium">Tehsildar Pooja Verma</p>
                <p>Delay in issuing caste certificates</p>
                <small className="text-gray-400">1 week ago</small>
              </div>
            </div>
          </div>
        </div>

        {/* Graphs */}
        <section className="mt-10 grid md:grid-cols-3 gap-5">
          <div className="bg-gray-800 p-4 rounded hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-2">Complaint Trends</h3>
            <canvas id="lineChart" width="400" height="200"></canvas>
          </div>
          <div className="bg-gray-800 p-4 rounded hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-2">Top Departments</h3>
            <canvas id="barChart" width="400" height="200"></canvas>
          </div>
          <div className="bg-gray-800 p-4 rounded hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-2">Categories</h3>
            <canvas id="pieChart" width="400" height="200"></canvas>
          </div>
        </section>

        {/* Footer Button */}
        <div className="text-center mt-10">
          <button className="bg-primary text-white px-6 py-2 rounded-md font-semibold">
            Open Complaint Log
          </button>
        </div>
      </main>
    </>
  )
}