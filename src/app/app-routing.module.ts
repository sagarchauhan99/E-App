import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { HomeComponent } from './product/home/home.component';
import { ListComponent } from './product/list/list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {
    path:'login',component:UserLoginComponent
 //   loadChildren:()=> import('./user/user.module').then(m => m.UserModule)
  },
  {path:'register',component:UserRegisterComponent},
  {path:'list/:id',component:ListComponent,canActivateChild:[AuthGuard]},
  {path:'checkout/:id',component:CheckoutComponent,canActivateChild:[AuthGuard]},
  {path:'home/:id',component:HomeComponent,canActivateChild:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
