import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Butler } from '@app/services/butler.service';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
import { BikersService } from '@app/services';
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  link:string="";
  constructor(
    public _butler:Butler,
        private readonly authSvc: AuthService,
    public script:ScriptService,
    public router:Router
  ) {
    
    console.log('Loading External Scripts');
    this.script.load(  
      // 'modernizr', 
      // 'jquery', 
      'jquery-migrate', 
      'bootstrap.bundle', 
      'swiper-bundle', 
      'fancybox', 
      'jquery.nice-select', 
      'main'
    ).then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
     
   }

  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    spaceBetween: 5,
    navigation: false
  };  
  public details(b:any){
    let a =b;
    if (a==1){this.link="assets/assets/img/user4.jpg";}
    if (a==2){this.link="assets/assets/img/user10.jpg";}
    if (a==3){this.link="assets/assets/img/user40.jpg";}
    if (a==4){this.link="assets/assets/img/user2.jpg";}
    if (a==5){this.link="assets/assets/img/user20.jpg";}
    if (a==6){this.link="assets/assets/img/user3.jpg";}
  if(!this._butler.details){
    this._butler.details=true;
    return
  }else{
    this._butler.details=false;
  }
  
  }
async onLogout(): Promise<void> {
    try {
      await this.authSvc.signOut();
      this._butler.isLogged=false;
       this.router.navigate(['/login']);
       this._butler.userId="";
    } catch (error) {
      console.log(error);
    }
  }

  public edit(){
    this._butler.editing=true;
  }
  ngAfterViewInit(): void {
   
  }

}
