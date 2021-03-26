import { NgModule,ModuleWithProviders,NgModuleFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { VersionsRoutingModule } from './versions-routing.module';
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
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { MainComponent } from './component/main/main.component';
import { VersionComponent} from './component/version/version.component';
import { VersiondefinitionComponent } from './component/versiondefinition/versiondefinition.component';

import { PageService } from './providers/page.service';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { SharedModule } from '@fs-tw/cms/admin/shared';

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
  SEModule,
  NzEmptyModule
]

@NgModule({
  declarations: [
    MainComponent,
    VersionComponent,
    VersiondefinitionComponent
  ],
  imports: [
    CommonModule,
    VersionsRoutingModule,
    UiExtensionsModule,
    ThemeSharedModule,
    CoreModule,
    SharedModule,
    ...NzModules,
    QuillModule.forRoot()
  ],
  providers:[
    PageService
  ]
})
export class VersionsModule { 
  static forChild(): ModuleWithProviders<VersionsModule> {
    return {
      ngModule: VersionsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<VersionsModule> {
    return new LazyModuleFactory(VersionsModule.forChild());
  }
  static forEarly(): NgModuleFactory<VersionsModule> {
    return new LazyModuleFactory(VersionsModule.forChild());
  }
}
