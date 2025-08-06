import React, { useState } from 'react';
import PriceChart from './components/PriceChart';
import EventList from './components/EventList';
import Indicators from './components/Indicators';
import ModelOutput from './components/ModelOutput';
import DateFilter from './components/DateFilter';
import VolatilityChart from './components/VolatilityChart';

function App() {
  const [startDate, setStartDate] = useState('1990-08-02');
  const [endDate, setEndDate] = useState('2022-02-24');

  return (
    <div style={{ 
      padding: '1.5rem', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1600px',
      margin: '0 auto',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '6px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#2c3e50', 
          margin: 0,
          fontSize: '1.8rem',
          fontWeight: 'bold'
        }}>
          Brent Oil Price Dashboard
        </h1>
      </header>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end',
        marginBottom: '1.5rem'
      }}>
        <DateFilter 
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '25% 75%', 
        gap: '1.5rem'
      }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Key Events */}
          <section style={{ 
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: '1'
          }}>
            <h2 style={{ 
              color: '#2c3e50', 
              marginTop: 0,
              marginBottom: '1rem',
              borderBottom: '2px solid #e74c3c',
              paddingBottom: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              Key Events
            </h2>
            <EventList startDate={startDate} endDate={endDate} />
          </section>

          {/* Key Indicators */}
          <section style={{ 
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: '1'
          }}>
            <h2 style={{ 
              color: '#2c3e50', 
              marginTop: 0,
              marginBottom: '1rem',
              borderBottom: '2px solid #27ae60',
              paddingBottom: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              Key Indicators
            </h2>
            <Indicators />
          </section>

          {/* Model Output */}
          <section style={{ 
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: '1'
          }}>
            <h2 style={{ 
              color: '#2c3e50', 
              marginTop: 0,
              marginBottom: '1rem',
              borderBottom: '2px solid #f39c12',
              paddingBottom: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              Model Output
            </h2>
            <ModelOutput />
          </section>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Historical Chart */}
          <section style={{ 
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: '1'
          }}>
            <h2 style={{ 
              color: '#2c3e50', 
              marginTop: 0,
              marginBottom: '1rem',
              borderBottom: '2px solid #3498db',
              paddingBottom: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              Historical Chart
            </h2>
            <PriceChart startDate={startDate} endDate={endDate} />
          </section>

          {/* Volatility Chart */}
          <section style={{ 
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: '1'
          }}>
            <h2 style={{ 
              color: '#2c3e50', 
              marginTop: 0,
              marginBottom: '1rem',
              borderBottom: '2px solid #9b59b6',
              paddingBottom: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              Volatility of Brent Oil Price
            </h2>
            <VolatilityChart startDate={startDate} endDate={endDate} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
