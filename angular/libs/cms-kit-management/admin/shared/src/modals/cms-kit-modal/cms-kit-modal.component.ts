import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CmsKitModalTabComponent } from './tabs/cms-kit-modal-tab.component';

@Component({
  selector: 'fs-tw-cms-kit-modal',
  templateUrl: './cms-kit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsKitModalComponent implements OnInit {
  @Input() type: 'Create' | 'Edit' = 'Create';
  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();

  @ContentChildren(CmsKitModalTabComponent)
  tabs: QueryList<CmsKitModalTabComponent>;

  activeTab = '0';

  constructor() { }

  ngOnInit(): void {}

  onVisibleChange(event: boolean) {
    this.visible = event;
    this.visibleChange.emit(event);
  }

  shouldBeDisabled = () => {
    return !!this.tabs.some(tab => !tab.isValid());
  };

  onSave() {
    if (!this.shouldBeDisabled()) {
      const value = this.tabs.reduce((retVal, curr) => ({ ...retVal, ...curr.getValue() }), {});
      this.save.emit(value);
    }
  }

}
