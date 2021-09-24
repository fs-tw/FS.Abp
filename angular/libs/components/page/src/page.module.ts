import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { PageComponent } from './components/page.component';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions'

const exportedDeclarations = [PageComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations],
  imports: [
    CoreModule,
    NzCardModule,
    UiExtensionsModule,
    ThemeAlainUiExtensionsModule,
  ],
})
export class PageModule {}
