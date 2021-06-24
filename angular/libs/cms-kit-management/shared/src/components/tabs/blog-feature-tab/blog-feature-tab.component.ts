import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalTabComponent } from '@fs-tw/theme-alain/shared';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

@Component({
  selector: 'fs-blog-feature-tab',
  templateUrl: './blog-feature-tab.component.html',
  providers: [
    {
      provide: ModalTabComponent,
      useExisting: BlogFeatureTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogFeatureTabComponent extends ModalTabComponent {
  title = 'Features';

  @Input() form: FormGroup;
  @Input() blogFeatures: Volo.CmsKit.Blogs.BlogFeatureDto[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.form);
    console.log(this.blogFeatures);
  }

  isValid() {
    return true; //this.form.valid;
  }

  getValue() {
    const blogFeatures: Volo.CmsKit.Admin.Blogs.BlogFeatureInputDto[] = [];

    Object.keys(this.form.value).forEach((x) => {
      if (this.form.controls[x].pristine) return;
      blogFeatures.push({ featureName: x, isEnabled: this.form.value[x] });
    });

    return { blogFeatures };
  }
}
