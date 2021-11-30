import { NgModule } from '@angular/core';

import { AuditLogsRoutingModule } from './audit-logs-routing.module';
import { AuditLogManagementSharedModule } from '@fs-tw/audit-log-management/shared';
import { LogsComponent } from './components/logs/logs.component';
import { ActionsComponent } from './components/actions/actions.component';
import { NgJsonEditorModule } from 'ang-jsoneditor' 

@NgModule({
  declarations: [
    LogsComponent,
    ActionsComponent
  ],
  imports: [
    AuditLogsRoutingModule,
    AuditLogManagementSharedModule,

    NgJsonEditorModule
  ],
})
export class AuditLogsModule {}
