import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public email:any
  public password:any
  public userdetails:any;
  constructor(private router:Router,
    private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(){
    this.http.get('http://localhost:3000/userDetails' ).subscribe((data)=>{
      console.log(data,'data from server');
      this.userdetails=data;
      for(let i=0;i<this.userdetails.length;i++)
    if( this.email==this.userdetails[i].email && this.password==this.userdetails[i].password)
    {
      console.log('valid user');
      localStorage.setItem("validUser","pass");
      this.router.navigateByUrl('home/'+ this.userdetails[i].id);
    }else{
    console.log('invalid user')
  //  this.router.navigateByUrl('');
    }
    });
  }
  
  reDirect(){
    this.router.navigateByUrl('/register');
  }
}
