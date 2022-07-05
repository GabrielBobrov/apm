import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list-component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidht = 50;
  imageMargin: number = 2;
  showImage = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter', value);
    this.filteredProducts 
  }

  filteredProducts: IProduct[] = []
  products: IProduct[] = [
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

  ngOnInit(): void {
    this.listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}