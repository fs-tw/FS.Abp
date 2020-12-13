import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IdentityServerModalTabComponent } from '../identity-server-modal-tab.component';
import { IdentityServerModalComponent } from '../../identity-server-modal.component';

@Component({
  selector: 'abp-identity-server-modal-info-tab',
  templateUrl: './identity-server-modal-info-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: IdentityServerModalInfoTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityServerModalInfoTabComponent extends IdentityServerModalTabComponent {
  title = 'Info';

  @Input() form: FormGroup;
  @Input() selectedRecord = {};

  constructor(public modal: IdentityServerModalComponent) {
    super();
  }

  isValid() {
    return this.form.valid;
  }

  getValue() {
    return this.form.value;
  }
}
