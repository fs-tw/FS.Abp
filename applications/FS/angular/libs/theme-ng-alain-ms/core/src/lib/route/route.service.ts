import { Injectable, OnDestroy } from '@angular/core';
import { Navigation, NavigationEnd, Router } from '@angular/router';
import { ST_DEFULAT_CONFIG } from '@delon/abc/st';
import { AlainConfigService, deepGet } from '@delon/util';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RouteService implements OnDestroy {
  private router$: Subscription;
  private _nav: Navigation;
  private _zeroIndexed = false;

  /**
   * Get the `pi` value (service by `st`)
   */
  get pi() {
    const pi = this.get('pi', null);
    return pi == null ? (this._zeroIndexed ? 1 : 0) : pi;
  }

  /** Get all the data */
  get data() {
    return deepGet(this._nav, `extras.state`);
  }

  constructor(private router: Router, stCog: AlainConfigService) {
    this._zeroIndexed = stCog.merge('st', ST_DEFULAT_CONFIG).page.zeroIndexed;
    this.router$ = router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => (this._nav = this.router.getCurrentNavigation()));
  }

  /** Get the value via `key` */
  get(key: string, defaultValue: any = null): any {
    return deepGet(this._nav, `extras.state.${key}`, defaultValue);
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
  }
}
