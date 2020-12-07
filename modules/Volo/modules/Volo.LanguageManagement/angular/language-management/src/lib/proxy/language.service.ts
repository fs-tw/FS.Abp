import type {
  CreateLanguageDto,
  CultureInfoDto,
  GetLanguagesTextsInput,
  LanguageDto,
  LanguageResourceDto,
  UpdateLanguageDto,
} from './dto/models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  apiName = 'LanguageManagement';

  create = (input: CreateLanguageDto) =>
    this.restService.request<any, LanguageDto>(
      {
        method: 'POST',
        url: `/api/language-management/languages`,
        body: input,
      },
      { apiName: this.apiName },
    );

  delete = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/language-management/languages/${id}`,
      },
      { apiName: this.apiName },
    );

  get = (id: string) =>
    this.restService.request<any, LanguageDto>(
      {
        method: 'GET',
        url: `/api/language-management/languages/${id}`,
      },
      { apiName: this.apiName },
    );

  getAllList = () =>
    this.restService.request<any, ListResultDto<LanguageDto>>(
      {
        method: 'GET',
        url: `/api/language-management/languages/all`,
      },
      { apiName: this.apiName },
    );

  getCulturelist = () =>
    this.restService.request<any, CultureInfoDto[]>(
      {
        method: 'GET',
        url: `/api/language-management/languages/culture-list`,
      },
      { apiName: this.apiName },
    );

  getList = (input: GetLanguagesTextsInput) =>
    this.restService.request<any, PagedResultDto<LanguageDto>>(
      {
        method: 'GET',
        url: `/api/language-management/languages`,
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

  getResources = () =>
    this.restService.request<any, LanguageResourceDto[]>(
      {
        method: 'GET',
        url: `/api/language-management/languages/resources`,
      },
      { apiName: this.apiName },
    );

  setAsDefault = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'PUT',
        url: `/api/language-management/languages/${id}/set-as-default`,
      },
      { apiName: this.apiName },
    );

  update = (id: string, input: UpdateLanguageDto) =>
    this.restService.request<any, LanguageDto>(
      {
        method: 'PUT',
        url: `/api/language-management/languages/${id}`,
        body: input,
      },
      { apiName: this.apiName },
    );

  constructor(private restService: RestService) {}
}
