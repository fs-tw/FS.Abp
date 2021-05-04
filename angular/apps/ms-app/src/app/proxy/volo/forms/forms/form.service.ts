import type { CreateFormDto, FormDto, FormInviteEmailInputDto, FormSettingsDto, FormWithDetailsDto, GetFormListInputDto, UpdateFormDto, UpdateFormSettingInputDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../microsoft/asp-net-core/mvc/models';
import type { CreateQuestionDto, GetQuestionListDto, QuestionDto } from '../questions/models';
import type { FormResponseDetailedDto, GetResponseListInputDto } from '../responses/models';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  apiName = 'Forms';

  createByInput = (input: CreateFormDto) =>
    this.restService.request<any, FormDto>({
      method: 'POST',
      url: '/api/forms',
      body: input,
    },
    { apiName: this.apiName });

  createQuestionByIdAndInput = (id: string, input: CreateQuestionDto) =>
    this.restService.request<any, QuestionDto>({
      method: 'POST',
      url: `/api/forms/${id}/questions`,
      body: input,
    },
    { apiName: this.apiName });

  deleteAllResponsesOfFormById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/forms/${id}/responses`,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/forms/${id}`,
    },
    { apiName: this.apiName });

  exportCsvByIdAndInput = (id: string, input: GetResponseListInputDto) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/forms/${id}/download-responses-csv`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, FormWithDetailsDto>({
      method: 'GET',
      url: `/api/forms/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: GetFormListInputDto) =>
    this.restService.request<any, PagedResultDto<FormDto>>({
      method: 'GET',
      url: '/api/forms',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getQuestionsByIdAndInput = (id: string, input: GetQuestionListDto) =>
    this.restService.request<any, QuestionDto[]>({
      method: 'GET',
      url: `/api/forms/${id}/questions`,
      params: { input },
    },
    { apiName: this.apiName });

  getResponsesByIdAndInput = (id: string, input: GetResponseListInputDto) =>
    this.restService.request<any, PagedResultDto<FormResponseDetailedDto>>({
      method: 'GET',
      url: `/api/forms/${id}/responses`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getResponsesCountById = (id: string) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: `/api/forms/${id}/responses-count`,
    },
    { apiName: this.apiName });

  getSettingsByFormId = (formId: string) =>
    this.restService.request<any, FormSettingsDto>({
      method: 'GET',
      url: `/api/forms/${id}/settings`,
      params: { formId },
    },
    { apiName: this.apiName });

  sendInviteEmailByInput = (input: FormInviteEmailInputDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/invite',
      body: input,
    },
    { apiName: this.apiName });

  setSettingsByFormIdAndInput = (formId: string, input: UpdateFormSettingInputDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/forms/${id}/settings`,
      params: { formId },
      body: input,
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: UpdateFormDto) =>
    this.restService.request<any, FormDto>({
      method: 'PUT',
      url: `/api/forms/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
