import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'fs-the-project-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.less']
})
export class ApplicationLayoutComponent implements OnInit,AfterViewInit {
  
  settingPefix = "ThemesDefinitionSetting.";

  

  constructor(
  ){
  
  }
  banners: any[];

  ngOnInit(): void {
  
  }

 

  ngAfterViewInit() {
    //$.getScript('./assets/js/template.js', function () { });    
  }
  
}
