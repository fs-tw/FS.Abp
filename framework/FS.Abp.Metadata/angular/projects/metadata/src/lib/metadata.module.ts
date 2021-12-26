import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { MetadataComponent } from './components/metadata.component';
import { MetadataRoutingModule } from './metadata-routing.module';

@NgModule({
  declarations: [MetadataComponent],
  imports: [CoreModule, ThemeSharedModule, MetadataRoutingModule],
  exports: [MetadataComponent],
})
export class MetadataModule {
  static forChild(): ModuleWithProviders<MetadataModule> {
    return {
      ngModule: MetadataModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<MetadataModule> {
    return new LazyModuleFactory(MetadataModule.forChild());
  }
}
