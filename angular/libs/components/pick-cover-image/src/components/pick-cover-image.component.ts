import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';

import {
  ImageFile,
  FsNgAlainImagePickerComponent,
} from '@fs-tw/components/image-picker';

@Component({
  selector: 'fs-tw-pick-cover-image',
  templateUrl: './pick-cover-image.component.html',
  styleUrls: ['./pick-cover-image.component.css'],
})
export class PickCoverImageComponent implements OnInit, OnChanges {
  @Input()
  defaultImageUrl: string;

  @Input()
  coverImageMediaId: string;

  @ViewChild('imgPicker') imagePickerComponent: FsNgAlainImagePickerComponent;
  coverImage: ImageFile[] = [];

  constructor(private environmentService: EnvironmentService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.coverImageMediaId) {
      let url = `${this.environmentService.getApiUrl(
        'cms-kit'
      )}/api/cms-kit/media/${this.coverImageMediaId}`;
      this.coverImage = [new ImageFile(this.coverImageMediaId, url)];
    } else {
      this.coverImage = [];
    }
  }

  getCoverImage(): File | string {
    if (!this.imagePickerComponent?.showFiles) return null;

    let files = this.imagePickerComponent.getUploadFiles();
    if (files.length == 0) {
      let hasImg = this.imagePickerComponent.getImageFiles().length > 0;

      return hasImg ? this.coverImageMediaId : null;
    }

    return files[0];
  }
}
