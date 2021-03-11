import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'footer-copyright',
  templateUrl: './footer-copyright.component.html',
  host: {
    '[class.ay-footer__cr]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterCopyrightComponent {
  currentYear = new Date().getFullYear();
}
