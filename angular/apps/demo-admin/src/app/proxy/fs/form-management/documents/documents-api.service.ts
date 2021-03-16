import type { DocumentDefinitionGetListDto, DocumentDefinitionWithDetailsDto, MetaData, VersionGetListDto, VersionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentsApiService {
  apiName = 'Default';

  getListByDocumentDefinitionGetList = (DocumentDefinitionGetList: DocumentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<DocumentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/documents/document-definition`,
      params: { fields: DocumentDefinitionGetList.fields, value: DocumentDefinitionGetList.value, sorting: DocumentDefinitionGetList.sorting, skipCount: DocumentDefinitionGetList.skipCount, maxResultCount: DocumentDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByVersionGetList = (VersionGetList: VersionGetListDto) =>
    this.restService.request<any, PagedResultDto<VersionWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/documents/version`,
      params: { fields: VersionGetList.fields, value: VersionGetList.value, sorting: VersionGetList.sorting, skipCount: VersionGetList.skipCount, maxResultCount: VersionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/form-management/documents`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
