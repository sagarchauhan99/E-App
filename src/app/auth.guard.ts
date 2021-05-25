import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router){}
  canActivate(){
    if(localStorage.getItem("validUser")){ 
     return true;
   }else{
     this.router.navigateByUrl('');
     return false;
   }
    }
}
