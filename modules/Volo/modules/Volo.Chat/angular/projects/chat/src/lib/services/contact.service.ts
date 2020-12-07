import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetContactsInput } from '../models/get-contacts-input';
import { ChatContactDto } from '../models/chat-contact-dto';

@Injectable({ providedIn: 'root' })
export class ContactService {
  apiName = 'Chat';

  constructor(private restService: RestService) {}

  getContactsByInput(params = {} as GetContactsInput): Observable<ChatContactDto[]> {
    return this.restService.request(
      { url: '/api/chat/contact/contacts', method: 'GET', params },
      { apiName: this.apiName }
    );
  }
}
