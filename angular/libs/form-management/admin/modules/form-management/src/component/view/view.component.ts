import {
  ChangeDetectorRef,
  Component,
  Injectable,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { FormStateService } from './form/providers';
import { FormModel } from './form/models/models';
import { forkJoin, Subscription } from 'rxjs';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ViewStateService extends FormStateService {

  initForm(data: FormModel.FormInfo) {
    if (!data) return;
    let formsResult = [data];
    let questionsResult = data.questions.map((y) => y);
    let choicesResult = _.flatten(questionsResult.map((x) => x.choices.map((y) => y)));
    this.store.patch({
      Forms: formsResult,
      Questions: questionsResult,
      Choices: choicesResult,
    });
  }
}

@Component({
  selector: 'fs-view',
  template: `
    <abp-page [title]="'Forms::Form' | abpLocalization">
      <nz-tabset>
        <nz-tab nzTitle="{{ 'Forms::Menu:Questions' | abpLocalization }}">
          <nz-spin [nzSpinning]="isLoading" style="min-height: 100px;">
            <fs-form [formId]="formId" [provider]="viewStateService"></fs-form>
          </nz-spin>
        </nz-tab>
        <nz-tab nzTitle="{{ 'Forms::Menu:Responses' | abpLocalization }}">
        </nz-tab>
      </nz-tabset>
    </abp-page>
  `,
  providers: [ViewStateService]
})
export class ViewComponent implements OnInit {
  @Input() formId: string;

  isLoading: boolean = true;
  subscription: Subscription = new Subscription();
  constructor(
    protected injector: Injector,
    public viewStateService: ViewStateService,
    private formService: Volo.Forms.Forms.FormService,
    private questionService: Volo.Forms.Questions.QuestionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription.add(this.viewStateService.getFormsDataOfDelayTime$().subscribe(x => {
      let result = x.filter(y => y.isDirty == true);
      if(result.length > 0) {
        this.createAndUpdateForms(result);
      }
    }));
    this.subscription.add(this.viewStateService.getQuestionsDataOfDelayTime$().subscribe(x => {
      let result = x.filter(y => y.isDirty == true);
      if(result.length > 0) {
        this.createAndUpdateQuestrions(result);
      }
    }));
  }

  ngOnChanges() {
    if (!this.formId) return null;
    this.loadFormData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadFormData() {
    this.isLoading = true;
    this.subscription.add(this.formService.getById(this.formId).subscribe((x) => {
      let result = new FormModel.FormInfo(x, x.questions);
      this.viewStateService.initForm(result);
      this.isLoading = false;
      this.cdr.detectChanges();
    }, error => this.isLoading = false));
  }

  createAndUpdateForms(result: Array<FormModel.FormInfo>) {
    this.isLoading = true;
    let create = result.filter(y => y.isNewForm == true).map(z => {
      let input = { title: z.title, description: z.description } as Volo.Forms.Forms.CreateFormDto;
      return this.formService.createByInput(input);
    });
    let update = result.filter(y => y.isNewForm == false).map(z => {
      let input = { title: z.title, description: z.description } as Volo.Forms.Forms.UpdateFormDto;
      return this.formService.updateByIdAndInput(z.id, input);
    });
    this.subscription.add(forkJoin([...create, ...update]).subscribe(x => {
      this.isLoading = false;
      this.loadFormData();
    }, error =>  this.isLoading = false));
  }

  createAndUpdateQuestrions(result: Array<FormModel.QuestionInfo>) {
    this.isLoading = true;
    let createQuestions = result.filter(y => y.isNewQuestion == true && y.isDeleteQuestion == false).map(z => {
      let input = this.mapperQuestionData(z) as Volo.Forms.Questions.CreateQuestionDto;
      return this.formService.createQuestionByIdAndInput(this.formId, input);
    });
    let updateQuestions = result.filter(y => y.isNewQuestion == false && y.isDeleteQuestion == false).map(z => {
      let input = this.mapperQuestionData(z) as Volo.Forms.Questions.UpdateQuestionDto;
      return this.questionService.updateByIdAndInput(z.id, input);
    });
    let deleteQuestions = result.filter(y => y.isDeleteQuestion == true).map(z => {
      return this.questionService.deleteById(z.id);
    });
    this.subscription.add(forkJoin([...createQuestions, ...updateQuestions, ...deleteQuestions]).subscribe(x => {
      this.isLoading = false;
      this.loadFormData();
    }, error =>  this.isLoading = false));
  }

  mapperQuestionData(data: FormModel.QuestionInfo) {
    let choices = data.choices.filter(x => x.isDeleteChoice == false);
    return {
      index: data.index,
      title: data.title,
      description: data.description,
      isRequired: data.isRequired,
      hasOtherOption: data.hasOtherOption,
      questionType: data.questionType,
      choices: choices.map(res => { return {
        index: res.index,
        isCorrect: res.isCorrect,
        value: res.value
      } as Volo.Forms.Choices.ChoiceDto })
    }
  }
}
