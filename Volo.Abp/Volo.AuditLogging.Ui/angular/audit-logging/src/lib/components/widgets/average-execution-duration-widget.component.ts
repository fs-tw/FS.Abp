import { LocalizationService, PermissionService, SubscriptionService } from '@abp/ng.core';
import { ChartComponent, Statistics } from '@abp/ng.theme.shared';
import { Component, Input, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetAverageExecutionDurationPerDay } from '../../actions/audit-logging.actions';
import { AuditLoggingState } from '../../states/audit-logging.state';

@Component({
  selector: 'abp-average-execution-duration-widget',
  template: `
    <div [abpPermission]="'AuditLogging.AuditLogs'" class="abp-widget-wrapper">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            {{ 'AbpAuditLogging::AverageExecutionDurationInLogsPerDay' | abpLocalization }}
          </h5>
        </div>
        <div class="card-body">
          <div class="row">
            <abp-chart
              #chart
              (initialized)="initialize($event)"
              class="w-100"
              type="bar"
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
export class AverageExecutionDurationWidgetComponent {
  @Select(AuditLoggingState.getAverageExecutionStatistics)
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
      new GetAverageExecutionDurationPerDay({
        startDate: filter.startDate,
        endDate: filter.endDate,
      }),
    );
  };

  constructor(
    private store: Store,
    private localizationService: LocalizationService,
    private subscription: SubscriptionService,
    private permissionService: PermissionService,
  ) {
    this.listenToData();
  }

  initialize(chartComponent: ChartComponent) {
    this.chart = chartComponent;
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
              label: this.localizationService.instant(
                'AbpAuditLogging::AverageExecutionDurationInMilliseconds',
              ),
              backgroundColor: '#fa6e6e',
              data: dataKeys.map(key => data[key]),
            },
          ],
        };
        this.chart.refresh();
      }, 0);
    });
  }
}
