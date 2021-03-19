import type { SampleDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  apiName = 'Default';

  get = () =>
    this.restService.request<any, SampleDto>({
      method: 'GET',
      url: `/api/FormManagement/sample`,
    },
    { apiName: this.apiName });

  getAuthorized = () =>
    this.restService.request<any, SampleDto>({
      method: 'GET',
      url: `/api/FormManagement/sample/authorized`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
