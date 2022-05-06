import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_link: string ="http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.api_link + 'shop/');
  }
}
