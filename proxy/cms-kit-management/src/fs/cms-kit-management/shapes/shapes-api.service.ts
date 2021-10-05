import type { ShapeGetListDto, ShapeWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShapesApiService {
  apiName = 'cms-kit-management';

  getList = (ShapeGetList: ShapeGetListDto) =>
    this.restService.request<any, PagedResultDto<ShapeWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/shapes/shape',
      params: { fields: ShapeGetList.fields, value: ShapeGetList.value, sorting: ShapeGetList.sorting, skipCount: ShapeGetList.skipCount, maxResultCount: ShapeGetList.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
