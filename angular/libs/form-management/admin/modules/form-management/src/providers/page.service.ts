import { Injectable, Injector } from '@angular/core';
import { Volo } from '@fs-tw/form-management/proxy';

// @dynamic
@Injectable({
  providedIn: 'root',
})
export class PageService {
  private FormService: Volo.Forms.Forms.FormService
  constructor(
    private injector:Injector
  ) {
    this.FormService=this.injector.get(Volo.Forms.Forms.FormService);
  }

  getById(id: string) {
    return this.FormService.getById(id);
  }

  getQuestionsByIdAndInput(id: string, input?: Volo.Forms.Questions.GetQuestionListDto){
    return this.FormService.getQuestionsByIdAndInput(id, input);
  }
}
