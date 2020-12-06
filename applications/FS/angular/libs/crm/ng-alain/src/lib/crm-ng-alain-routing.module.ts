import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { EmployeeModule } from './employee/employee.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { ProjectModule } from './project/project.module';
import { CustomerModule } from './customer/customer.module';
import { CounselingRecordModule } from './counseling-record/counseling-record.module';
import { SelectorOptionsManagementModule } from './selector-options-management/selector-options-management.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'selector-options-management' },
  {
    path: '',
    canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'enterprise',
        loadChildren: EnterpriseModule.forEarly
      },
      {
        path: 'employee',
        loadChildren: EmployeeModule.forEarly
      },
      {
        path: 'projects',
        loadChildren: ProjectModule.forEarly
      },
      {
        path: 'customers',
        loadChildren: CustomerModule.forEarly
      },
      {
        path: 'counseling-recrod',
        loadChildren: CounselingRecordModule.forEarly
      },{
        path: 'selector-options-management',
        loadChildren: SelectorOptionsManagementModule.forEarly
      }
    ]
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrmNgAlainRoutingModule { }
