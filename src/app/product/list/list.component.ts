import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MDCRipple } from '@material/ripple';
import { EventEmitter } from 'events';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  id:any
  Plist:any
  totalItems:number
  currentUser:any
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
    ) { }

    selected='';

 
ngOnInit() {
 //   const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
 //   const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
 //   const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
 //   iconButtonRipple.unbounded = true;
    this.getitems()
    this.getRoutes()
    this.cartItem();
  }
 getitems(){
   this.http.get('http://localhost:3000/productDetails').subscribe((data)=>{
     console.log(data);
//    if(this.selected==data)
      this.Plist=data;
   });
 }

 getRoutes(){
  this.activatedRoute.params.subscribe((data)=>{
    console.log(data,"data from routes");
    this.id= data.id;
    
  });
 }

addToCart(product){
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
  this.cartItem();
//  this.productAdded.emit(val);
//  console.log(val,'clicked item details');
//  this.cartItem.push(val);
//  this.currentUser.cart=this.cartItem;
//  this.http.put('http://localhost:3000/userDetails'+ this.id,this.currentUser).subscribe((data)=>{
//    console.log(data,'put request');
//  })
//  this.totalItems=this.cartItem.length;
}

cartItem(){
this.totalItems=this.cartService.items.length;
}
checkout(){
  this.router.navigateByUrl('/checkout/'+this.id);
}
lowtohigh(){
  this.Plist.sort((a,b)=> (a.price < b.price ? -1 : 1 ));
}
hightolow(){
  this.Plist.sort((a,b)=>(a.price > b.price ? -1 :1));
}
}
