import app from "../config/app"

const painels = {
  create: async (values: any) => {
    try {
      const response = await app.post('/painels', values)
      return response.data
    } catch (err: any) {
      return err
    }
  }
}

export default painels 