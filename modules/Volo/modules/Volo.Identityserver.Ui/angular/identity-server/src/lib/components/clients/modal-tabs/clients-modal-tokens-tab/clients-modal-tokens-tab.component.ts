import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IdentityServerModalTabComponent } from '../../../../modals/identity-server-modal/tabs/identity-server-modal-tab.component';
import { ClientWithDetailsDto } from '../../../../proxy/client/dtos/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'abp-clients-modal-tokens-tab',
  templateUrl: './clients-modal-tokens-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: ClientsModalTokensTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsModalTokensTabComponent extends IdentityServerModalTabComponent {
  title = 'Tokens';

  @Input() set selected(val: ClientWithDetailsDto) {
    this.form.patchValue(val);
  }

  form = this.fb.group({
    accessTokenLifetime: [0],
    accessTokenType: [0],
    consentLifetime: [0],
    pairWiseSubjectSalt: [''],
    includeJwtId: [false],
    userSsoLifetime: [0],
    userCodeType: [''],
    deviceCodeLifetime: [0],
    requirePkce: [false],
    requireClientSecret: [false],
  });

  constructor(private fb: FormBuilder) {
    super();
  }

  getValue() {
    return this.form.value;
  }
}
