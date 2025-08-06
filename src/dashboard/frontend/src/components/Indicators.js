import React, { useEffect, useState } from 'react';
import { fetchIndicators } from '../api';

function Indicators() {
  const [indicators, setIndicators] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIndicators()
      .then(data => {
        setIndicators(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading indicators...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!indicators) return null;

  return (
    <ul>
      <li>Volatility: {indicators.volatility}</li>
      <li>Average Price Change: {indicators.average_price_change}</li>
    </ul>
  );
}

export default Indicators;
