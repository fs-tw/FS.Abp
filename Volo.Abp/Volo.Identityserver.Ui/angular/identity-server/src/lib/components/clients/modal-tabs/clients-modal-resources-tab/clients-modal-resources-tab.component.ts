import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IdentityServerModalTabComponent } from '../../../../modals/identity-server-modal/tabs/identity-server-modal-tab.component';

@Component({
  selector: 'abp-clients-modal-resources-tab',
  templateUrl: './clients-modal-resources-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: ClientsModalResourcesTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsModalResourcesTabComponent extends IdentityServerModalTabComponent {
  @Input() resources: any[];
  @Input() fieldName = 'scopes';

  getValue() {
    return { [this.fieldName]: this.resources.filter(res => res.left) };
  }
}
