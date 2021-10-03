import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class CodingManagementService {
  apiName = 'CodingManagement';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/CodingManagement/sample' },
      { apiName: this.apiName }
    );
  }
}
