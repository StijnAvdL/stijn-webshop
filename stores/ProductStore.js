import { defineStore } from "pinia";
import ProductService from "../services/ProductService";

export const useProductStore = defineStore("ProductStore", {
  state() {
    return {
      products: [],
      product: {},
      numberOfPages: 0,
    };
  },
  actions: {
    fetchProduct(id) {
      return ProductService.getProduct(id)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchNumberOfProducts(filters) {
      return ProductService.getProducts(filters)
        .then((response) => {
          this.numberOfPages = Math.ceil(response.data.length/10);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchProductPage(page, filters) {
      return ProductService.getProductPage(page, filters)
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
