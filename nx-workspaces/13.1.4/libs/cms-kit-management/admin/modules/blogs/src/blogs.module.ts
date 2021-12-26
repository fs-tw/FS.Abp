import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

@NgModule({
  imports: [
    BlogsRoutingModule,
    CmsKitManagementSharedModule
  ],
})
export class BlogsModule {}
