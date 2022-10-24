import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Butler} from '@app/services/butler.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public editing:boolean=false
  constructor(
public _butler:Butler,
   public router:Router
    ) { }
public addToCar(){

}
  ngOnInit(): void {
  }

}
