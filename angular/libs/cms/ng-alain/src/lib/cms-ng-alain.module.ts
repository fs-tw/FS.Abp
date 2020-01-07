import { NgModule } from '@angular/core';

import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { CmsModule } from '@fs/cms';
import { SharedModule } from './shared/shared.module';
import { CmsNgAlainRoutingModule } from './cms-ng-alain-routing.module';

import { BlogModule } from './blog/blog.module';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [],
  imports: [
  
    CmsModule,
    CmsNgAlainRoutingModule,
    NgAlainBasicModule,
    SharedModule,

    BlogModule,
    PostModule,

  ]
})
export class CmsNgAlainModule { }
