import { NgModule } from '@angular/core';

import { MediaDescriptorsRoutingModule } from './media-descriptors-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { MediaDescriptorsComponent } from './components/media-descriptors';
import { AttachmentMediaComponent } from './components/attachment-media/attachment-media.component';
import { MediaDescriptorsMainComponent } from './components/media-descriptors-main/media-descriptors-main.component';

@NgModule({
  declarations: [MediaDescriptorsMainComponent, MediaDescriptorsComponent, AttachmentMediaComponent],
  imports: [
    MediaDescriptorsRoutingModule,
    CmsKitManagementSharedModule,
  ],
})
export class MediaDescriptorsModule {}
