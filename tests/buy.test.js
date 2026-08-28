const request = require('supertest');
const app = require('../app');

describe('Validación de Compra', () => {
  
  beforeEach(async () => {
    await request(app).post('/api/reset');
  });

  it('Debería realizar la compra y reducir el stock de 10 a 9', async () => {
    const response = await request(app).post('/api/buy');
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Compra exitosa');
    expect(response.body.stockRestante).toBe(9);

    const stockCheck = await request(app).get('/api/stock');
    expect(stockCheck.body.stock).toBe(9);
  });

});