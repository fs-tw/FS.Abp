import type { GetLanguagesTextsInput, LanguageTextDto } from './dto/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageTextService {
  apiName = 'LanguageManagement';

  get = (resourceName: string, cultureName: string, name: string, baseCultureName: string) =>
    this.restService.request<any, LanguageTextDto>(
      {
        method: 'GET',
        url: `/api/language-management/language-texts/${resourceName}/${cultureName}/${name}`,
        params: { baseCultureName },
      },
      { apiName: this.apiName },
    );

  getList = (input: GetLanguagesTextsInput) =>
    this.restService.request<any, PagedResultDto<LanguageTextDto>>(
      {
        method: 'GET',
        url: `/api/language-management/language-texts`,
        params: {
          filter: input.filter,
          resourceName: input.resourceName,
          baseCultureName: input.baseCultureName,
          targetCultureName: input.targetCultureName,
          getOnlyEmptyValues: input.getOnlyEmptyValues,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName },
    );

  restoreToDefault = (resourceName: string, cultureName: string, name: string) =>
    this.restService.request<any, void>(
      {
        method: 'PUT',
        url: `/api/language-management/language-texts/${resourceName}/${cultureName}/${name}/restore`,
      },
      { apiName: this.apiName },
    );

  update = (resourceName: string, cultureName: string, name: string, value: string) =>
    this.restService.request<any, void>(
      {
        method: 'PUT',
        url: `/api/language-management/language-texts/${resourceName}/${cultureName}/${name}`,
        params: { value },
      },
      { apiName: this.apiName },
    );

  constructor(private restService: RestService) {}
}
