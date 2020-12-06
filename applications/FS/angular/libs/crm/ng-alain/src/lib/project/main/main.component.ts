import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STModule, STComponent, STColumn } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';
import { ProjectsApiService } from '@fs/crm/proxy';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers:[ListService]
})
export class MainComponent implements OnInit {
 
  @ViewChild('st', { static: false }) private st: STComponent;
  columns: STColumn[] = [
    { title: '編號', index: 'no'},
    { title: '計畫別', index: 'projectType'},
    { title: '計畫別備註', index: 'projectTypeRemark' },
    {title:'負責人',index:'employeeId'},
    { title: '已結案狀態', index: 'projectState' },
    { title: '狀態說明', index: 'projectStateRemark' },
    { title: '狀態說明', index: 'projectStateRemark' },
    { title: "O'Star", index: 'isStar',  type: 'enum', enum: { 'true': '是', 'false': '否' }},
    
    
    
  ];

  datas = [];
  count = 0;
  constructor(
    public readonly list: ListService,
    private projectService: ProjectsApiService,
    private store: Store,
    private modalService: NzModalService,
  ) {
  }


  ngOnInit() {
    const projectStreamCreator = query => this.projectService.getListByProjectGetList(query);

    this.list.hookToQuery(projectStreamCreator).subscribe(res=>{
      this.datas = res.items;
      this.count = res.totalCount;
    })

  }
  

  ngOnDestroy() {
  }
}
