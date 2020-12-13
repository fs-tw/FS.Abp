import { Component, Input, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';

import { ApiScopePropertyDto } from '../../../../proxy/api-scope/dtos/models';
import { IdentityServerModalTabComponent } from '../identity-server-modal-tab.component';

@Component({
  selector: 'abp-identity-server-modal-properties-tab',
  templateUrl: './identity-server-modal-properties-tab.component.html',
  providers: [
    {
      provide: IdentityServerModalTabComponent,
      useExisting: IdentityServerModalPropertiesTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityServerModalPropertiesTabComponent
  extends IdentityServerModalTabComponent
  implements AfterViewInit {
  title = 'Properties';

  @Input() fieldName = 'properties';
  @ViewChild(IdentityServerModalTabComponent) freeTextTab: IdentityServerModalTabComponent;

  // tslint:disable-next-line: variable-name
  _selectedProperties: ApiScopePropertyDto[] = [];
  @Input() set selectedProperties(value: ApiScopePropertyDto[]) {
    this._selectedProperties = value || [];
  }

  get selectedProperties() {
    return this._selectedProperties;
  }

  ngAfterViewInit() {
    this.template = this.freeTextTab.template;
  }

  isValid() {
    return this.freeTextTab.isValid();
  }

  getValue() {
    return this.freeTextTab.getValue();
  }
}
