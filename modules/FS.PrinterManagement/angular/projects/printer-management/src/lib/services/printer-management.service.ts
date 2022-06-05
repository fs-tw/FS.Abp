import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class PrinterManagementService {
  apiName = 'PrinterManagement';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/PrinterManagement/sample' },
      { apiName: this.apiName }
    );
  }
}
