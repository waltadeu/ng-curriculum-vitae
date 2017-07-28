import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule, MdCheckboxModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [MdListModule, MdCheckboxModule, MdToolbarModule, MdIconModule],
  exports: [MdListModule, MdCheckboxModule, MdToolbarModule, MdIconModule],
})
export class CustomMaterialModule { }
