import { h } from 'preact';
import { useState } from 'preact/hooks';

const AddDecisionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    emotion: '',
    date: '',
    effect: 'positif'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.emotion || !form.date) return;
    const newDecision = {
      ...form,
      id: Date.now()
    };
    onAdd(newDecision);
    setForm({ title: '', emotion: '', date: '', effect: 'positif' });
  };

  return (
    <div class="card">
      <h2>Tambah Keputusan</h2>
      <form onSubmit={handleSubmit} class="form">
        <div class="field">
          <label htmlFor="title">Judul</label>
          <input
            id="title"
            type="text"
            placeholder="Misal: Pindah kerja"
            value={form.title}
            onInput={(e) => setForm(f => ({ ...f, title: e.target.value }))}
          />
        </div>

        <div class="field">
          <label htmlFor="emotion">Emosi</label>
          <input
            id="emotion"
            type="text"
            placeholder="Misal: bingung, senang"
            value={form.emotion}
            onInput={(e) => setForm(f => ({ ...f, emotion: e.target.value }))}
          />
        </div>

        <div class="field">
          <label htmlFor="date">Tanggal</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onInput={(e) => setForm(f => ({ ...f, date: e.target.value }))}
          />
        </div>

        <div class="field">
          <label htmlFor="effect">Efek</label>
          <select
            id="effect"
            value={form.effect}
            onChange={(e) => setForm(f => ({ ...f, effect: e.target.value }))}
          >
            <option value="positif">Positif</option>
            <option value="negatif">Negatif</option>
          </select>
        </div>

        <button type="submit">➕ Tambahkan Keputusan</button>
      </form>

      <style scoped>{`
        .card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.08);
          max-width: 500px;
          margin: 0 auto;
          backdrop-filter: blur(8px);
        }

        h2 {
          margin-bottom: 24px;
          color: #00ffe1;
          text-shadow: 0 0 5px #00ffe1;
          font-size: 1.4rem;
          text-align: center;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .field {
          display: flex;
          flex-direction: column;
        }

        label {
          color: #ccc;
          font-size: 0.85rem;
          margin-bottom: 6px;
        }

        input, select {
          background-color: #1e1e2e;
          border: 1px solid #444;
          color: #fff;
          padding: 10px 14px;
          font-size: 14px;
          border-radius: 8px;
          transition: 0.2s ease;
        }

        input:focus, select:focus {
          border-color: #00ffe1;
          box-shadow: 0 0 4px #00ffe1;
          outline: none;
        }

        button {
          background: linear-gradient(to right, #00bcd4, #03e9f4);
          border: none;
          padding: 12px 16px;
          color: #000;
          font-weight: bold;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          filter: brightness(1.2);
        }
      `}</style>
    </div>
  );
};

export default AddDecisionForm;
