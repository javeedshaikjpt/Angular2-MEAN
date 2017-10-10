import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
// import { RouterModule } from '@angular/router';
import { ProductService } from '../product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  imgWidth = '50';
  filterList = 'cart';
  products: IProduct[];
  pageTitle = 'Product List';
  showImage = false;
  toggleImg(): void {
    if ( !this.showImage) {
      this.showImage = true;
    } else {
      this.showImage = false;
    }
  }
  constructor(private __productService: ProductService) {
    this.__productService.getProdcuts().subscribe(data => {
      this.products = data;
      // alert(this.products[0].productName);
    });
  }

  ngOnInit() {
    // this.__productService.getProdcuts().subscribe(data => {
    //   this.products = data;
    // });
  }
  eventReceived(msg): void {
    this.pageTitle = 'product with ' + msg + ' got clicked!!!';
  }
}
