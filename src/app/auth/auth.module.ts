import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authComponents } from '.';



@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...authComponents
  ]
})
export class AuthModule { }
