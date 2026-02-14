import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { Register } from './register/register';
import { Public } from './public';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Login,
    Register,
    Public,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
