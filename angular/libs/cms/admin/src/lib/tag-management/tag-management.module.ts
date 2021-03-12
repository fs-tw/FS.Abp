import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { TagManagementRoutingModule } from './tag-management-routing.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '../shared/shared.module';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { NgxsModule } from '@ngxs/store';
import { PageService } from './providers/page.service';

@NgModule({
  declarations: [MainComponent, LayoutComponent, TagDetailComponent],
  imports: [
    SharedModule,
    TagManagementRoutingModule
  ],
  providers: [PageService]
})
export class TagManagementModule {
  static forChild(): ModuleWithProviders<TagManagementModule> {
    return {
      ngModule: TagManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<TagManagementModule> {
    return new LazyModuleFactory(TagManagementModule.forChild());
  }
  static forEarly(): NgModuleFactory<TagManagementModule> {
    return new LazyModuleFactory(TagManagementModule.forChild());
  }
}
