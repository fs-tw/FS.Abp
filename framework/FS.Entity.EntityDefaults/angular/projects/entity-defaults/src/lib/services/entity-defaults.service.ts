import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class EntityDefaultsService {
  apiName = 'EntityDefaults';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/EntityDefaults/sample' },
      { apiName: this.apiName }
    );
  }
}
