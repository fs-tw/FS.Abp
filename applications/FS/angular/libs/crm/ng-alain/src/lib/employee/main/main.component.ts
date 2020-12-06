import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STModule, STComponent, STColumn } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';
import { EmployeesApiService } from '@fs/crm/proxy';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers:[ListService]
})
export class MainComponent implements OnInit {
 
  @ViewChild('st', { static: false }) private st: STComponent;
  columns: STColumn[] = [
    { title: '姓名', index: 'name'},
    { title: '編號', index: 'no'},
    { title: '職稱', index: 'jobTitle' }
  ];

  datas = [];
  count = 0;



  constructor(
    public readonly list: ListService,
    private employeeService: EmployeesApiService,
    private store: Store,
    private modalService: NzModalService,
  ) {
  }


  ngOnInit() {    
    const employeeStreamCreator = query => this.employeeService.getListByEmployeeGetList(query);

    this.list.hookToQuery(employeeStreamCreator).subscribe(res=>{
      this.datas = res.items;
      this.count = res.totalCount;
    })

  }
  

  ngOnDestroy() {
  }
}
