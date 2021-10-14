import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions'
import { MultiLingualModalComponent } from './components/modal/modal.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

const exportedDeclarations = [
    MultiLingualModalComponent
];

const SHARED_ABP_MODULES = [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    UiExtensionsModule
];

export const SHARED_ZORRO_MODULES = [
  NzGridModule
];


@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [CoreModule, ...SHARED_ZORRO_MODULES,...SHARED_ABP_MODULES],
})
export class MultiLingualModule {}
