import { NgModule } from '@angular/core';

import { RatingsRoutingModule } from './ratings-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { RatingsComponent } from './components/ratings';

@NgModule({
  declarations: [RatingsComponent],
  imports: [
    RatingsRoutingModule,
    CmsKitManagementSharedModule,
  ],
})
export class RatingsModule {}
