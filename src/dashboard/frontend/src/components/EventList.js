import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';

function EventList({ startDate, endDate }) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setLoading(true);
    fetchEvents(startDate, endDate)
      .then(data => {
        setEvents(data);
        setFilteredEvents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [startDate, endDate]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.Category === selectedCategory));
    }
  }, [selectedCategory, events]);

  const getCategoryColor = (category) => {
    const colors = {
      'Geopolitical Conflict': '#ff6b6b',
      'Economic Shock': '#4ecdc4',
      'OPEC Policy': '#45b7d1',
      'Sanctions': '#96ceb4',
      'Demand Shock': '#feca57'
    };
    return colors[category] || '#95a5a6';
  };

  const categories = ['All', ...new Set(events.map(event => event.Category))];

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 'bold', marginRight: '1rem' }}>Filter by Category:</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {filteredEvents.map((event, idx) => (
          <div 
            key={idx} 
            style={{
              padding: '1rem',
              margin: '0.5rem 0',
              border: `2px solid ${getCategoryColor(event.Category)}`,
              borderRadius: '8px',
              backgroundColor: `${getCategoryColor(event.Category)}10`,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.02)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontWeight: 'bold', color: getCategoryColor(event.Category) }}>
              {event.Date}
            </div>
            <div style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>
              {event.Event}
            </div>
            <div style={{ 
              fontSize: '0.9rem', 
              color: '#666',
              padding: '0.25rem 0.5rem',
              backgroundColor: getCategoryColor(event.Category),
              color: 'white',
              borderRadius: '4px',
              display: 'inline-block'
            }}>
              {event.Category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
