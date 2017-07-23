import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdListModule, MdCheckboxModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [MdListModule, MdCheckboxModule, MdToolbarModule],
  exports: [MdListModule, MdCheckboxModule, MdToolbarModule],
})
export class CustomMaterialModule { }
