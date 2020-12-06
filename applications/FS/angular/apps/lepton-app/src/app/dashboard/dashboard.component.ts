import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'Ota.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'Ota.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
