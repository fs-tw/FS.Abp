import { NgModule } from '@angular/core';

import { MediaDescriptorsRoutingModule } from './media-descriptors-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { MediaDescriptorsComponent } from './components/media-descriptors';
import { AttachmentMediaComponent } from './components/attachment-media/attachment-media.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent, MediaDescriptorsComponent, AttachmentMediaComponent],
  imports: [
    MediaDescriptorsRoutingModule,
    CmsKitManagementSharedModule,
  ],
})
export class MediaDescriptorsModule {}
