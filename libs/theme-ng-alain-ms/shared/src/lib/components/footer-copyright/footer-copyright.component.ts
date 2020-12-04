import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'footer-copyright',
  templateUrl: './footer-copyright.component.html',
  host: {
    '[class.ay-footer__cr]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterCopyrightComponent {}
