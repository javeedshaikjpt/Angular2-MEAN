import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  productName ; id: number ;
  productCode;
  constructor(private __route: Router, private __activatedRoute: ActivatedRoute,
              private _http: Http, private __productService: ProductService) {
  }

  goBackToProducts(): void {
    this.__route.navigate(['/products']);
  }

  ngOnInit() {
    this.__activatedRoute.params.subscribe(data => {
      // console.log(data['pId']);
      this.id = data['pId']; });
    this.__productService.getProdcuts().subscribe(data => {
      for ( let i = 0; i < data.length ; i++ ) {
       if ( this.id == data[i].productId ) {
         this.productName = data[i].productName;
         this.productCode = data[i].productCode;
       }
      }
    });
  }

}
