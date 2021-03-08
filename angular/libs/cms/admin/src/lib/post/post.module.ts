import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { QuillModule } from 'ngx-quill';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { PostRoutingModule } from './post-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module'

// import { PostState } from './providers/post/post.state'
import { NgxsModule } from '@ngxs/store';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/main/list/list.component';
import { CreateComponent } from './components/modal/create/create.component';
// import { PostsStateService } from './providers/post/poststate.service';
import { PageService } from './providers/page.service';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from './components/tag/tag.component';

const NzModules = [
  NzGridModule,
  NzInputModule,
  NzTableModule,
  NzDropDownModule,
  NzButtonModule,
  NzIconModule
]

@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent,
    DetailComponent,
    ListComponent,
    CreateComponent,
    UploadFileComponent,
    TagComponent

  ],
  imports: [
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PostRoutingModule,
    ...NzModules,
    // NgxsModule.forFeature([PostState]),
    QuillModule.forRoot()

  ],
  providers: [
    // PostsStateService,
    PageService
  ]
})
export class PostModule {
  static forChild(): ModuleWithProviders<PostModule> {
    return {
      ngModule: PostModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<PostModule> {
    return new LazyModuleFactory(PostModule.forChild());
  }
  static forEarly(): NgModuleFactory<PostModule> {
    return new LazyModuleFactory(PostModule.forChild());
  }
}