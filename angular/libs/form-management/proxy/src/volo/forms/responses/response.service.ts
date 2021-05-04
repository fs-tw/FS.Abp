import type { CreateResponseDto, FormResponseDto, FormWithResponseDto, GetUserFormListInputDto, UpdateResponseDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { QuestionWithAnswersDto } from '../questions/models';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  apiName = 'Forms';

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/responses/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, FormResponseDto>({
      method: 'GET',
      url: `/api/responses/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: GetUserFormListInputDto) =>
    this.restService.request<any, PagedResultDto<FormResponseDto>>({
      method: 'GET',
      url: '/api/responses',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getQuestionsWithAnswersById = (id: string) =>
    this.restService.request<any, QuestionWithAnswersDto[]>({
      method: 'GET',
      url: `/api/responses/${id}/questions-with-answers`,
    },
    { apiName: this.apiName });

  getUserFormsByUserIdByUserId = (userId: string) =>
    this.restService.request<any, PagedResultDto<FormWithResponseDto>>({
      method: 'GET',
      url: `/api/responses/${userId}/response`,
    },
    { apiName: this.apiName });

  saveAnswersByFormIdAndInput = (formId: string, input: CreateResponseDto) =>
    this.restService.request<any, FormResponseDto>({
      method: 'POST',
      url: '/api/responses',
      params: { formId },
      body: input,
    },
    { apiName: this.apiName });

  updateAnswersByIdAndInput = (id: string, input: UpdateResponseDto) =>
    this.restService.request<any, FormResponseDto>({
      method: 'POST',
      url: `/api/responses/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
