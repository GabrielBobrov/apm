import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProduct(): IProduct[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        description: 'blablabla',
        price: 32.88,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TXB-0223',
        releaseDate: 'March 18, 2021',
        description: 'blablabla',
        price: 8.88,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png',
      },
    ];
  }
}