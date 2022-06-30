import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.componetn';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
