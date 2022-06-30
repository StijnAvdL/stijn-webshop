import { defineStore } from 'pinia'
import ProductService from '../services/ProductService'

export const useProductStore = defineStore('ProductStore', {
  state() {
    return {
      products: [],
      product: {}
    }
  },
  actions: {
    fetchProduct(id) {
      return ProductService.getProduct(id)
        .then(response => {
          this.product = response.data
        })
        .catch(error => {
          throw error
        })
    },
    fetchProducts() {
      return ProductService.getProducts()
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          throw error
        })
    },
    fetchProductPage(page) {
      return ProductService.getProductPage(page)
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          throw error
        })
    }
  }
})