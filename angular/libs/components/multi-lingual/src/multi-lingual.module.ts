import { NgModule, Type } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MultiLingualModalComponent } from './components/modals/modals.component';
import { MultiLingualService } from './services/multi-lingual.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/extensions';

const exportedDeclarations = [
  MultiLingualModalComponent
];

const SHARED_ABP_MODULES = [
  CoreModule,
  ThemeSharedModule,
  NgxValidateCoreModule,
  UiExtensionsModule,
];

export const SHARED_ZORRO_MODULES = [
  NzListModule,
  NzCommentModule,
  NzDividerModule,
  NzSelectModule,
  NzGridModule
];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [
    CoreModule,
    ...SHARED_ZORRO_MODULES,
    ...SHARED_ABP_MODULES,
    ThemeAlainUiExtensionsModule
  ],
  providers: [MultiLingualService],
})
export class MultiLingualModule {}
