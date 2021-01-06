import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'GFLA.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'GFLA.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
