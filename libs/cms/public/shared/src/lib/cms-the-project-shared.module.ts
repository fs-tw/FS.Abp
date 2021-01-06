import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
//import { SharedModule } from './shared/shared.module';
import {CurrentPostComponent} from './component/current-post/current-post.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './component/pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TextOverflowPipe } from './pipe/text-overflow.pipe';
@NgModule({
  imports: [
    CommonModule,
    //SharedModule,
    CoreModule,
    RouterModule,
    FormsModule,
    NgbCarouselModule,
    CarouselModule
  ],
  declarations:[
    CurrentPostComponent,PaginationComponent,TextOverflowPipe
  ],
  exports:[
    CurrentPostComponent,PaginationComponent,TextOverflowPipe
  ]
  
})
export class CmsTheProjectSharedModule {
  // static forChild(): ModuleWithProviders<CmsTheProjectSharedModule> {
  //   return {
  //     ngModule: CmsTheProjectShardModule,
  //     providers: [],
  //   };
  // }

  // static forLazy(): NgModuleFactory<CmsTheProjectSharedModule> {
  //   return new LazyModuleFactory(CmsTheProjectSharedModule.forChild());
  // }

}
