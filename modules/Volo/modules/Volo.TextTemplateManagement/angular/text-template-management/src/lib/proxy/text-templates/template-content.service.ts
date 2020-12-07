import type { GetTemplateContentInput, RestoreTemplateContentInput, TextTemplateContentDto, UpdateTemplateContentInput } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateContentService {
  apiName = 'TextTemplateManagement';

  get = (input: GetTemplateContentInput) =>
    this.restService.request<any, TextTemplateContentDto>({
      method: 'GET',
      url: `/api/text-template-management/template-contents`,
      params: { templateName: input.templateName, cultureName: input.cultureName },
    },
    { apiName: this.apiName });

  restoreToDefault = (input: RestoreTemplateContentInput) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/text-template-management/template-contents/restore-to-default`,
      body: input,
    },
    { apiName: this.apiName });

  update = (input: UpdateTemplateContentInput) =>
    this.restService.request<any, TextTemplateContentDto>({
      method: 'PUT',
      url: `/api/text-template-management/template-contents`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
