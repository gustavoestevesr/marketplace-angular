import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.mode';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  checkoutForm: FormGroup;
  
  cartService = inject(CartService);
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  constructor() {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted');
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
