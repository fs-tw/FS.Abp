import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard, AuthGuard } from '@abp/ng.core';
import { FileManagementComponent } from './file-management.component';
import { FileManagementInitializer } from './file-management.initializer';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard, PermissionGuard, FileManagementInitializer],
    component: FileManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileManagementRoutingModule {}
