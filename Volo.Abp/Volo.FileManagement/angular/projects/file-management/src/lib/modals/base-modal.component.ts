import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'abp-file-management-modal',
  // do not use OnPush here, because of `parent` usage, it won't work
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <abp-modal
      [size]="parent.size"
      [visible]="parent.visible"
      (visibleChange)="parent.onVisibleChange($event)"
    >
      <ng-template #abpHeader>
        <h5 class="modal-title">
          {{ 'FileManagement::' + title | abpLocalization }}
        </h5>
      </ng-template>

      <ng-template #abpBody>
        <ng-content></ng-content>
      </ng-template>

      <ng-template #abpFooter>
        <button
          (click)="parent.closeModal()"
          type="button"
          [disabled]="parent.loading"
          class="btn btn-secondary"
        >
          {{ 'AbpUi::Cancel' | abpLocalization }}
        </button>
        <abp-button
          type="abp-button"
          [loading]="loading"
          iconClass="fa fa-check"
          (click)="parent.save()"
        >
          {{ 'AbpUi::Save' | abpLocalization }}
        </abp-button>
      </ng-template>
    </abp-modal>
  `,
})
export class BaseModalComponent {
  @Input() title: string;
  @Input() size = 'md';

  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() contentSaved = new EventEmitter<any>();
  @Input() parent: BaseModalComponent;

  loading = false;

  get self() {
    return this;
  }

  success = (response) => {
    this.closeModal();
    this.contentSaved.emit(response);
  };

  onVisibleChange(event) {
    this.visible = event;
    this.visibleChange.emit(this.visible);
  }

  closeModal() {
    this.onVisibleChange(false);
    this.clear();
  }

  clear() {}

  save() {
    if (this.shouldSave()) {
      this.loading = true;
      this.saveAction()
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(this.success);
    }
  }

  // this method will be overwritten by children
  shouldSave(): boolean {
    return true;
  }

  // this method will be overwritten by children
  saveAction(): Observable<any> {
    return of({});
  }
}
