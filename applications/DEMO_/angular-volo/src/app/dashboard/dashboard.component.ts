import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'DEMO.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'DEMO.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
