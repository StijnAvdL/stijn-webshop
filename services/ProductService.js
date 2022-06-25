import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('/products')
  },
  getProductPage(page = 1) {
    return apiClient.get(`/products?_page=${page}`)
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`)
  }
}