import type { CreatePhoneVerificationDto, PhoneVerificationDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhoneVerificationApiService {
  apiName = 'Default';

  confirmPhoneVerificationByInput = (input: PhoneVerificationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/phone-verification/confirm-phone-verification`,
      body: input,
    },
    { apiName: this.apiName });

  createPhoneVerificationCodeByInput = (input: CreatePhoneVerificationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/phone-verification/create-phone-verification-code`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
