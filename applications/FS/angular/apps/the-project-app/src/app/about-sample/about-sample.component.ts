import { Component, AfterViewInit, NgZone } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import { LayoutService } from '@fs/theme.the-project';
import { interval, of } from 'rxjs';
import { timeout, delay } from 'rxjs/operators';

@Component({
  selector: 'app-about-sample',
  templateUrl: './about-sample.component.html',
})
export class AboutSampleComponent implements AfterViewInit {

  constructor(
    private layoutService: LayoutService) { }
  ngAfterViewInit(): void {
    of(null).pipe(delay(0))
      .subscribe(() => this.layoutService.ready$.next(true));

    // interval(0).subscribe(x => {
    //   this.layoutService.ready$.next(true);
    // });

  }
}
