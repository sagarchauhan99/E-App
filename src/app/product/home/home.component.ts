import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public id:any
  public currentUser:any
  public detailsForm: FormGroup;
  public alluser:any;
  public searched:any;
  public searcheduser:any;
  public issearched=false;
  public friendlist:any;
  public reqlist:any;
  public sendreq=[];

  constructor(private http: HttpClient,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.detailsForm= this.formBuilder.group({
      id:[Number],
      name:[''],
      phoneNumber:[''],
      email:[''],
      password:[''],
      address:[''],
      zip:[''],
      imgPath:[''],
      block:["false"],
    });
    this.getRoutes()
  }
  getRoutes(){
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data,"data  from routes");
      this.id= data.id;
      this.getDetails();
    });
  }

getDetails(){
console.log(this.id);
this.http.get('http://localhost:3000/userDetails/'+ this.id).subscribe((data)=>{
 console.log(data,'data from server') 
 this.prefetch(data);
 this.currentUser=data;
});
}

prefetch(val){
  this.detailsForm.controls['id'].setValue(val.id);
  this.detailsForm.controls['name'].setValue(val.name);
  this.detailsForm.controls['phoneNumber'].setValue(val.phoneNumber);
  this.detailsForm.controls['email'].setValue(val.email);
  this.detailsForm.controls['password'].setValue(val.password);
  this.detailsForm.controls['address'].setValue(val.address);
  this.detailsForm.controls['zip'].setValue(val.zip);
}

}
