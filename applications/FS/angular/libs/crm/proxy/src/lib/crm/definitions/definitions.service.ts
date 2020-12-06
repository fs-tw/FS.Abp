import type { SelectOptionDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefinitionsService {
  apiName = 'Default';

  getBasicDataDefinition = () =>
    this.restService.request<any, SelectOptionDto[]>({
      method: 'GET',
      url: `/api/crm/definitions/basic-data-definition`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
