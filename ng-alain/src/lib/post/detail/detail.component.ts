import { Component, OnInit } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';
@Component({
  selector: 'fs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  i:any={};
  date = new Date();
  constructor(private i18n: NzI18nService) {}

  ngOnInit() {
    this.i18n.setLocale(en_US);
  }

}
