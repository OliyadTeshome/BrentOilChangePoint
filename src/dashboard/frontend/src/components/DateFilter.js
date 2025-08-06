import React from 'react';

function DateFilter({ startDate, endDate, onStartDateChange, onEndDateChange }) {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '1rem', 
      alignItems: 'center', 
      marginBottom: '1rem',
      padding: '1rem',
      backgroundColor: '#e8f4fd',
      borderRadius: '8px',
      border: '2px solid #3498db'
    }}>
      <label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Global Date Range Filter:</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <label style={{ fontWeight: '500' }}>From:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          style={{ 
            padding: '0.5rem', 
            borderRadius: '4px', 
            border: '1px solid #3498db',
            backgroundColor: 'white'
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <label style={{ fontWeight: '500' }}>To:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          style={{ 
            padding: '0.5rem', 
            borderRadius: '4px', 
            border: '1px solid #3498db',
            backgroundColor: 'white'
          }}
        />
      </div>
      <div style={{ 
        fontSize: '0.9rem', 
        color: '#7f8c8d', 
        fontStyle: 'italic',
        marginLeft: '1rem'
      }}>
        (Affects both Historical and Volatility charts)
      </div>
    </div>
  );
}

export default DateFilter;
