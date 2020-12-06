import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CodeSettingService {
  constructor(private restService: RestService) {}

  postGetCodeSettingsByCodeIdByCodeIds(body: loadCodeSettingsInput): Observable<any[]> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/loadCodeSettingsBy', method: 'POST', body });
  }
}

export interface loadCodeSettingsInput{
  codeIds:string[];
  settingKeys:string[];
}
