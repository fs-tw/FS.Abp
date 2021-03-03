import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
//import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { APPLICATION_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//import { CmsTheProjectSharedModule} from '@fs/cms/the-project/shared';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    //CmsTheProjectSharedModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    //CmsTheProjectSharedModule
  ],
  providers: [APPLICATION_THEME_STYLES_PROVIDERS],
})
export class SharedModule {}
