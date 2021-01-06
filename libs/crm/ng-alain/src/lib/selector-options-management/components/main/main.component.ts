import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  groups = [
    {
      title: '計畫別',
      key: 0,
      children: [
        { options: '補助案_經濟部中企處', value: 0 },
        { options: '補助案_高雄市青年局', value: 1 },
        { options: '標案_高雄市青年局', value: 2 },
        { options: '標案_高雄市勞工局', value: 3 },
        { options: '進駐廠商', value: 4 },
        { options: '補助案', value: 5 },
        { options: '計畫別', value: 6 },
      ]
    },
    {
      title: '結案類型',
      key: 1,
      children: [
        { options: '待評估', value: 0 },
        { options: '派案中', value: 1 },
        { options: '已結案_派案完成', value: 2 },
        { options: '已結案_未派案', value: 3 },
      ]
    },
    {
      title: '產業別',
      key: 2,
      children: [
        { options: '科技', value: 0 },
        { options: '無', value: 1 },
      ]
    },
    {
      title: '管道來源',
      key: 3,
      children: [
        { options: '親友介紹_XXX', value: 0 },
        { options: '高科大網頁', value: 1 },
        { options: '高市府網頁', value: 2 },
        { options: '高科大FB、Line@', value: 3 },
        { options: '其他(自填)', value: 4 },
      ]
    },
    {
      title: '性別 ',
      key: 4,
      children: [
        { options: '男', value: 0 },
        { options: '女', value: 1 },
      ]
    },
    {
      title: '年齡',
      key: 5,
      children: [
        { options: '≧46', value: 0 },
        { options: '41-45', value: 1 },
        { options: '31-40', value: 2 },
        { options: '21-30', value: 3 },
        { options: '≤20', value: 4 },
        { options: '-', value: 5 },
      ]
    }
  ];

  seleted_key = 0;
  selected_group_title:string;
  showTable = [];
  constructor() { }

  ngOnInit(): void {
    this.selChange();
  }

  selChange() {
    this.showTable = this.groups.find(x => x.key == this.seleted_key).children;
    this.selected_group_title = this.groups[this.seleted_key].title;
  }
  
}
