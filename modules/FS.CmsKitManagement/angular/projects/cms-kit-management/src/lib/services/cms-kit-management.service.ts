import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class CmsKitManagementService {
  apiName = 'CmsKitManagement';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/CmsKitManagement/sample' },
      { apiName: this.apiName }
    );
  }
}
