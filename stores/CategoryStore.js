import { defineStore } from 'pinia'
import CategoryService from '../services/CategoryService'

export const useCategoryStore = defineStore('CategoryStore', {
  state() {
    return {
      categories: [],
    }
  },
  actions: {
    fetchCategories() {
      return CategoryService.getCategories()
        .then(response => {
          this.categories = response.data
        })
        .catch(error => {
          throw error
        })
    }
  }
})