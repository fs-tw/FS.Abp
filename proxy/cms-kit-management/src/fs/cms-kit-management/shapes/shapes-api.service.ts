import type { ShapeGetListDto, ShapeWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShapesApiService {
  apiName = 'cms-kit-management';

  getListByShape = (Shape: ShapeGetListDto) =>
    this.restService.request<any, PagedResultDto<ShapeWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/shapes/shape',
      params: { skipCount: Shape.skipCount, maxResultCount: Shape.maxResultCount, page: Shape.page, perPage: Shape.perPage, combineWith: Shape.combineWith, sort: Shape.sort, sortBy: Shape.sortBy, sorting: Shape.sorting },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
