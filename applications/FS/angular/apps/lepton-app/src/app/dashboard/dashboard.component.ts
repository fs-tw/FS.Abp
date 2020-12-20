import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'FS.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'FS.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
