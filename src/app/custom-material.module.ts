import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule],
  exports: [MdButtonModule, MdCheckboxModule],
})
export class CustomMaterialModule { }
