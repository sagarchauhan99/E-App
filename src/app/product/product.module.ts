import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatChipsModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { CartService } from '../cart.service';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [CheckoutComponent, ListComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  exports:[
    CheckoutComponent,
    ListComponent,
    HomeComponent
  ]
})
export class ProductModule { }
