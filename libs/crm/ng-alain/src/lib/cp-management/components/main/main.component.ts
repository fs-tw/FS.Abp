import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  constructor() {}

  projectOptions = [
    {title:"標案_高雄市勞工局-政府補助案",id:"1"},
    {title:"標案_高雄市勞工局-專利申請",id:"2"},
    {title:"補助案_經濟部中企處-連鎖展店",id:"3"}
  ];
  selectedProject = "1";
  customerOptions=[
    {title:"王億如",id:"1"},
    {title:"余盈君",id:"2"},
    {title:"張振豪",id:"2"},
  ];
  selectedCustomer = "1";
  

  customerDatas = [
    {plan_name:"計畫1", customer_number:"C001", customer_name:"客戶A"},
    {plan_name:"計畫2",customer_number:"C002", customer_name:"客戶B"},
    {plan_name:"計畫3",customer_number:"C003", customer_name:"客戶C"}
  ];
  projectDatas = [
    {plan_name:"標案_高雄市勞工局", project_number:"P001", project_name:"政府補助案"},
    {plan_name:"標案_高雄市勞工局", project_number:"P002", project_name:"專利申請"},
    {plan_name:"補助案_經濟部中企處	", project_number:"P003", project_name:"連鎖展店"}
  ]

  data = [""];
  group: number = 0;
  isopen: boolean = true;
  span: number = 16;
  ngOnInit(): void {
  }

  click_button() {
    // this.isopen == true?this.isopen=false:this.isopen=true;
    if (this.isopen == true) {
      this.isopen = false;
      this.span = 16;
    } else {
      this.isopen = true;
      this.span = 8;

    }

  }

  click_group(a) {
    this.group = a;
  }

}
