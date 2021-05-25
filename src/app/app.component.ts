import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eApp';
id:any
constructor(private router:Router,
  private activatedRoute: ActivatedRoute){}

  getRoutes(){
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data,"data  from routes");
      this.id= data.id;
    });
  }
  signout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
