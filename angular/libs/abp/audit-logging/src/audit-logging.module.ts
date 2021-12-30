import {
  ModuleWithProviders,
  NgModule,
  NgModuleFactory,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLoggingRoutingModule } from './audit-logging-routing.module';
import { LogsComponent } from './components/audit-log/logs.component';
import { ActionsComponent } from './components/actions/actions.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { LazyModuleFactory, RoutesService } from '@abp/ng.core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/components/extensions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuditLogListComponent } from './components/audit-log/audit-log-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { PageHeaderModule } from '@delon/abc/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SEModule } from '@delon/abc/se';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { AuditLogDetailComponent } from './components/audit-log/audit-log-detail.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { Fs } from '@fs-tw/abp/audit-logging/proxy/audit-logging';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { LetModule } from '@delon/abc/let';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Pipe({
  name: 'jsonParse',
})
export class JsonParsePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    return JSON.parse(value);
  }
}

@Pipe({
  name: 'auditLogIcon',
})
export class AuditLogIconPipe implements PipeTransform {
  constructor(private service: RoutesService) {}
  transform(
    value: Fs.Abp.AuditLogging.Dtos.AuditLogDto,
    ...args: unknown[]
  ): any {
    return this.service.flat.find(
      (x) => x.name === value.extraProperties['AbpRouteName']
    )?.iconClass;
  }
}

@NgModule({
  declarations: [
    LogsComponent,
    ActionsComponent,
    MainPageComponent,
    AuditLogListComponent,
    AuditLogDetailComponent,
    JsonParsePipe,
    AuditLogIconPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzTableModule,
    NzInputModule,
    ScrollingModule,
    NzListModule,
    AuditLoggingRoutingModule,
    NgJsonEditorModule,
    ThemeAlainUiExtensionsModule,
    NzSkeletonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    PageHeaderModule,
    NzCardModule,
    NzRadioModule,
    NzButtonModule,
    NzDropDownModule,
    SEModule,
    NzSpaceModule,
    NzTabsModule,
    NzTimelineModule,
    NzCollapseModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzAvatarModule,
    NzBadgeModule,
    LetModule,
    NzDatePickerModule,
    NzTreeSelectModule
  ],
  exports: [AuditLogListComponent],
})
export class AuditLoggingModule {
  static forChild(): ModuleWithProviders<AuditLoggingModule> {
    return {
      ngModule: AuditLoggingModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<AuditLoggingModule> {
    return new LazyModuleFactory(AuditLoggingModule.forChild());
  }
  static forEarly(): NgModuleFactory<AuditLoggingModule> {
    return new LazyModuleFactory(AuditLoggingModule.forChild());
  }
}
