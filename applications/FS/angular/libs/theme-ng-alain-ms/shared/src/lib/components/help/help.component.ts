import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  host: {
    '[class.ms-help]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSHelpComponent {}
