import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

let COMPONENT = [
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    QuillModule,
  ],
  exports: [
    ...COMPONENT,
  ],
})
export class EntityTypeManagementSharedModule {}
