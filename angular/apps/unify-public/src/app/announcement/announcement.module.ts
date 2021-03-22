import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [DetailComponent,ListComponent],
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ]
})
export class AnnouncementModule { }
