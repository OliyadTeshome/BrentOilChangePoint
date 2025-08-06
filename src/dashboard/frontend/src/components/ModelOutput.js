import React, { useEffect, useState } from 'react';
import { fetchModelOutput } from '../api';

function ModelOutput() {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchModelOutput()
      .then(data => {
        setOutput(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading model output...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!output) return null;

  return (
    <div>
      <h3>Change Points</h3>
      <ul>
        {output.change_points && output.change_points.map((cp, idx) => (
          <li key={idx}>{cp.date}: {cp.type}</li>
        ))}
      </ul>
      <h3>Forecast</h3>
      <ul>
        {output.forecast && output.forecast.map((f, idx) => (
          <li key={idx}>{f.date}: ${f.predicted_price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ModelOutput;
