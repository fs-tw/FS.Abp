import type { CreateCommand, UpdateCommand } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CustomerWithDetailsDto } from '../../dtos/models';

@Injectable({
  providedIn: 'root',
})
export class CustomersCommandsApiService {
  apiName = 'Default';

  createCommand = (command: CreateCommand) =>
    this.restService.request<any, CustomerWithDetailsDto>({
      method: 'POST',
      url: '/api/mediator/command?$type=FS.Customers.Commands.Customers.CreateCommand',
      body: {...command,...{$type:'FS.Customers.Commands.Customers.CreateCommand'}},
    },
    { apiName: this.apiName });

  updateCommand = (command: UpdateCommand) =>
    this.restService.request<any, CustomerWithDetailsDto>({
      method: 'POST',
      url: '/api/mediator/command?$type=FS.Customers.Commands.Customers.UpdateCommand',
      body: {...command,...{$type:'FS.Customers.Commands.Customers.UpdateCommand'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
