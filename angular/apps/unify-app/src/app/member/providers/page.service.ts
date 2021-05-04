import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Fs, Scrm } from '../../proxy'
import { Observable } from 'rxjs';
import { RestService, Rest } from '@abp/ng.core';

export interface RegisterRequest {
    userName: string;
    emailAddress: string;
    password: string;
    appName?: string;
}

export interface RegisterResponse {
    tenantId: string;
    userName: string;
    name: string;
    surname: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    lockoutEnabled: boolean;
    lockoutEnd: string;
    concurrencyStamp: string;
    isDeleted: boolean;
    deleterId: string;
    deletionTime: string;
    lastModificationTime: string;
    lastModifierId: string;
    creationTime: string;
    creatorId: string;
    id: string;
}


@Injectable()
export class PageService {
    apiName = 'AbpAccount';
    
    constructor(
        private rest: RestService,
        private updateSocialApiService: Scrm.SocialUpdate.UpdateSocialApiService,
        private phoneVerificationApiService:Scrm.PhoneVerification.PhoneVerificationApiService
    ) {
    };


    createPhoneVerificationCodeByInput(input: Scrm.PhoneVerification.Dtos.CreatePhoneVerificationDto){
        return this.phoneVerificationApiService.createPhoneVerificationCodeByInput(input);
    }

    confirmPhoneVerificationByInput(input: Scrm.PhoneVerification.Dtos.PhoneVerificationDto){
        return this.phoneVerificationApiService.confirmPhoneVerificationByInput(input);
    }



    registerOrUpdateByInput(input: Scrm.SocialUpdate.Dtos.LinkUsersRegisterDto) {
        return this.updateSocialApiService.registerOrUpdateByInput(input);
    }

    register(body: RegisterRequest): Observable<RegisterResponse> {
        const request: Rest.Request<RegisterRequest> = {
            method: 'POST',
            url: '/api/account/register',
            body,
        };

        return this.rest.request<RegisterRequest, RegisterResponse>(request, {
            skipHandleError: true,
            apiName: this.apiName,
        });
    }

}