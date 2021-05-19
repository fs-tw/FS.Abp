import type { MetaData, VocabularyDefinitionGetListDto, VocabularyDefinitionWithDetailsDto, VocabularyGetListDto, VocabularyWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VocabulariesApiService {
  apiName = 'Default';

  getListByVocabularyDefinitionGetList = (VocabularyDefinitionGetList: VocabularyDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<VocabularyDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/vocabularies/vocabulary-definition',
      params: { fields: VocabularyDefinitionGetList.fields, value: VocabularyDefinitionGetList.value, sorting: VocabularyDefinitionGetList.sorting, skipCount: VocabularyDefinitionGetList.skipCount, maxResultCount: VocabularyDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByVocabularyGetList = (VocabularyGetList: VocabularyGetListDto) =>
    this.restService.request<any, PagedResultDto<VocabularyWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/vocabularies/vocabulary',
      params: { fields: VocabularyGetList.fields, value: VocabularyGetList.value, sorting: VocabularyGetList.sorting, skipCount: VocabularyGetList.skipCount, maxResultCount: VocabularyGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: '/api/cms-kit-management/vocabularies',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
