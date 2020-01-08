import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { PostRoutingModule } from './post-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PostState } from './providers/post.state'
import { NgxsModule } from '@ngxs/store';
@NgModule({
  declarations: [LayoutComponent,MainComponent],
  imports: [
    NgAlainBasicModule,
    CoreModule,
    CommonModule,
    PostRoutingModule,
    NgxsModule.forFeature([PostState]),
  ]
})
export class PostModule { }
