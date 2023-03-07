import app from "../config/app"

const schedule = {
  list: async () => {
    try {
      const response = await app.get('/schedule')
      return response.data
    } catch (err: any) {
      return err
    }
  },
  create: async (values: any) => {
    try {
      const response = await app.post('/schedule', values)
      return response.data
    } catch (err: any) {
      return err
    }
  }
}

export default schedule 