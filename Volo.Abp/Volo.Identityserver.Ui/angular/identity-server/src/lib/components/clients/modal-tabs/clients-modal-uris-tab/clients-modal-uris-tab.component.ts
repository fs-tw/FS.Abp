import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IdentityServerModalTabComponent } from '../../../../modals/identity-server-modal/tabs/identity-server-modal-tab.component';

@Component({
  selector: 'abp-clients-modal-uris-tab',
  templateUrl: './clients-modal-uris-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: ClientsModalUrisTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsModalUrisTabComponent extends IdentityServerModalTabComponent {
  title = 'Uris';

  callbackUrl: string;
  logoutUrl: string;

  getValue() {
    return {
      callbackUrl: this.callbackUrl,
      logoutUrl: this.logoutUrl,
    };
  }
}
