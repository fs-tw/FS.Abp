import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '../models/layout';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  apiName = 'LeptonTheme';

  constructor(private rest: RestService) {}

  get(): Observable<Layout.ThemeSettings> {
    return this.rest.request(
      {
        method: 'GET',
        url: '/api/lepton-theme-management/settings',
      },
      { apiName: this.apiName },
    );
  }

  update(body: Layout.ThemeSettings): Observable<Layout.ThemeSettings> {
    return this.rest.request(
      {
        method: 'PUT',
        url: `/api/lepton-theme-management/settings`,
        body,
      },
      { apiName: this.apiName },
    );
  }
}
