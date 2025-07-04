import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { decisions as initialData } from './data/dummyDecisions';

import AddDecisionForm from './components/AddDecisionForm';
import FilterPanel from './components/FilterPanel';
import StatsBox from './components/StatsBox';
import ChartSummary from './components/ChartSummary';
import DecisionList from './components/DecisionList';

const App = () => {
  const [decisions, setDecisions] = useState([]);
  const [filters, setFilters] = useState({ emotion: '', date: '', effect: '' });

  // Ambil dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem('life_decisions');
    if (saved) {
      setDecisions(JSON.parse(saved));
    } else {
      setDecisions(initialData);
    }
  }, []);

  // Simpan ke localStorage
  useEffect(() => {
    localStorage.setItem('life_decisions', JSON.stringify(decisions));
  }, [decisions]);

  const handleAdd = (newDecision) => {
    setDecisions(prev => [newDecision, ...prev]);
  };

  const handleDelete = (id) => {
    setDecisions(prev => prev.filter(d => d.id !== id));
  };

  const filtered = decisions.filter(d =>
    d.emotion.toLowerCase().includes(filters.emotion.toLowerCase()) &&
    (filters.date ? d.date === filters.date : true) &&
    (filters.effect ? d.effect === filters.effect : true)
  );

  return (
    <div class="wrapper">
      <header class="hero">
        <h1>📍 LifeCompass – Decision Tracker</h1>
        <p>"Bingung ambil keputusan? Track pilihan dan dampaknya!"</p>
      </header>

      <main class="grid">
        <section class="tile">
          <AddDecisionForm onAdd={handleAdd} />
        </section>

        <section class="tile">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </section>

        <section class="tile">
          <StatsBox data={filtered} />
        </section>

        <section class="tile">
          <ChartSummary data={filtered} />
        </section>

        <section class="tile full">
          <DecisionList data={filtered} onDelete={handleDelete} />
        </section>
      </main>

      <style scoped>{`
        .wrapper {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29, #302b63, #24243e);
          color: #f0f0f0;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
        }

        .hero {
          text-align: center;
          padding: 40px 10px;
        }

        .hero h1 {
          font-size: 1.8rem;
          color: #00ffe1;
          text-shadow: 0 0 5px #00ffe1;
        }

        .hero p {
          color: #ccc;
          font-size: 1rem;
        }

        .grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          margin-top: 30px;
        }

        .tile {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.05);
        }

        .tile.full {
          grid-column: 1 / -1;
        }

        @media (max-width: 640px) {
          .hero h1 {
            font-size: 1.4rem;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .tile.full {
            grid-column: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
