import { h } from 'preact';

const FilterPanel = ({ filters, setFilters }) => {
  return (
    <div class="filter-card">
      <h2>Filter Keputusan</h2>
      <div class="filter-group">
        <input
          type="text"
          placeholder="Filter emosi"
          value={filters.emotion}
          onInput={(e) => setFilters(f => ({ ...f, emotion: e.target.value }))}
        />
        <input
          type="date"
          value={filters.date}
          onInput={(e) => setFilters(f => ({ ...f, date: e.target.value }))}
        />
        <select
          value={filters.effect}
          onChange={(e) => setFilters(f => ({ ...f, effect: e.target.value }))}
        >
          <option value="">Efek</option>
          <option value="positif">Positif</option>
          <option value="negatif">Negatif</option>
        </select>
      </div>

      <style scoped>{`
        .filter-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px;
          max-width: 450px;
          margin: 0 auto;
          box-shadow: 0 0 8px rgba(0, 255, 255, 0.1);
        }

        h2 {
          margin-bottom: 12px;
          color: #00ffe1;
          text-shadow: 0 0 4px #00ffe1;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        input, select {
          background-color: #1e1e2e;
          border: 1px solid #444;
          color: #eee;
          padding: 10px;
          font-size: 14px;
          border-radius: 8px;
        }

        input:focus, select:focus {
          outline: none;
          border-color: #00ffe1;
          box-shadow: 0 0 4px #00ffe1;
        }
      `}</style>
    </div>
  );
};

export default FilterPanel;
