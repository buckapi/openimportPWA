import { Component, AfterViewInit } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import { Router } from '@angular/router';
import { Apollo } from "apollo-angular";
import { DataService } from '@app/services/data.service'; 
import gql from "graphql-tag";
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import {CATEGORIES} from '@app/services/categories.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements AfterViewInit {
  products: any;
  products$: any;  
  categories: any;
  categories$: any;
  constructor(
      public script:ScriptService,
      private apollo: Apollo,
      public dataApi: DataService,
      public _butler: Butler,
      public router:Router
    ) { 
  this.categories=CATEGORIES
      this.script.load(     
        'popper',
      
        'bootstrap',
        'swiper',
        'glightbox',
        'script'     
      )
      .then(data => {console.log('loaded from shop', data);})
      .catch(error => console.log(error));
    }

  loadProducts(){
    this._butler.skip=0;
    this._butler.limit=9;
     
  }

  ngAfterViewInit(): void {
     this.products$=this.dataApi.products$;   
     this.categories$=this.dataApi.categories$;   
   // this.loadProducts();
  }


public quick(tix:any){
    let tixToView = tix;
    this._butler.preview=tixToView;
    // this._butler.preview.quantity=1; 
    this._butler.imagePreviewProduct=this._butler.preview.images[0];
      // this.router.navigate(['/product']);
  } 
 public viewProduct(tix:any){
    let tixToView = tix;
    this._butler.preview=tixToView;
    // this._butler.preview.quantity=1; 
    this._butler.imagePreviewProduct=this._butler.preview.images[0];
      this.router.navigate(['/product']);
  } 

  loadmore(indice:any
    ){
    // this.products$=[];
    console.log(indice);
     this._butler.skip=this._butler.skip+9; 
      this.dataApi.getDataAPI(this._butler.skip,this._butler.limit);   
     this.products$=this.dataApi.products$;  
     // this._butler.limit=this._butler.limit+9; 
  }
}
