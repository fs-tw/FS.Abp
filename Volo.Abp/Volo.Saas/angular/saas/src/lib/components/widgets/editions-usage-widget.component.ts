import { PermissionService, SubscriptionService } from '@abp/ng.core';
import { ChartComponent, getRandomBackgroundColor } from '@abp/ng.theme.shared';
import { Component, Input, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetUsageStatistics } from '../../actions';
import { SaasState } from '../../states/saas.state';

@Component({
  selector: 'abp-editions-usage-widget',
  templateUrl: './editions-usage-widget.component.html',
  providers: [SubscriptionService],
})
export class EditionsUsageWidgetComponent {
  @Select(SaasState.getUsageStatistics)
  data$: Observable<Record<string, number>>;

  @Output() initialized = new BehaviorSubject(this);

  @Input()
  width: number = 273;

  @Input()
  height: number = 136;

  chart: ChartComponent;

  chartData: any = {};

  draw = () => {
    if (!this.permissionService.getGrantedPolicy('Saas.Editions')) {
      return;
    }

    this.store.dispatch(new GetUsageStatistics());
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
              backgroundColor: getRandomBackgroundColor(Object.keys(data).length),
            },
          ],
        };

        this.chart.refresh();
      }, 0);
    });
  }
}
