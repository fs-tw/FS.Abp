import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualsService {
  apiName = 'MultiLinguals';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/MultiLinguals/sample' },
      { apiName: this.apiName }
    );
  }
}
