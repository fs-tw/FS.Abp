import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MSLink } from '../../../models/layout';

@Directive({ selector: '[link-to]' })
export class MSLinkToDirective {
  constructor(private router: Router) {}

  @Input('link-to') i!: MSLink;

  @Output() linkToChanged = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event'])
  _click(e: MouseEvent): void {
    const { link, target } = this.i;
    if (target != null) {
      if (target === '_blank') {
        window.open(link);
      } else {
        window.location.href = link!;
      }
      this.linkToChanged.emit(e);
      return;
    }
    setTimeout(() => {
      this.router.navigateByUrl(link!).then(() => this.linkToChanged.emit(e));
    });
  }
}
