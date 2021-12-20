import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'nz-upload-default',
  template: `
    <div>
      <i nz-icon nzType="plus"></i>
      <div style="margin-top: 8px">Upload</div>
    </div>
    <nz-modal
      [nzVisible]="previewVisible"
      [nzContent]="modalContent"
      [nzFooter]="null"
      (nzOnCancel)="previewVisible = false"
    >
      <ng-template #modalContent>
        <img [src]="previewImage" [ngStyle]="{ width: '100%' }" />
      </ng-template>
    </nz-modal>
  `,
  styles: [],
})
export class NzUploadDefaultComponent implements OnInit {
  constructor() {}
  @Input() previewVisible = false;
  @Input() previewImage: string;
  ngOnInit(): void {}

  open(thumbUrl){
    this.previewVisible=true;
    this.previewImage=thumbUrl;

  }
}
