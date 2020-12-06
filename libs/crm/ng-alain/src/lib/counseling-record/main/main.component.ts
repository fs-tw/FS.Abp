import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { STModule, STComponent, STColumn, STColumnBadge } from '@delon/abc/st';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';
import { ConsultationRecordsApiService } from '@fs/crm/proxy';
const BADGE: STColumnBadge = {
  'true': { text: ' 是', color: 'success' },
  'false': { text: '否', color: 'error' },
};
@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers:[ListService]
})
export class MainComponent implements OnInit {
 
  @ViewChild('st', { static: false }) private st: STComponent;
  columns: STColumn[] = [
    {title: '計畫編碼', index: 'counselingDate'},
    {title: '客戶編碼', index: 'counselingDate'},
    {title: '客戶名稱', index: 'customerId'},
    {title: '業師電話', index: 'phone'},
    {title: '輔導日期', index: 'counselingDate',type: 'date',dateFormat:'yyyy-MM-dd'},
    {title:'輔導狀況',index:'counselingStatus'},
    {title: '照片繳回', index: 'hasReturnPhoto' ,type: 'badge', badge: BADGE},
    {title: '紀錄表繳回', index: 'hasReturnForm',type: 'badge', badge: BADGE },
    {title: '企業滿意度表', index: 'hasReturnSatisfactionSurvey',type: 'badge', badge: BADGE },
    {title: '領據', index: 'hasReturnReceipt' ,type: 'badge', badge: BADGE},
    {title:'輔導費用',index:'cost'},
    {title:'匯款日期',index:'remittanceDate', type: 'date',dateFormat:'yyyy-MM-dd'}
  ];

  datas = [];
  count = 0;



  constructor(
    public readonly list: ListService,
    private consultationRecordService: ConsultationRecordsApiService,
    private store: Store,
    private modalService: NzModalService,
  ) {
  }


  ngOnInit() {
    const consultationRecordStreamCreator = query => this.consultationRecordService.getListByConsultationRecordGetList(query);

    this.list.hookToQuery(consultationRecordStreamCreator).subscribe(res=>{
      this.datas = res.items;
      this.count = res.totalCount;
    })

  }
  

  ngOnDestroy() {
  }
}
