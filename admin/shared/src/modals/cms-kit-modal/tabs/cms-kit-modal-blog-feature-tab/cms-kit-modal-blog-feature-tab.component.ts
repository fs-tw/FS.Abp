import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CmsKitModalTabComponent } from '../cms-kit-modal-tab.component';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

@Component({
  selector: 'fs-tw-cms-kit-modal-blog-feature-tab',
  templateUrl: './cms-kit-modal-blog-feature-tab.component.html',
  providers: [
    {
      provide: CmsKitModalTabComponent,
      useExisting: CmsKitModalBlogFeatureTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsKitModalBlogFeatureTabComponent extends CmsKitModalTabComponent  {
  title = 'Features';

  @Input() form: FormGroup;
  @Input() blogFeatures: Volo.CmsKit.Blogs.BlogFeatureDto[]= [];

  constructor() {
    super();
   }

  ngOnInit(): void {
    console.log(this.blogFeatures);
  }

  isValid() {
    return true;//this.form.valid;
  }

  getValue() {
    return {};//this.form.value;
  }

}
