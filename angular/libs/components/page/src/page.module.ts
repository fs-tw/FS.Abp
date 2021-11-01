import { NgModule } from '@angular/core';
import { PageComponent } from './components/page.component';
import { PageSearchTemplateDirective } from './components/templates';
import { SHARED_ABP_MODULES } from './shared-abp.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/components/extensions';

const exportedDeclarations = [PageComponent, PageSearchTemplateDirective];

@NgModule({
  imports: [
    ThemeAlainUiExtensionsModule,
    ...SHARED_ABP_MODULES,
    ...SHARED_ZORRO_MODULES
  ],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations]
})
export class PageModule {}
