import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.mode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  http = inject(HttpClient);

  items: Product[] = [];

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    const indexItem = this.items.findIndex((item) => item.id === product.id)
    if (indexItem !== -1) {
      this.items.splice(indexItem, 1);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
