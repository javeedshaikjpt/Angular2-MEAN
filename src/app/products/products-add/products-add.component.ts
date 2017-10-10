import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router} from '@angular/router';
import {isUndefined} from "util";
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  productId: number;
  productName: String;
  productCode: String;
  releaseDate: String;
  description: String;
  price: Number;
  starRating: Number;
  imageUrl: String;
  obj;
  constructor(private _http: Http, private __route: Router) { }

  addDetail() {
    this.obj = {
      productId: this.productId,
    productName: this.productName,
    productCode: this.productCode,
    releaseDate: this.releaseDate,
    description: this.description,
    price: this.price,
    starRating: this.starRating,
    imageUrl: this.imageUrl
    };
    if ( this.productName === undefined && this.productId === undefined) { alert('please enter product details');
      } else { this._http.post('/addProduct', this.obj).subscribe(data => {}); }
    // this.productId = null;
    // this.productName = '';
    // this.productCode = '';
    // this.releaseDate = '';
    // this.description = '';
    // this.price = null;
    // this.starRating = null;
    // this.imageUrl = '';
    this.__route.navigate(['/products', this.productId]);
  }
  ngOnInit() {
  }

}
