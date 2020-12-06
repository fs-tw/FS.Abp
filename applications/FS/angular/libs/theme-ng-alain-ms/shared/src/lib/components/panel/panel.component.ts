import { Component, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  host: {
    '[class.ms-panel]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSPanelComponent {
  // #region fields

  @Input() title: string | TemplateRef<any>;
  @Input() extra: string | TemplateRef<any>;

  // #endregion
}
