import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { fetchPrices } from '../api';
import { fetchEvents } from '../api';

function PriceChart({ startDate, endDate }) {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchPrices(startDate, endDate),
      fetchEvents(startDate, endDate)
    ])
      .then(([priceData, eventData]) => {
        setPrices(priceData);
        setEvents(eventData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [startDate, endDate]);

  if (loading) return <div>Loading price data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '1rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#2c3e50'
      }}>
        Brent Oil Prices with Key Events ({startDate} – {endDate})
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={prices} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 11, fill: '#666' }}
            angle={-45}
            textAnchor="end"
            height={80}
            stroke="#666"
            domain={[startDate, endDate]}
          />
          <YAxis 
            domain={[0, 140]}
            tick={{ fontSize: 11, fill: '#666' }}
            label={{ 
              value: 'Price (USD)', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
            }}
            stroke="#666"
          />
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Price']}
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
          
          {/* Event reference lines */}
          {events.map((event, index) => (
            <ReferenceLine
              key={index}
              x={event.Date}
              stroke="#ff6b6b"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{
                value: event.Event,
                position: 'top',
                fontSize: 9,
                fill: '#ff6b6b',
                fontWeight: 'bold',
                angle: -45,
                textAnchor: 'start'
              }}
            />
          ))}
          
          <Line 
            type="monotone" 
            dataKey="price" 
            name="Brent Oil Price"
            stroke="#3498db" 
            strokeWidth={2}
            dot={{ fill: '#3498db', strokeWidth: 1, r: 2 }}
            activeDot={{ r: 4, stroke: '#3498db', strokeWidth: 2, fill: '#fff' }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceChart;
