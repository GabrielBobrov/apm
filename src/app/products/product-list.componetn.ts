import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: 'blablabla',
      price: 32.88,
      startRating: 4.2,
      imageUrl: 'assets/images/gardem_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TXB-0223',
      releaseDate: 'March 18, 2021',
      description: 'blablabla',
      price: 8.88,
      startRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
}
