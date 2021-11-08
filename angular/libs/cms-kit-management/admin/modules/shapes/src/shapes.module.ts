import { NgModule } from '@angular/core';

import { ShapesRoutingModule } from './shapes-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { ShapesComponent } from './shapes/shapes.component';

@NgModule({
  declarations: [
    ShapesComponent
  ],
  imports: [
    ShapesRoutingModule,
    CmsKitManagementSharedModule,
  ],
})
export class ShapesModule {}
