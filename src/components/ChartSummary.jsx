import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import Chart from 'chart.js/auto';

const ChartSummary = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const positif = data.filter(d => d.effect === 'positif').length;
    const negatif = data.filter(d => d.effect === 'negatif').length;

    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Positif', 'Negatif'],
        datasets: [{
          label: 'Efek Keputusan',
          data: [positif, negatif],
          backgroundColor: ['#00ff88', '#ff5b5b'],
          borderRadius: 6,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            ticks: { color: '#ccc' },
            grid: { color: 'rgba(255,255,255,0.1)' }
          },
          x: {
            ticks: { color: '#ccc' },
            grid: { color: 'rgba(255,255,255,0.05)' }
          }
        }
      }
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div class="chart-box">
      <h2>📉 Ringkasan Grafik</h2>
      <canvas ref={canvasRef} width="300" height="200"></canvas>

      <style scoped>{`
        .chart-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px;
          max-width: 400px;
          margin: 0 auto;
          text-align: center;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.05);
        }

        h2 {
          color: #00ffe1;
          text-shadow: 0 0 4px #00ffe1;
          margin-bottom: 12px;
        }

        canvas {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default ChartSummary;
