import { h } from 'preact';

const StatsBox = ({ data }) => {
  const total = data.length;
  const positif = data.filter(d => d.effect === 'positif').length;
  const negatif = data.filter(d => d.effect === 'negatif').length;

  return (
    <div class="stats-box">
      <h2>📊 Statistik Keputusan</h2>
      <div class="stats-grid">
        <div class="stat">
          <span class="label">Total</span>
          <span class="value">{total}</span>
        </div>
        <div class="stat">
          <span class="label">Positif</span>
          <span class="value positif">{positif}</span>
        </div>
        <div class="stat">
          <span class="label">Negatif</span>
          <span class="value negatif">{negatif}</span>
        </div>
      </div>

      <style scoped>{`
        .stats-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
          text-align: center;
        }

        h2 {
          color: #00ffe1;
          text-shadow: 0 0 4px #00ffe1;
          margin-bottom: 20px;
        }

        .stats-grid {
          display: flex;
          justify-content: space-around;
          gap: 20px;
        }

        .stat {
          background: #1e1e2e;
          border: 1px solid #333;
          padding: 15px;
          border-radius: 10px;
          flex: 1;
        }

        .label {
          display: block;
          font-size: 14px;
          color: #aaa;
        }

        .value {
          font-size: 24px;
          font-weight: bold;
          color: #eee;
        }

        .positif {
          color: #00ff88;
        }

        .negatif {
          color: #ff5b5b;
        }
      `}</style>
    </div>
  );
};

export default StatsBox;
