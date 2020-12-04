import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { _HttpClient, ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@fs/theme.ng-alain-ms/core';
import { MSLink } from '@fs/theme.ng-alain-ms/shared';

export interface MSTopbar {
  [key: string]: any;

  messagess?: MSTopbarMessage[];

  navLinks?: { [key: string]: MSTopbarNavLink };
}

export interface MSTopbarMessage extends MSLink {
  [key: string]: any;

  className?: string;

  title?: string;

  createdTime?: string;
}

export interface MSTopbarNavLink extends MSLink {
  [key: string]: any;

  id?: string;

  text?: string;

  className?: string;
  /** 二级菜单，只支持一层 */
  links?: MSTopbarNavLink[];
}

/**
 * 顶部菜单所有数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/topbar-en-US.json`
 * - 最终处理数据以 `topbar.interface.ts` 系列接口为准
 */
@Injectable({ providedIn: 'root' })
export class MSTopbarService {
  private _data: MSTopbar;

  get data(): MSTopbar {
    return this._data;
  }

  get messages(): MSTopbarMessage[] {
    return this._data.messagess;
  }

  getData(): Observable<MSTopbar> {
    return this._data ? of(this._data) : this.getByHttp();
  }

  getNav(key: string): MSTopbarNavLink {
    return this._data.navLinks[key] || {};
  }

  constructor(private http: _HttpClient, @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService) {}

  private getByHttp() {
    return this.http.get(`./assets/tmp/topbar-${this.i18nSrv.currentLang}.json`).pipe(
      tap((res: any) => {
        this._data = res;
      }),
    );
  }
}
