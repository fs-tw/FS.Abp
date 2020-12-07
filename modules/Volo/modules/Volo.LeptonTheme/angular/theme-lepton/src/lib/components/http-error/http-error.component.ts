import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'abp-http-error',
  templateUrl: './http-error.component.html',
})
export class HttpErrorComponent {
  errorStatus = '401';

  get errorStatusText(): string {
    switch (this.errorStatus) {
      case '401':
        return 'AbpUi::401Message';
      case '403':
        return 'AbpUi::403Message';
      case '404':
        return 'AbpUi::404Message';
      case '500':
        return 'AbpUi::500Message';
      default:
        return '';
    }
  }

  get errorDetail(): string {
    switch (this.errorStatus) {
      case '401':
        return 'AbpUi::DefaultErrorMessage401Detail';
      case '403':
        return 'AbpUi::DefaultErrorMessage403Detail';
      case '404':
        return 'AbpUi::DefaultErrorMessage404Detail';
      case '500':
        return 'AbpUi::DefaultErrorMessage';
      default:
        return '';
    }
  }

  destroy$: Subject<void>;
}
