import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  isVisible = false;
  i:any={
    
  };
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
