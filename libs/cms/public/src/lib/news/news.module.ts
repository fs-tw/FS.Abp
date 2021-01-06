import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsState } from './providers/news.state';
import { DetailComponent } from './components/detail/detail.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LazyModuleFactory } from '@abp/ng.core';
import { PageService } from './providers/page.service';
import { FormsModule } from '@angular/forms'; 
import { CmsTheProjectSharedModule } from '@fs-tw/cms/the-project/shared'
@NgModule({
  declarations: [MainComponent, DetailComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    NgxsModule.forFeature([ NewsState ]),
    CarouselModule.forRoot(),
    CmsTheProjectSharedModule,
    ReactiveFormsModule
  ],
  providers:[
    PageService
  ]
})
export class NewsModule {
  static forChild(): ModuleWithProviders<NewsModule> {
    return {
      ngModule: NewsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<NewsModule> {
    return new LazyModuleFactory(NewsModule.forChild());
  }  
  static forEarly(): NgModuleFactory<NewsModule> {
    return new LazyModuleFactory(NewsModule.forChild());
  }  
 }
