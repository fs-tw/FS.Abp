import { ModuleWithProviders, NgModule } from '@angular/core';
//import { ThemeCoreModule } from '@fs/theme.core';
import { LayoutModule } from '@fs/theme.ng-alain/layout';
import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
//components
import { FsGapComponent } from './components/fs-gap/fs-gap.component';
import { FsNgAlainImagePickerComponent } from './components/fs-ng-alain-image-picker/fs-ng-alain-image-picker.component';
//import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { FsVerticalAlignmentComponent } from './components/fs-vertical-alignment/fs-vertical-alignment.component';

const COMPONENTS = [
  //FsNgAlainTreeComponent,
  FsNgAlainImagePickerComponent,
  ValidationErrorComponent,
  FsGapComponent,
  FsVerticalAlignmentComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    NgxValidateCoreModule,
    //ThemeCoreModule,
    NgAlainSharedModule,
    LayoutModule,
  ],
  exports: [
    NgxValidateCoreModule,
    //ThemeCoreModule,
    NgAlainSharedModule,
    LayoutModule,

    ...COMPONENTS
  ],
})
export class NgAlainBasicModule {
  static forRoot(): ModuleWithProviders<NgAlainBasicModule> {
    return {
      ngModule: NgAlainBasicModule,
      providers: [BASIC_THEME_STYLES_PROVIDERS],
    };
  }
}
