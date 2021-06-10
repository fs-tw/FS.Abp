import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbComponent as AbpBreadcrumbComponent } from '@abp/ng.theme.shared';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  ABP,
  getRoutePath,
  RouterEvents,
  RoutesService,
  SubscriptionService,
  TreeNode,
} from '@abp/ng.core';

@Component({
  template: `
    <ng-template #breadcrumb>
      <nz-breadcrumb *ngIf="segments.length > 0">
        <nz-breadcrumb-item>
          <a routerLink="/"><i class="fa fa-home"></i> </a>
        </nz-breadcrumb-item>
        <nz-breadcrumb-item *ngFor="let i of segments">
          {{ i.name | abpLocalization }}
        </nz-breadcrumb-item>
      </nz-breadcrumb>
    </ng-template>
    <ng-template #action>
      <abp-page-toolbar ></abp-page-toolbar>
    </ng-template>
  `,
  providers: [AbpBreadcrumbComponent],
})
export class PageHeaderDefaultComponent extends AbpBreadcrumbComponent {
  @Input() ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  @ViewChild('breadcrumb') breadcrumb: TemplateRef<any>;
  @ViewChild('action') action: TemplateRef<any>;

  constructor(
    public readonly _cdRef: ChangeDetectorRef,
    private _router: Router,
    private _routes: RoutesService,
    private _subscription: SubscriptionService,
    private _routerEvents: RouterEvents
  ) {
    super(_cdRef, _router, _routes, _subscription, _routerEvents);
  }

  ngAfterViewInit() {
    this.ready$.next(true);
  }
}
