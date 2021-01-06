import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'fs-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.less'],
})
export class TagDetailComponent implements OnInit {
  tag_data = [
    {
      name: '類型',
      id:'tag0',
      children: [
        { tag: '★★★★★' },
        { tag: '★★★★' },
        { tag: '★★★' },
        { tag: '★★' },
        { tag: '★' },
      ]
    },
    {
      name: '地區',
      id:'tag1',
      children: [
        { tag: '北部' },
        { tag: '中部' },
        { tag: '南部' },
        { tag: '東部' },
      ]
    },
    {
      name: '協會標籤',
      id:'tag2',
      children: [
        { tag: '協會1' },
        { tag: '協會2' },
        { tag: '協會3' },
        { tag: '協會4' },
        { tag: '協會5' },
      ]
    },
    {
      name:'測試分類',
      id:'tag3',
      children:[
        {tag:'分類1'},
        {tag:'分類2'},
        {tag:'分類3'},
        {tag:'分類4'},
        {tag:'分類5'},
      ]
    }
  ];
  data:any=[];
  tagID;
  constructor( private activatedRoute: ActivatedRoute) { 
   
  }
  inputList = [
    { name: '' }
  ];


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let codeId = param.get('tagId');
      this.tagID=codeId;
      this.data=this.tag_data.find(x=>x.id==codeId);
      console.log(this.data);
    });
  }
  addOption() {
    this.inputList.push({ name: '' });
  }

  removeOption(index: number) {
    this.inputList.splice(index, 1);
  }

 
}
