// components/Graphs.tsx
import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'

export default function Graphs() {
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
         {
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
  )
}