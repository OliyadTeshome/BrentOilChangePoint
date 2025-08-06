// src/api.js

const API_BASE = 'http://127.0.0.1:5000/api';

export async function fetchEvents(startDate = null, endDate = null) {
  let url = `${API_BASE}/events`;
  const params = new URLSearchParams();
  if (startDate) params.append('start_date', startDate);
  if (endDate) params.append('end_date', endDate);
  if (params.toString()) url += `?${params.toString()}`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}

export async function fetchPrices(startDate = null, endDate = null) {
  let url = `${API_BASE}/prices`;
  const params = new URLSearchParams();
  if (startDate) params.append('start_date', startDate);
  if (endDate) params.append('end_date', endDate);
  if (params.toString()) url += `?${params.toString()}`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch prices');
  return res.json();
}

export async function fetchModelOutput() {
  const res = await fetch(`${API_BASE}/model-output`);
  if (!res.ok) throw new Error('Failed to fetch model output');
  return res.json();
}

export async function fetchIndicators() {
  const res = await fetch(`${API_BASE}/indicators`);
  if (!res.ok) throw new Error('Failed to fetch indicators');
  return res.json();
}
