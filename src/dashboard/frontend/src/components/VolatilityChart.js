import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchPrices } from '../api';

function VolatilityChart({ startDate, endDate }) {
  const [volatilityData, setVolatilityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate rolling volatility (30-day rolling standard deviation)
  const calculateVolatility = (prices, windowSize = 30) => {
    if (prices.length < windowSize) return [];
    
    const volatility = [];
    for (let i = windowSize - 1; i < prices.length; i++) {
      const window = prices.slice(i - windowSize + 1, i + 1);
      const returns = [];
      
      // Calculate daily returns
      for (let j = 1; j < window.length; j++) {
        const return_val = (window[j].price - window[j-1].price) / window[j-1].price;
        returns.push(return_val);
      }
      
      // Calculate standard deviation of returns
      const mean = returns.reduce((sum, val) => sum + val, 0) / returns.length;
      const variance = returns.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / returns.length;
      const stdDev = Math.sqrt(variance);
      
      // Use raw standard deviation (not annualized)
      volatility.push({
        date: window[window.length - 1].date,
        volatility: stdDev
      });
    }
    
    return volatility;
  };

  useEffect(() => {
    setLoading(true);
    fetchPrices(startDate, endDate)
      .then(data => {
        const volatility = calculateVolatility(data);
        setVolatilityData(volatility);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [startDate, endDate]);

  if (loading) return <div>Loading volatility data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '1rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#2c3e50'
      }}>
        Volatility of Brent Oil Prices ({startDate} - {endDate})
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={volatilityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10, fill: '#666' }}
            height={60}
            stroke="#666"
            domain={[startDate, endDate]}
          />
          <YAxis 
            domain={[0, 0.175]}
            tick={{ fontSize: 10, fill: '#666' }}
            label={{ 
              value: 'Rolling Standard Deviation', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#666', fontSize: 11 }
            }}
            stroke="#666"
          />
          <Tooltip 
            formatter={(value) => [value.toFixed(4), 'Volatility']}
            labelFormatter={(label) => `Date: ${label}`}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <Legend 
            verticalAlign="top" 
            align="left"
            height={36}
            wrapperStyle={{ paddingBottom: '10px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="volatility" 
            name="30-Day Rolling Volatility"
            stroke="#e74c3c" 
            strokeWidth={2}
            dot={{ fill: '#e74c3c', strokeWidth: 1, r: 2 }}
            activeDot={{ r: 4, stroke: '#e74c3c', strokeWidth: 2, fill: '#fff' }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VolatilityChart;
