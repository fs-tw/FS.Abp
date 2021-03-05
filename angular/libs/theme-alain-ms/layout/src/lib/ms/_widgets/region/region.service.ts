import { Inject, Injectable } from '@angular/core';
// import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN, _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface MSRegionDistrict {
  name?: string;
  list?: MSRegionItem[];
}

export interface MSRegionItem {
  id?: string;
  country?: string;
  name?: string;
  selected?: boolean;
}

@Injectable({ providedIn: 'root' })
export class MSRegionService {
  private _data!: MSRegionDistrict[];

  private get platList(): MSRegionItem[] {
    return this._data.reduce((p, c) => p.concat(c.list!), [] as MSRegionItem[]);
  }

  get item(): MSRegionItem {
    return this.platList.find((w) => w.selected)!;
  }

  get list(): MSRegionDistrict[] {
    return this._data;
  }

  constructor(
    private http: _HttpClient,
    //  @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService
     ) {}

  private getByHttp(): Observable<NzSafeAny[]> {
    return this.http.get(`/region`).pipe(
      tap((list: any[]) => {
        //const zone = this.i18nSrv.zone;
        //const key = `${list[0][`${zone}Name`] ? zone : 'cn'}Name`;
        // const res = list.reduce((p: MSRegionDistrict[], c) => {
        //   const districtName = `district_${key}`;
        //   let item = p.find((w) => w.name === c[districtName]);
        //   if (!item) {
        //     item = { name: c[districtName], list: [] };
        //     p.push(item);
        //   }
        //   item.list?.push({ id: c.id, country: c.country, name: c[key], selected: c.id === 'cn-shanghai' });
        //   return p;
        // }, []);
        // this._data = res;
      }),
    );
  }

  getData(): Observable<NzSafeAny[] | null> {
    return this._data ? of(null) : this.getByHttp();
  }

  setSelected(item: MSRegionItem): void {
    this.platList.find((w) => w.selected)!.selected = false;
    item.selected = true;
  }
}
