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
      params: { skipCount: Shape.skipCount, maxResultCount: Shape.maxResultCount, sorting: Shape.sorting, page: Shape.page, perPage: Shape.perPage, sortBy: Shape.sortBy, sort: Shape.sort, combineWith: Shape.combineWith },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
