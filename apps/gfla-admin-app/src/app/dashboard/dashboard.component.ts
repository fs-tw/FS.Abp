import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'IIC.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'IIC.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
