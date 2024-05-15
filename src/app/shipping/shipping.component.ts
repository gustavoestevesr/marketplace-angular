import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent implements OnInit {
  shippingCosts$!: Observable<{ type: string, price: number }[]>;

  cartService = inject(CartService);

  ngOnInit(): void {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }
}
