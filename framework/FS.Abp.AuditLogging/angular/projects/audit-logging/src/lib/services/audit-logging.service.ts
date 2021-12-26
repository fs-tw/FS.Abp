import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class AuditLoggingService {
  apiName = 'AuditLogging';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/AuditLogging/sample' },
      { apiName: this.apiName }
    );
  }
}
