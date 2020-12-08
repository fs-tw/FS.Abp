import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendOnEnterSettingDto } from '../models/send-on-enter-setting-dto';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  apiName = 'Chat';

  constructor(private restService: RestService) {}

  setSendOnEnterSettingByInput(body: SendOnEnterSettingDto): Observable<void> {
    return this.restService.request(
      { url: '/api/chat/settings/send-on-enter', method: 'POST', body },
      { apiName: this.apiName }
    );
  }
}
