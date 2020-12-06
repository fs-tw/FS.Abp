import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { _HttpClient, ALAIN_I18N_TOKEN, MenuIcon } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { I18NService } from '@fs/theme.ng-alain-ms/core';

import { MSLink } from '@fs/theme.ng-alain-ms/shared';

export interface MSProductCategory {
  [key: string]: any;

  name: string;

  id?: string;

  products?: MSProduct[];
}

export interface MSProduct extends MSLink {
  [key: string]: any;

  id: string;

  name: string;

  icon?: string | MenuIcon;

  description?: string;

  shortcut?: boolean;

  /** Link for current product */
  link?: string;
}

export interface MSProductI18n {
  [key: string]: any;
  keywords?: string;
  allProduct?: string;
  hasResult?: string;
  noResult?: string;
  text?: string;
  recent?: string;
}

@Injectable({ providedIn: 'root' })
export class MSProductService {
  private _orgData: any;
  private _data: MSProductCategory[];
  private _shortcuts: MSProduct[];

  get data(): MSProductCategory[] {
    return this._data;
  }

  get i18n(): MSProductI18n {
    return this._orgData.i18n;
  }

  get shortcuts() {
    return this._shortcuts;
  }

  getData(): Observable<MSProductCategory[]> {
    return this._data ? of(this._data) : this.getByHttp();
  }

  constructor(private http: _HttpClient, @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService) {}

  private getByHttp(): Observable<MSProductCategory[]> {
    return this.http.get(`./assets/tmp/product-${this.i18nSrv.currentLang}.json`).pipe(
      tap((res: any) => {
        this._orgData = res;
        this._data = this.fixAliYunSourceData(res);
        this.genShortcut();
      }),
      map(() => this._data),
    );
  }

  private fixAliYunSourceData(a: any) {
    const fixProduct = (item: any) => {
      if (!item.products) return;
      const products = (item.products as any[])
        .map(id => a.products[id])
        .filter(w => !!w)
        .map(i => {
          i.id = i.productId;
          return i;
        });
      return {
        id: item.id,
        name: item.name,
        products,
      };
    };

    const res = [];
    a.categories.forEach((p: any) => {
      ((p.categories as any[]) || []).forEach(p2 => {
        res.push(fixProduct(p2));
      });
      res.push(fixProduct(p));
    });
    return res.filter(w => !!w);
  }

  private genShortcut() {
    const res: MSProduct[] = [];
    this._data.forEach(p => {
      res.push(...p.products.filter(w => w.shortcut && !res.find(r => r.id === w.id)));
    });
    this._shortcuts = res;
  }

  search(q: string): { list: MSProductCategory[][]; categories: MSProductCategory[] } {
    const column = 3;
    const list: MSProductCategory[][] = [[], [], []];

    // Process search key
    let oldList: MSProductCategory[] = deepCopy(this._data);
    if (q) {
      oldList = oldList.map(p => {
        p.products = p.products.filter(w => {
          return w.name.includes(q) || w.id.includes(q);
        });
        return p;
      });
    }

    // Clean empty children category
    const categories: MSProductCategory[] = [];
    let MockID = 0;
    oldList
      .filter(w => w.products.length > 0)
      .forEach((i, idx) => {
        i._id = ++MockID;
        list[idx % column].push(i);
        // Collecting category data
        if (categories.findIndex(w => w.name === i.name) === -1) {
          categories.push({ _id: i._id, name: i.name });
        }
      });

    return { list, categories };
  }

  setShortcut(i: MSProduct) {
    i.shortcut = !i.shortcut;
    const idx = this.shortcuts.findIndex(w => w.id === i.id);
    if (idx !== -1) {
      this.shortcuts.splice(idx, 1);
    }
    if (i.shortcut) {
      this.shortcuts.push(i);
    }
    this._data.forEach(p => {
      p.products
        .filter(w => w.id === i.id)
        .forEach(item => {
          item.shortcut = i.shortcut;
        });
    });
  }
}
