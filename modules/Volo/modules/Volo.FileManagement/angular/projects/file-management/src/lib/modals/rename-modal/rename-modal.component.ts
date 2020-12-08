import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DirectoryContentDto } from '../../proxy/directories/models';
import { BaseModalComponent } from '../base-modal.component';
import { RenameModalService } from './rename-modal.service';

@Component({
  selector: 'abp-rename-modal',
  templateUrl: './rename-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RenameModalService],
})
export class RenameModalComponent extends BaseModalComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
  });

  // tslint:disable-next-line: variable-name
  _contentToRename: DirectoryContentDto;
  @Input()
  set contentToRename(val: DirectoryContentDto) {
    this._contentToRename = val;
    this.form.controls.name.patchValue(val?.name);
  }

  get contentToRename() {
    return this._contentToRename;
  }

  @Output() contentToRenameChange = new EventEmitter<DirectoryContentDto>();

  constructor(private service: RenameModalService, private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {}

  saveAction() {
    return this.service.rename({
      ...this.contentToRename,
      ...this.form.value,
    });
  }

  shouldSave() {
    return this.form.valid;
  }

  clear() {
    this.form.reset();
    this.contentToRename = null;
    this.contentToRenameChange.emit(this.contentToRename);
  }
}
