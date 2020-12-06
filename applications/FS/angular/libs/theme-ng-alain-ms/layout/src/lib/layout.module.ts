import { NgModule, Inject } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgAlainMsSharedModule } from '@fs/theme.ng-alain-ms/shared';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@fs/theme.ng-alain-ms/core';
import { default as zh_CN } from './ms/_i18n/zh-CN';
import { default as zh_TW } from './ms/_i18n/zh-TW';
import { default as en_US } from './ms/_i18n/en-US';

import { MS_ENTRYCOMPONENTS, MS_COMPONENTS } from './ms/ms.define';
import { NgxsModule } from '@ngxs/store';
import { PageBarComponent } from './components/page-bar/page-bar.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';

const FS_LAYOUT_COMPONENTS = [
  ApplicationLayoutComponent,
  AccountLayoutComponent,
  EmptyLayoutComponent
];


@NgModule({
  imports: [
    NgAlainMsSharedModule,
    DragDropModule
  ],
  providers: [
  ],
  entryComponents: [...MS_ENTRYCOMPONENTS, FS_LAYOUT_COMPONENTS],
  declarations: [...MS_COMPONENTS, FS_LAYOUT_COMPONENTS, PageBarComponent],
  exports: [...MS_COMPONENTS, FS_LAYOUT_COMPONENTS, PageBarComponent],
})
export class LayoutModule {
  constructor(@Inject(ALAIN_I18N_TOKEN) i18n: I18NService) {
    i18n.load('zh-CN', zh_CN);
    i18n.load('zh-TW', zh_TW);
    i18n.load('en-US', en_US);
  }
}
