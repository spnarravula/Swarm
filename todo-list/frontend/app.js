const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Proxy GET to backend
app.get('/api/todos', async (req, res) => {
  try {
    const response = await axios.get('http://backend:3000/todos');
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Error fetching todos');
  }
});

// Proxy POST to backend
app.post('/api/todos', async (req, res) => {
  try {
    const response = await axios.post('http://backend:3000/todos', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Error adding todo');
  }
});

app.listen(8080, () => {
  console.log('Frontend running at http://localhost:8080');
});
