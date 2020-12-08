import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { ProfilePictureInput, ProfilePictureSourceDto } from '../models/profile-picture';

@Injectable({
  providedIn: 'root',
})
export class ProfilePictureService {
  protected url = '/api/account-admin/settings';

  publicApiName = 'AbpAccountPublic';

  getProfilePicture = (id: string, skipHandleError = false) =>
    this.restService.request<any, ProfilePictureSourceDto>(
      {
        method: 'GET',
        url: `/api/account/profile-picture/${id}`,
      },
      {
        apiName: this.publicApiName,
        skipHandleError,
      },
    );

  setProfilePicture = (input: ProfilePictureInput) =>
    this.restService.request<any, void>(
      {
        method: 'POST',
        url: `/api/account/profile-picture`,
        body: input,
      },
      { apiName: this.publicApiName },
    );

  constructor(private restService: RestService) {}
}
