import { NgModule } from '@angular/core';

import { ShapesRoutingModule } from './shapes-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { PickCoverImageModule } from '@fs-tw/components/pick-cover-image';
import { ShapesComponent } from './shapes/shapes.component';

@NgModule({
  declarations: [
    ShapesComponent
  ],
  imports: [
    ShapesRoutingModule,
    CmsKitManagementSharedModule,
    PickCoverImageModule,
  ],
})
export class ShapesModule {}
