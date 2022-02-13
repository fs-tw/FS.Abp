import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class EntityFeaturesService {
  apiName = 'EntityFeatures';

  constructor(private restService: RestService) {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/EntityFeatures/sample' },
      { apiName: this.apiName }
    );
  }
}
