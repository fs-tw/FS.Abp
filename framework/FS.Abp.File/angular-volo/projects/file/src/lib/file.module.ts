import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { FileComponent } from './components/file.component';
import { FileRoutingModule } from './file-routing.module';

@NgModule({
  declarations: [FileComponent],
  imports: [CoreModule, ThemeSharedModule, FileRoutingModule],
  exports: [FileComponent],
})
export class FileModule {
  static forChild(): ModuleWithProviders<FileModule> {
    return {
      ngModule: FileModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<FileModule> {
    return new LazyModuleFactory(FileModule.forChild());
  }
}
