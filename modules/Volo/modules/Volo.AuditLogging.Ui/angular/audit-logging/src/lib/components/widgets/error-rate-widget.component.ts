import { PermissionService, SubscriptionService } from '@abp/ng.core';
import { ChartComponent, Statistics } from '@abp/ng.theme.shared';
import { Component, Input, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetErrorRate } from '../../actions/audit-logging.actions';
import { AuditLoggingState } from '../../states/audit-logging.state';

@Component({
  selector: 'abp-error-rate-widget',
  template: `
    <div [abpPermission]="'AuditLogging.AuditLogs'" class="abp-widget-wrapper">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">{{ 'AbpAuditLogging::ErrorRateInLogs' | abpLocalization }}</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <abp-chart
              #chart
              (initialized)="initialize($event)"
              class="w-100"
              type="pie"
              [data]="chartData"
              [width]="width"
              [height]="height"
            ></abp-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  providers: [SubscriptionService],
})
export class ErrorRateWidgetComponent {
  @Select(AuditLoggingState.getErrorRateStatistics)
  data$: Observable<Statistics.Data>;

  @Output() initialized = new BehaviorSubject(this);

  @Input()
  width: number = 273;

  @Input()
  height: number = 136;

  chart: ChartComponent;

  chartData: any = {};

  draw = (filter: { startDate: string; endDate: string }) => {
    if (!this.permissionService.getGrantedPolicy('AuditLogging.AuditLogs')) {
      return;
    }

    this.store.dispatch(
      new GetErrorRate({
        startDate: filter.startDate,
        endDate: filter.endDate,
      }),
    );
  };

  initialize(chartComponent: ChartComponent) {
    this.chart = chartComponent;
  }

  constructor(
    private store: Store,
    private subscription: SubscriptionService,
    private permissionService: PermissionService,
  ) {
    this.listenToData();
  }

  listenToData() {
    this.subscription.addOne(this.data$, data => {
      if (!data || JSON.stringify(data) === '{}') {
        this.chartData = {};
        return;
      }
      const dataKeys = Object.keys(data);

      setTimeout(() => {
        this.chartData = {
          labels: dataKeys,
          datasets: [
            {
              data: dataKeys.map(key => data[key]),
              backgroundColor: ['#d76e6e', '#63ac44'],
            },
          ],
        };

        this.chart.refresh();
      }, 0);
    });
  }
}
