import { RestService , PagedResultDto} from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodesWithDetailsDto } from '../models';

@Injectable({providedIn: 'root'})
export class CodesTreeService {
  constructor(private restService: RestService) {}

  getDefinitionByNo(no: string): Observable<CodesWithDetailsDto> {
    return this.restService.request({ url: '/api/CodingManagement/codesTree/definition', method: 'GET', params: { no } });
  }
}