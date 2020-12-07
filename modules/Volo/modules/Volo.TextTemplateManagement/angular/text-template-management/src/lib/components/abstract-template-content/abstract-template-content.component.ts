import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from '@abp/ng.theme.shared';
import { finalize, tap, switchMap } from 'rxjs/operators';
import { TextTemplateContentDto } from '../../proxy/text-templates/models';
import { TemplateContentService } from '../../proxy/text-templates/template-content.service';

// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
@Component({
  template: '',
})
export class AbstractTemplateContentComponent implements OnInit {
  protected fb: FormBuilder;
  protected templateContentService: TemplateContentService;
  protected route: ActivatedRoute;
  protected toaster: ToasterService;

  form: FormGroup;
  templateContent = {} as TextTemplateContentDto;
  busy: boolean;
  selectedCultureName: string;

  constructor(public injector: Injector) {
    this.fb = injector.get(FormBuilder);
    this.templateContentService = injector.get(TemplateContentService);
    this.route = injector.get(ActivatedRoute);
    this.toaster = injector.get(ToasterService);
  }

  ngOnInit() {
    this.form = this.fb.group({ content: ['', [Validators.required]] });
    this.getData().subscribe();
  }

  getData() {
    const templateName = this.route.snapshot.params.name;
    return this.templateContentService
      .get({ templateName, cultureName: this.selectedCultureName })
      .pipe(
        tap(templateContent => {
          this.templateContent = templateContent;
          this.form.get('content').setValue(this.templateContent.content);
        }),
      );
  }

  save(callback?: () => any) {
    if (this.form.invalid) return;
    this.busy = true;

    const { content } = this.form.value;
    this.templateContentService
      .update({
        templateName: this.templateContent.name,
        cultureName: this.selectedCultureName,
        content,
      })
      .pipe(finalize(() => (this.busy = false)))
      .subscribe(() => {
        this.toaster.success('TextTemplateManagement::Success');
        if (callback) callback();
      });
  }

  restoreToDefault() {
    this.busy = true;

    this.templateContentService
      .restoreToDefault({
        templateName: this.templateContent.name,
        cultureName: this.selectedCultureName,
      })
      .pipe(
        switchMap(() => this.getData()),
        finalize(() => (this.busy = false)),
      )
      .subscribe(() => {
        this.toaster.success('TextTemplateManagement::Success');
      });
  }
}
