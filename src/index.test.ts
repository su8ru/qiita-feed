import { app } from './index'

describe('Test the application', () => {
  it('should return 200 response', async () => {
    const res = await app.request('http://localhost/')
    expect(res.status).toBe(200)
  })
})
