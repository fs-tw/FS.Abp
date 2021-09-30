import { NgModule } from '@angular/core';

import { ReactionsRoutingModule } from './reactions-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { ReactionsComponent } from './components/reactions';

@NgModule({
  declarations: [ReactionsComponent],
  imports: [
    ReactionsRoutingModule,
    CmsKitManagementSharedModule,
  ],
})
export class ReactionsModule {}
