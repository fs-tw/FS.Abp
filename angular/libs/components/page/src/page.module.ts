import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { PageComponent } from './components/page.component';
import { PageModule as AbpPageModule } from '@abp/ng.components/page';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/extensions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions'

const exportedDeclarations = [PageComponent];

@NgModule({
  imports: [
    CoreModule,
    NzCardModule,
    UiExtensionsModule,
    ThemeAlainUiExtensionsModule,
    AbpPageModule
  ],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations,ThemeAlainUiExtensionsModule]
})
export class PageModule {}
