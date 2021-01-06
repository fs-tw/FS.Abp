import type { BookGetListDto, BookWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  apiName = 'Default';

  getListByBookGetList = (BookGetList: BookGetListDto) =>
    this.restService.request<any, PagedResultDto<BookWithDetailsDto>>({
      method: 'GET',
      url: `/api/appt/books/book`,
      params: { fields: BookGetList.fields, value: BookGetList.value, sorting: BookGetList.sorting, skipCount: BookGetList.skipCount, maxResultCount: BookGetList.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
