import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerialNumbersRoutingModule } from './serial-numbers-routing.module';
import { SerialNumberComponent } from './components/serial-number/serial-number.component';
import { CodingManagementSharedModule } from '@fs-tw/coding-management/shared';


@NgModule({
  declarations: [
    SerialNumberComponent
  ],
  imports: [
    CodingManagementSharedModule,
    SerialNumbersRoutingModule
  ]
})
export class SerialNumbersModule { }
