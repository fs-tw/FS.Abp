import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { PostRoutingModule } from './post-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LayoutComponent,MainComponent],
  imports: [
    CoreModule,
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
