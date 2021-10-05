import { NgModule } from '@angular/core';

import { ContentsRoutingModule } from './contents-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { PickCoverImageModule } from '@fs-tw/components/pick-cover-image';

@NgModule({
  declarations: [],
  imports: [
    ContentsRoutingModule,
    CmsKitManagementSharedModule,
    PickCoverImageModule,
  ],
})
export class ContentsModule {}
