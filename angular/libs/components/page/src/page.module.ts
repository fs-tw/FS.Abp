import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { PageComponent } from './components/page.component';
import { PageModule as AbpPageModule } from '@abp/ng.components/page';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/components/extensions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions'
import { PageSearchTemplateDirective } from './components/templates';

const exportedDeclarations = [PageComponent, PageSearchTemplateDirective];

@NgModule({
  imports: [
    CoreModule,
    NzCardModule,
    UiExtensionsModule,
    ThemeAlainUiExtensionsModule,
    AbpPageModule
  ],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations, ThemeAlainUiExtensionsModule]
})
export class PageModule {}
