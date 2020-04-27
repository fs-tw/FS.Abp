import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  isVisible = false;
  i:any={};
  constructor() { }

  ngOnInit() {
  }

  showModal(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }

  save(){

  }

}
