import { NgModule } from '@angular/core';

import { ContentsRoutingModule } from './contents-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { PickCoverImageModule } from '@fs-tw/components/pick-cover-image';
import { ContentsComponent } from './components/contents/contents.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    ContentsComponent
  ],
  imports: [
    ContentsRoutingModule,
    CmsKitManagementSharedModule,
    PickCoverImageModule,
  ],
})
export class ContentsModule {}
