import axios from 'axios'

const baseUrl = 'https://api.mercadolibre.com'

axios.interceptors.request.use((config) => {
  return config
})

const get = (endpoint) => axios.get(`${baseUrl}${endpoint}`)
const post = (endpoint, body) => axios.post(`${baseUrl}${endpoint}`, body)
const put = (endpoint, body) => axios.put(`${baseUrl}${endpoint}`, body)
const destroy = (endpoint, body) => axios.delete(`${baseUrl}${endpoint}`, body)

export { get, post, put, destroy }
