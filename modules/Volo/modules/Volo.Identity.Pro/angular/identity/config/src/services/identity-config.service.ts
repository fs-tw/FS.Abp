import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type * as IdentitySettings from '../models/identity-settings';

@Injectable({
  providedIn: 'root',
})
export class IdentityConfigService {
  apiName = 'AbpIdentity';

  constructor(private restService: RestService) {}

  getSettings(): Observable<IdentitySettings.Settings> {
    return this.restService.request(
      {
        method: 'GET',
        url: '/api/identity/settings',
      },
      { apiName: this.apiName },
    );
  }

  updateSettings(body: IdentitySettings.Settings): Observable<void> {
    return this.restService.request(
      {
        method: 'PUT',
        url: `/api/identity/settings`,
        body,
      },
      { apiName: this.apiName },
    );
  }
}
