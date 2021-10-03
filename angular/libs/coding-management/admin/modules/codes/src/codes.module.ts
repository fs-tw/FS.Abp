import { NgModule } from '@angular/core';
import { CodesRoutingModule } from './codes-routing.module';
import { CodingManagementSharedModule } from '@fs-tw/coding-management/shared';
import { CodingComponent } from './components/coding/coding.component';


@NgModule({
  declarations: [
    CodingComponent
  ],
  imports: [
    CodingManagementSharedModule,
    CodesRoutingModule
  ]
})
export class CodesModule { }
