import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_Jx8vA2Xmz8VhfqBujL8We");

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public signupForm: FormGroup;
  public url:any;
  public id:any;
  public name:any
  public email:any
  public otp:any
  public verifyotp:any
  verifyclicked=false;
  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.signupForm= this.formBuilder.group({
      id:[Number,Validators.required],
      name:['',Validators.required],
      phoneNumber:[Number,Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],
      address:[''],
      zip:[''],
      verified:['true'],
      cart:['[]'],
    });
  }

  onSubmit(){
   this.name=this.signupForm.controls['name'].value;
   this.email=this.signupForm.controls['email'].value;
   this.otp=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(this.signupForm.value,'valuee');
    this.http.post('http://localhost:3000/userDetails',this.signupForm.value)
        .subscribe((data)=>{ 
          console.log(data,'data from post service');
          this.id=this.signupForm.controls['id'].value;
   //       this.route.navigateByUrl('/verified/' + this.id);
        });
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
      this.verifyclicked=true;
  }
  verification(){
  
    if(this.verifyotp==this.otp){
      this.signupForm.controls['verified'].setValue(true);
        localStorage.setItem("verifiedUser","pass");
        
          this.route.navigateByUrl('login')
    
    }else{
      alert("you have entered wrong Otp")
    }
    }
}
