import app from "../config/app"

const auth = {
  login: async ({ email, password }: { email?: string, password?: string }) => {
		try {
			const response = await app.post('/signin', { email, password })
			return response.data
		} catch (err: any) {
			return err
		}
	}
}

export default auth