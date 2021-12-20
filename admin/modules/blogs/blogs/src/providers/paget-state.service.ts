import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { Model } from '../models/model';

@Injectable({
    providedIn: 'root',
})
export class PageStateService {
    private _store = new InternalStore({} as Model.State);

    getOne$(key: string): Observable<any> {
        return this._store.sliceState((state) => state[key]);
    }

    getOne(key: string): any {
        return this._store.state[key];
    }

    setOne(key: string, value: any) {
        let item = this._store.state;
        item[key] = value;

        this._store.patch(item);
    }

    constructor() { }
}