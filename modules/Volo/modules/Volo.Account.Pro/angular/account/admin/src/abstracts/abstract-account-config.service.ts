import { Observable } from 'rxjs';
import { RestService } from '@abp/ng.core';

export abstract class AbstractAccountSettingsService<Type, SubmitType = Type> {
  apiName = 'AbpAccountAdmin';
  protected abstract url: string;

  constructor(protected restService: RestService) {}

  getSettings(): Observable<Type> {
    return this.restService.request(
      {
        method: 'GET',
        url: this.url,
      },
      { apiName: this.apiName },
    );
  }

  updateSettings(body: Partial<SubmitType>): Observable<SubmitType> {
    return this.restService.request(
      {
        method: 'PUT',
        url: this.url,
        body,
      },
      { apiName: this.apiName },
    );
  }
}
