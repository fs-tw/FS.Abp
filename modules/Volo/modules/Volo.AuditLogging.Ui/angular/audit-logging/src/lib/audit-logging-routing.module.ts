import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditLogsComponent } from './components/audit-logs/audit-logs.component';
import { eAuditLoggingComponents } from './enums/components';
import { AuditLoggingExtensionsGuard } from './guards/extensions.guard';

const routes: Routes = [
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard, AuditLoggingExtensionsGuard],
    children: [
      {
        path: '',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'AuditLogging.AuditLogs',
          replaceableComponent: {
            key: eAuditLoggingComponents.AuditLogs,
            defaultComponent: AuditLogsComponent,
          } as ReplaceableComponents.RouteData<AuditLogsComponent>,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditLoggingRoutingModule {}
