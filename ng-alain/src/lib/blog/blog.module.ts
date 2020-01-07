import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { BlogRoutingModule } from './blog-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [
    NgAlainBasicModule,
    CoreModule,
    CommonModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
