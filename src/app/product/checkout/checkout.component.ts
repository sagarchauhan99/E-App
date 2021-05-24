import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 public items=[]
 public totalAmount:any
  constructor(private cartService: CartService) {   
  }

  ngOnInit() {
    this.items=this.cartService.getItems();
    console.log(this.items);
    this.total()
  }
total(){
  this.cartService.items.forEach(element=>{
    this.totalAmount+=element.price;
  });
 
}
}
