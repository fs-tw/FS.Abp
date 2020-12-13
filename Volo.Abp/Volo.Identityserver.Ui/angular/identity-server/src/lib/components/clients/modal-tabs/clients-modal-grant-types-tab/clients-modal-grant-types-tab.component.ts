import { Component, TrackByFunction, ChangeDetectionStrategy, Input } from '@angular/core';
import { IdentityServerModalTabComponent } from '../../../../modals/identity-server-modal/tabs/identity-server-modal-tab.component';

@Component({
  selector: 'abp-clients-modal-grant-types-tab',
  templateUrl: './clients-modal-grant-types-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: ClientsModalGrantTypesTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsModalGrantTypesTabComponent extends IdentityServerModalTabComponent {
  @Input() selected = [];

  title = 'GrantTypes';
  customModel = 'Custom';

  grantTypesOptions: string[] = [
    'implicit',
    'authorization_code',
    'hybrid',
    'client_credentials',
    'password',
    this.customModel,
  ];

  model: string;
  customModelValue = '';

  trackByFn: TrackByFunction<any> = val => val;

  add() {
    const model = this.model === this.customModel ? this.customModelValue : this.model;

    if (!this.selected.includes(model)) {
      this.selected.push(model);
      this.customModelValue = '';
    }
  }

  getValue() {
    return {
      allowedGrantTypes: this.selected,
    };
  }

  delete(index: number) {
    this.selected.splice(index, 1);
  }
}
