import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SEModule } from '@delon/abc/se';

import { PostRoutingModule } from './post-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module'

import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/main/list/list.component';
import { PageService } from './providers/page.service';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

import { TagComponent } from './components/tag/tag.component';

import { ImagePickerComponent } from './components/image-picker/image-picker.component';

const NzModules = [
  NzGridModule,
  NzInputModule,
  NzTableModule,
  NzDropDownModule,
  NzButtonModule,
  NzIconModule,
  NzModalModule,
  NzRadioModule,
  NzUploadModule,
  NzSpinModule,
  NzCardModule,
  NzSelectModule,
  NzDatePickerModule,
  NzTabsModule,
  SEModule
]

@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent,
    DetailComponent,
    ListComponent,
    UploadFileComponent,
    TagComponent,
    ImagePickerComponent
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