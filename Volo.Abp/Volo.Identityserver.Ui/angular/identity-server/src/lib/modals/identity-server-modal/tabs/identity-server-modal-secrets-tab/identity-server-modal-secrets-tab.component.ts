import { ChangeDetectionStrategy, Component, Input, OnInit, TrackByFunction } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ApiResourceSecretDto } from '../../../../proxy/api-resource/dtos/models';
import { IdentityServerModalTabComponent } from '../identity-server-modal-tab.component';

@Component({
  selector: 'abp-identity-server-modal-secrets-tab',
  templateUrl: './identity-server-modal-secrets-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: IdentityServerModalSecretsTabComponent,
    },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityServerModalSecretsTabComponent
  extends IdentityServerModalTabComponent
  implements OnInit {
  title = 'Secrets';

  @Input() fieldName = 'secrets';

  form = this.fb.group({
    type: ['SharedSecret', Validators.required],
    value: [null, Validators.required],
    description: [null],
    expiration: [null],
  });

  // tslint:disable-next-line: variable-name
  _selectedSecrets: ApiResourceSecretDto[] = [];
  @Input() set selectedSecrets(value: ApiResourceSecretDto[]) {
    this._selectedSecrets = value || [];
  }

  get selectedSecrets() {
    return this._selectedSecrets;
  }

  trackByFn: TrackByFunction<ApiResourceSecretDto> = (_, dto) => dto.type;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {}

  add() {
    if (this.form.valid) {
      this._selectedSecrets.push(this.form.value);
      this.form.reset();
      this.form.patchValue({ type: 'SharedSecret' });
    }
  }

  getValue() {
    return { [this.fieldName]: this.selectedSecrets };
  }

  delete(index) {
    this._selectedSecrets.splice(index, 1);
  }
}
