import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class LineNotifyService {
  apiName = 'LineNotify';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/LineNotify/sample' },
      { apiName: this.apiName }
    );
  }
}
