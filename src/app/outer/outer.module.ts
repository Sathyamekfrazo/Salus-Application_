import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuterRoutingModule } from './outer-routing.module';
import { OuterComponent } from './outer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    OuterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    OuterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class OuterModule { }
