const express = require('express');
const app = express();

let stock = 10;

app.post('/api/buy', (req, res) => {
  const stockActual = stock;

  setTimeout(() => {
    if (stockActual > 0) {
      stock = stockActual - 1;
      return res.status(200).json({ message: 'Compra exitosa', stockRestante: stock });
    } else {
      return res.status(400).json({ message: 'Stock agotado', stockRestante: stock });
    }
  }, 50);
});

app.get('/api/stock', (req, res) => {
  res.status(200).json({ stock });
});

app.post('/api/reset', (req, res) => {
  stock = 10;
  res.status(200).json({ stock });
});

module.exports = app;