import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions'

import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

let COMPONENT = [
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    NzTableModule,
    NzGridModule,
    NzSelectModule,

    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    UiExtensionsModule,
  ],
  exports: [
    ...COMPONENT,

    NzTableModule,
    NzGridModule,
    NzSelectModule,

    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    UiExtensionsModule,
  ],
})
export class AuditLogManagementSharedModule {}
