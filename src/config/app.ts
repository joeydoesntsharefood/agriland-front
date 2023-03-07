import axios from 'axios'

const app = axios.create({ 
    baseURL: 'https://agriland11971.c42.integrator.host/services',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
 })

export default app