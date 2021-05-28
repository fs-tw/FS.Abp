import { NgModule } from '@angular/core';

import { VocabulariesRoutingModule } from './vocabularies-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/admin/shared';
import { VocabulariesComponent } from './components/vocabularies.component';


@NgModule({
  declarations: [VocabulariesComponent],
  imports: [
    VocabulariesRoutingModule,
    CmsKitManagementAdminSharedModule
  ]
})
export class VocabulariesModule { }
