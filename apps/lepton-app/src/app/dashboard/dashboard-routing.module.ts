import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationLayoutComponent } from '@volo/abp.ng.theme.lepton';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
