import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { CartService } from 'src/app/cart.service';
import emailjs,{ EmailJSResponseStatus, init } from 'emailjs-com';
init("user_Jx8vA2Xmz8VhfqBujL8We");

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 public items=[]
 public totalAmount=0;
 public id:any
 currentUser:any
 email:any
 message:any
 visible=false;
  constructor(private cartService: CartService,
    private activatedRoute: ActivatedRoute) {   
  }
  ngOnInit() {
    this.items=this.cartService.getItems();
    console.log(this.items);
    this.total()
  }
total(){
  console.log(this.cartService.items,'total value');
  this.cartService.items.forEach(element=>{
    this.totalAmount = element.price+this.totalAmount;
    console.log(this.totalAmount,'amount');
  });
}

deleterow(index: number){
  this.items.splice(index,1);
 }

 getRoutes(){
  this.activatedRoute.params.subscribe((data)=>{
    console.log(data,"data from routes");
    this.id= data.id;
  });
 }
 getProducts(){
  this.items=this.cartService.getItems();
   if(this.items){}
 }

 sendDetails(){
   this.currentUser=JSON.parse(localStorage.getItem('userDetail'));
   console.log(this.currentUser);
   this.email=this.currentUser.email;
   this.cartService.items.forEach(element=>{
     this.message+=", " +element.name;
     
   });
   this.message+=" Total Amount- " +this.totalAmount;
   this.visible=true;
 }
 public sendEmail(e: Event) {
  e.preventDefault();
   emailjs.sendForm('service_fzhulja', 'template_9fvv5qp', e.target as HTMLFormElement, 'user_Jx8vA2Xmz8VhfqBujL8We')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    console.log("nooo");
    this.cartService.clearCart();
}
}
