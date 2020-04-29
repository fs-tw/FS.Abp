import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
  selector: 'fs-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  // @Input()
  // record: any;
  @Input()
  i={
    no:"",
    d:"",
    c:""

  }
  constructor(private modal: NzModalRef) {}
  ngOnInit(): void {
   
  }

  save() {
    this.modal.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  cancel() {
    this.modal.destroy();
  }

}
