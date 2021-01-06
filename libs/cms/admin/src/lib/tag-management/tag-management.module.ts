import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { TagManagementRoutingModule } from './tag-management-routing.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs-tw/cms/admin/shared';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { EditTagGroupComponent } from './components/edit-tag-group/edit-tag-group.component';

@NgModule({
  declarations: [MainComponent, LayoutComponent, TagDetailComponent, EditTagGroupComponent],
  imports: [
    SharedModule,
    TagManagementRoutingModule
  ]
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
