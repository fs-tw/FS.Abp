import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { BlogRoutingModule } from './blog-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgxsModule } from '@ngxs/store';
import { BlogState } from './providers/blog/blog.state';
import { EditComponent } from './modal/edit/edit.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [LayoutComponent, MainComponent, EditComponent, LeftComponent, RightComponent, DetailComponent],
  imports: [
    NgAlainBasicModule,
    CoreModule,
    CommonModule,
    NgxsModule.forFeature([BlogState]),
    BlogRoutingModule,
  ]
})
export class BlogModule { }
