import { Component, OnInit } from '@angular/core';
import { eFormsComponents, ExtensionsService } from '@fs-tw/form-management/config';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
 
  constructor(
    private extensionsService:ExtensionsService
  ) {

  }

  ngOnInit() {
    this.extensionsService.Actions$[eFormsComponents.Form].subscribe(x=>{
      switch(x.method){
        case 'View':
          this.extensionsService.goToView(x.data.record.id);
          break;
      }
    })
  }
}
