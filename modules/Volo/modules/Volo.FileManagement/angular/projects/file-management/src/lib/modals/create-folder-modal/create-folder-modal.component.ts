import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateFolderModalService } from './create-folder-modal.service';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'abp-create-folder-modal',
  templateUrl: './create-folder-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CreateFolderModalService],
})
export class CreateFolderModalComponent extends BaseModalComponent {
  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private service: CreateFolderModalService
  ) {
    super();
  }

  shouldSave() {
    return this.form.valid;
  }

  saveAction() {
    return this.service.create(this.form.controls.name.value);
  }

  clear() {
    this.form.reset();
  }
}
