import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Injector,
} from '@angular/core';
import { CmsKitModalTabComponent } from '../cms-kit-modal-tab.component';
import { FormGroup } from '@angular/forms';
import { CmsKitModalComponent } from '../../cms-kit-modal.component';

@Component({
  selector: 'fs-tw-cms-kit-modal-info-tab',
  templateUrl: './cms-kit-modal-info-tab.component.html',
  providers: [
    {
      provide: CmsKitModalTabComponent,
      useExisting: CmsKitModalPagesTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsKitModalPagesTabComponent extends CmsKitModalTabComponent {
  //title = 'NewPage';

  @Input() form: FormGroup;
  @Input() selectedRecord = {};

  constructor(public modal: CmsKitModalComponent) {
    super();
  }

  isValid() {
    return this.form.valid;
  }

  getValue() {
    return this.form.value;
  }
}
