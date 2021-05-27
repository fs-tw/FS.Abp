import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { eFormsComponents, ExtensionsService } from '@fs-tw/form-management/config';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  @ViewChild('formsTemplate') formsTemplate: TemplateRef<HTMLElement>;
  @ViewChild('viewTemplate') viewTemplate: TemplateRef<HTMLElement>;
  itemTemplate: TemplateRef<HTMLElement> = null;
  formId: string;
  constructor(
    private extensionsService: ExtensionsService
  ) {

  }

  ngOnInit() {
    this.extensionsService.Actions$[eFormsComponents.Form].subscribe(x=>{
      switch(x.method){
        case 'View':
          this.formId = x.data.record.id;
          this.itemTemplate = this.viewTemplate
          break;
      }
    })
  }

  ngAfterViewInit() {
    this.itemTemplate = this.formsTemplate;
  }
}
