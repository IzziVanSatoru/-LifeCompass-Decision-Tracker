import { h } from 'preact';
import DeleteButton from './DeleteButton';

const DecisionList = ({ data, onDelete }) => (
  <div class="list-wrapper">
    <h2>📔 Daftar Keputusan</h2>
    {data.length === 0 ? (
      <p>Tidak ada keputusan ditemukan.</p>
    ) : (
      <div class="card-grid">
        {data.map((dec) => (
          <div key={dec.id} class="card">
            <h3>{dec.title}</h3>
            <p><strong>Emosi:</strong> {dec.emotion}</p>
            <p><strong>Tanggal:</strong> {dec.date}</p>
            <p><strong>Efek:</strong> <span class={dec.effect}>{dec.effect}</span></p>
            <DeleteButton id={dec.id} onDelete={onDelete} />
          </div>
        ))}
      </div>
    )}

    <style scoped>{`
      .list-wrapper {
        padding: 10px;
        text-align: center;
      }

      h2 {
        color: #00ffe1;
        text-shadow: 0 0 4px #00ffe1;
        margin-bottom: 20px;
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
        justify-items: center;
      }

      .card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 12px;
        width: 100%;
        max-width: 220px;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.05);
        text-align: left;
      }

      .card h3 {
        font-size: 1rem;
        margin-bottom: 8px;
        color: #fff;
      }

      .card p {
        font-size: 0.8rem;
        margin: 2px 0;
        color: #ccc;
      }

      .positif {
        color: #00ff88;
        font-weight: bold;
      }

      .negatif {
        color: #ff5b5b;
        font-weight: bold;
      }

      @media (max-width: 480px) {
        .card {
          max-width: 100%;
        }
      }
    `}</style>
  </div>
);

export default DecisionList;
