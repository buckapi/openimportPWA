import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { Router } from '@angular/router';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';

//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'motogo';
    public tixToAdd=[];

  constructor(
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler,
    public router:Router,
  ){


    this.script.load(
      // 'modernizr',
      // 'jquery',       
      'modernizr',
      'jquery',
      'jquery-migrate',
      'meanmenu',
      'scrollUp',
      'carousel',
      'slick',
      'countdown',
      'wow',
      'jquery-ui',
      'nivo.slider',
      'bootstrap',
      'plugins',
      'main'     
    ).then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
  }



  public addToBag(){
     this._butler.numProd=this._butler.numProd+1;
     this._butler.preview.id=this._butler.numProd;
     this.tixToAdd=this._butler.preview;
     this._butler.subTotal=this._butler.subTotal+(this._butler.preview.quantity*this._butler.preview.price);
     this._butler.car.push(this.tixToAdd);
  }

  ngOnInit(): void {
    
    // this.bikersScript.getUserLocation();
    
  }
}
