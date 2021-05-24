import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    ProductModule
  ],
  exports:[
    UserLoginComponent,
    UserRegisterComponent
  ]
})
export class UserModule { }
