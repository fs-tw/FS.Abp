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
import { IdentityServerModalTabComponent } from './tabs/identity-server-modal-tab.component';

@Component({
  selector: 'abp-identity-server-modal',
  templateUrl: './identity-server-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityServerModalComponent implements OnInit {
  @Input() type: 'Create' | 'Edit' = 'Create';
  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();

  @ContentChildren(IdentityServerModalTabComponent) tabs: QueryList<
    IdentityServerModalTabComponent
  >;

  activeTab: string;

  constructor() {}

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
