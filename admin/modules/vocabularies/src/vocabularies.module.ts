import { NgModule } from '@angular/core';

import { VocabulariesRoutingModule } from './vocabularies-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { VocabulariesComponent } from './components/vocabularies.component';


@NgModule({
  declarations: [VocabulariesComponent],
  imports: [
    VocabulariesRoutingModule,
    CmsKitManagementSharedModule
  ]
})
export class VocabulariesModule { }
