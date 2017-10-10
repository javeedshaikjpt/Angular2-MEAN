import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  temp;
  constructor(private _http: Http) {
  }

  getProdcuts(): Observable<IProduct[]> {
    return this._http.get('/getProducts')
       .map((response: Response) => <IProduct[]>response.json());
     // subscribe(data => {
        // console.log(data['_body']);
     // });

    // return this._http.get('api/products.json')
    //   .map((response: Response) => <IProduct[]>response.json());
    //   // .map((response: Response) => <IProduct[]>response.json());
  }
}
