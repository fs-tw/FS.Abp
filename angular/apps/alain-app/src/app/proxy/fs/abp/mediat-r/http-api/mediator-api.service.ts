import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ICommand, IQuery } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MediatorApiService {
  apiName = 'Default';

  commandByRequest = (request: ICommand) =>
    this.restService.request<any, object>({
      method: 'POST',
      url: '/api/mediator/command',
      body: request,
    },
    { apiName: this.apiName });

  queryByRequest = (request: IQuery) =>
    this.restService.request<any, object>({
      method: 'POST',
      url: '/api/mediator/query',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
