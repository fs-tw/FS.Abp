import type { GetTemplateDefinitionListInput, TemplateDefinitionDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateDefinitionService {
  apiName = 'TextTemplateManagement';

  get = (name: string) =>
    this.restService.request<any, TemplateDefinitionDto>({
      method: 'GET',
      url: `/api/text-template-management/template-definitions/${name}`,
    },
    { apiName: this.apiName });

  getList = (input: GetTemplateDefinitionListInput) =>
    this.restService.request<any, PagedResultDto<TemplateDefinitionDto>>({
      method: 'GET',
      url: `/api/text-template-management/template-definitions`,
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
