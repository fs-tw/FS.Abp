import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { STModule, STComponent, STColumn, STColumnTag } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';
import { CustomersApiService} from '@fs/crm/proxy';

const TAG: STColumnTag = {
  1: { text: '個人', color: 'green' },
  2: { text: '企業', color: 'red' }
};
const GENDER_TAG: STColumnTag = {
  0: { text: '男', color: 'green' },
  1: { text: '女', color: 'red' },
  2: { text: '其他' }
};

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers:[ListService]
})
export class MainComponent implements OnInit {


 
  @ViewChild('st', { static: false }) private st: STComponent;
  columns: STColumn[] = [
    { title: '編號', index: 'no'},
    { title: '聯絡人', index: 'contactPerson' },
    { title: '聯絡人職稱', index: 'jobTitle' },
    { title: '性別', index: 'gender' , type: 'tag', tag: GENDER_TAG},
    { title: '年齡', index: 'ageRange'},
    { title: '電話', index: 'phone' },
    { title: '信箱', index: 'email' },
    { title: '來源管道', index: 'pipelineSource' },
    { title: '企業名稱', index: 'name'},
    { title: '統一編號', index: 'uniformNumber'},
    { title: '公司設立日期', index: 'establishmentDate'},
    { title: '資本額', index: 'money'},
    { title: '縣市+地址', index: 'address' },
    { title: '公司產品/服務', index: 'product' },
    { title: '產業別', index: 'industry' },
    { title: '類型', index: 'discriminator' , type: 'tag', tag: TAG},
  ];

  datas = [];
  count = 0;



  constructor(
    public readonly list: ListService,
    private customerService: CustomersApiService,
  ) {
  }


  ngOnInit() {
    const customerStreamCreator = query => this.customerService.getListByCustomerGetList(query);

    this.list.hookToQuery(customerStreamCreator).subscribe(res=>{
      res.items = res.items.filter(x=>x.discriminator == 2);
      this.datas = res.items;
      this.count = res.totalCount;
    })

  }
  

  ngOnDestroy() {
  }
}
