import type { GetQuestionListDto, QuestionDto, UpdateQuestionDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  apiName = 'Forms';

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/questions/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, QuestionDto>({
      method: 'GET',
      url: `/api/questions/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: GetQuestionListDto) =>
    this.restService.request<any, QuestionDto[]>({
      method: 'GET',
      url: '/api/questions',
      params: { input },
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: UpdateQuestionDto) =>
    this.restService.request<any, QuestionDto>({
      method: 'PUT',
      url: `/api/questions/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
