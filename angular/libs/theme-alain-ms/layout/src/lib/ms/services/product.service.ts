import { Inject, Injectable } from '@angular/core';
// import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN, MenuIcon, _HttpClient } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { MSLink } from '../../models/layout';

import {
  RoutesService,
  PermissionService,
  LocalizationPipe,
} from '@abp/ng.core';
import { MSProduct, MSProductCategory, MSProductI18n } from '../../models';
import { LayoutStateService } from '../../services/layout-state.service';

@Injectable({ providedIn: 'root' })
export class MSProductService {
  private _data!: MSProductCategory[];

  get data(): MSProductCategory[] {
    return this._data;
  }

  get i18n(): MSProductI18n {
    return {
      showAll: true,
      keywords: '請輸入關鍵詞',
      allProduct: '查詢全部産品',
      show: true,
      hasResult: '以下是與“<strong>{filterTxt}</strong>”相關的産品：',
      noResult: '未找到與“<strong>{filterTxt}</strong>”相關的産品。',
      text: '産品與服務',
      recent: '最近訪問',
    };
  }

  getData(): Observable<MSProductCategory[]> {
    return this.layoutSateService.getCategories$().pipe(
      tap((x) => {
        this._data = x;
      })
    );
  }

  constructor(
    private layoutSateService: LayoutStateService
  ) {}

  search(
    q: string
  ): { list: MSProductCategory[][]; categories: MSProductCategory[] } {
    const column = 3;
    const list: MSProductCategory[][] = [[], [], []];

    // Process search key
    let oldList: MSProductCategory[] = deepCopy(this._data);
    if (q) {
      oldList = oldList.map((p) => {
        p.products = p.products?.filter((w) => {
          return w.name.includes(q) || w.id.includes(q);
        });
        return p;
      });
    }

    // Clean empty children category
    const categories: MSProductCategory[] = [];
    let MockID = 0;
    oldList
      .filter((w) => w.products!.length > 0)
      .forEach((i, idx) => {
        i._id = ++MockID;
        list[idx % column].push(i);
        // Collecting category data
        if (categories.findIndex((w) => w.name === i.name) === -1) {
          categories.push({ _id: i._id, name: i.name });
        }
      });

    return { list, categories };
  }
}
