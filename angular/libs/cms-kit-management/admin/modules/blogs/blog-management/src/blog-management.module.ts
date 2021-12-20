import { NgModule, ModuleWithProviders, NgModuleFactory, Injector, Injectable } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ThemeAlainModule } from '@fs-tw/theme-alain';
import { BlogManagementRoutingModule } from './blog-management-routing.module';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MainComponent } from './components/main/main.component';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/components/extensions';
import { PageModule } from '@fs-tw/components/page';
import { ModalModule } from '@fs-tw/components/modals';
import { ImagePickerModule } from '@fs-tw/components/image-picker';

@NgModule({
  declarations: [
    MainComponent,
    BlogPostComponent
  ],
  imports: [
    CoreModule,
    ThemeAlainModule,
    BlogManagementRoutingModule,
    
    NzTabsModule,
    
    ThemeAlainUiExtensionsModule,
    PageModule,
    ModalModule,
    ImagePickerModule,
  ],
  exports: [
  ],
})
export class BlogManagementModule {
  static forChild(): ModuleWithProviders<BlogManagementModule> {
    return {
      ngModule: BlogManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<BlogManagementModule> {
    return new LazyModuleFactory(BlogManagementModule.forChild());
  }
  static forEarly(): NgModuleFactory<BlogManagementModule> {
    return new LazyModuleFactory(BlogManagementModule.forChild());
  }
}