import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';

import { ProjectRoutingModule } from './project-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs/crm/ng-alain/shared';

@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    SharedModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule {
  static forChild(): ModuleWithProviders<ProjectModule> {
    return {
      ngModule: ProjectModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<ProjectModule> {
    return new LazyModuleFactory(ProjectModule.forChild());
  }  
  static forEarly(): NgModuleFactory<ProjectModule> {
    return new LazyModuleFactory(ProjectModule.forChild());
  }    
 }
