import { PermissionService } from '@abp/ng.core';
import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetLatestTenants } from '../../actions/saas.actions';
import { SaasTenantDto } from '../../proxy/host/dtos/models';
import { SaasState } from '../../states/saas.state';

@Component({
  selector: 'abp-latest-tenants-widget',
  templateUrl: './latest-tenants-widget.component.html',
})
export class LatestTenantsWidgetComponent {
  @Select(SaasState.getLatestTenants)
  datas$: Observable<SaasTenantDto[]>;

  @Input()
  minHeight = 136;

  trackByFn = (_, item) => item.id;

  constructor(private store: Store, private permissionService: PermissionService) {}

  draw = () => {
    if (!this.permissionService.getGrantedPolicy('Saas.Tenants')) {
      return;
    }

    this.store.dispatch(new GetLatestTenants());
  };
}
