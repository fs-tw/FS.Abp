import type { DocumentDefinitionGetListDto, DocumentDefinitionWithDetailsDto, DocumentGetListDto, DocumentWithDetailsDto, MetaData } from './dtos/models';
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
      url: `/api/cms/documents/document-definition`,
      params: { fields: DocumentDefinitionGetList.fields, value: DocumentDefinitionGetList.value, sorting: DocumentDefinitionGetList.sorting, skipCount: DocumentDefinitionGetList.skipCount, maxResultCount: DocumentDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByDocumentGetList = (DocumentGetList: DocumentGetListDto) =>
    this.restService.request<any, PagedResultDto<DocumentWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/documents/document`,
      params: { fields: DocumentGetList.fields, value: DocumentGetList.value, sorting: DocumentGetList.sorting, skipCount: DocumentGetList.skipCount, maxResultCount: DocumentGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/cms/documents`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
