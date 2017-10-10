import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductFilterPipe } from '../../products/product-filter.pipe';
import { StarComponent } from '../../shared/star/star.component';
import { ProductDetailComponent } from '../../products/product-detail/product-detail.component';
import { ProductsAddComponent } from '../../products/products-add/products-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/addproduct', component: ProductsAddComponent },
      { path: 'products/:pId', component: ProductDetailComponent }
    ], {useHash: true})
  ],
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    ProductsAddComponent]
})
export class ProductsModule { }
