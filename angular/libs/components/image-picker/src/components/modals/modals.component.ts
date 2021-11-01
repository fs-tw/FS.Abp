import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListService, ConfigStateService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
} from '@abp/ng.theme.shared/extensions';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { ImagePicker } from '../../models/models';
import { ImagePickerComponent } from '../image-picker/image-picker.component';


@Component({
  selector: 'fs-image-picker-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: ImagePickerModalComponent.NAME,
    }
  ],
})
export class ImagePickerModalComponent implements OnInit {
  @ViewChild(ImagePickerComponent) imagePicker: ImagePickerComponent;
  
  public static NAME: string = 'ImagePicker.ImagePickerModalComponent';
  subs: Subscription = new Subscription();

  @Input() entityType: string;

  @Input()
  imageInfo: ImagePicker.ImageFile[] = [];

  loading: boolean = false;
  isVisible: boolean = false;

  constructor(
    public readonly list: ListService,
    public readonly configStateService: ConfigStateService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openModal() {
    this.isVisible = true;
  }

  handleOk() {
    this.loading = true;
    this.imagePicker.uploadImage().subscribe(x => {
      console.log(x)
    })
  }

  handleClose() {
    if (this.loading) return;
    this.isVisible = false;

    for(let img of this.imagePicker.showFiles){
      this.imagePicker.deleteFile(img.fileName)
    }
  }
}
