import { Component, OnInit, Injector } from '@angular/core';
import { AbstractTemplateContentComponent } from '../abstract-template-content/abstract-template-content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'abp-inline-template-content',
  templateUrl: 'inline-template-content.component.html',
})
export class InlineTemplateContentComponent extends AbstractTemplateContentComponent
  implements OnInit {
  constructor(public injector: Injector, private router: Router) {
    super(injector);
  }

  customizePerCulture() {
    this.router.navigateByUrl(
      `/text-template-management/text-templates/contents/${this.templateContent.name}`,
    );
  }

  save() {
    super.save(() => {
      this.router.navigateByUrl('/text-template-management/text-templates');
    });
  }
}
