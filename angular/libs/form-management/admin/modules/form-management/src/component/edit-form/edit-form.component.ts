import {
  ChangeDetectorRef,
  Component,
  Injectable,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Volo } from '@fs-tw/form-management/proxy';
import * as _ from 'lodash';
import { FormStateService } from '../providers/form-state.service';
import { FormModel } from '../providers/models';

@Injectable({
  providedIn: 'root',
})
export class EditFormStateService extends FormStateService {
  initForm(data: FormModel.FormInfo) {
    if (!data) return;
    let formsResult = [data];
    let questionsResult = data.questions.map((y) => y);
    let choicesResult = _.flatten(
      questionsResult.map((x) => x.choices.map((y) => y))
    );
    this.store.patch({
      Forms: formsResult,
      Questions: questionsResult,
      Choices: choicesResult,
    });
  }
}

@Component({
  selector: 'fs-edit-form',
  template: `
    <abp-page [title]="'Forms::Form' | abpLocalization">
      <nz-tabset>
        <nz-tab nzTitle="{{ 'Forms::Menu:Questions' | abpLocalization }}">
          <nz-spin [nzSpinning]="isLoading" style="min-height: 100px;">
            <fs-form
              [formId]="formId"
              [provider]="editFormStateService"
            ></fs-form>
          </nz-spin>
        </nz-tab>
        <nz-tab nzTitle="{{ 'Forms::Menu:Responses' | abpLocalization }}">
          <nz-spin [nzSpinning]="isLoading" style="min-height: 100px;">
            <fs-responses [formId]="formId"></fs-responses>
          </nz-spin>
        </nz-tab>
      </nz-tabset>
    </abp-page>
  `,
  providers: [EditFormStateService],
})
export class EditFormComponent implements OnInit {
  @Input() formId: string;

  isLoading: boolean = true;
  subscription: Subscription = new Subscription();
  formDetail: Volo.Forms.Forms.FormWithDetailsDto = null;

  private formService: Volo.Forms.Forms.FormService = null;
  private questionService: Volo.Forms.Questions.QuestionService = null;

  constructor(
    protected injector: Injector,
    public editFormStateService: EditFormStateService,
    private cdr: ChangeDetectorRef
  ) {
    this.formService = injector.get(Volo.Forms.Forms.FormService);
    this.questionService = injector.get(Volo.Forms.Questions.QuestionService);
  }

  ngOnInit() {
    this.subscription.add(
      this.editFormStateService.getFormsDataOfDelayTime$().subscribe((x) => {
        let result = x.filter((y) => y.isDirty == true);
        if (result.length > 0) {
          this.createAndUpdateForms(result);
        }
      })
    );
    this.subscription.add(
      this.editFormStateService
        .getQuestionsDataOfDelayTime$()
        .subscribe((x) => {
          let result = x.filter((y) => y.isDirty == true);
          if (result.length > 0) {
            this.createAndUpdateQuestrions(result);
          }
        })
    );
    this.subscription.add(
      this.editFormStateService.onSaveQuestion$.subscribe((x) => {
        if (!x) return;
        this.updateQuestion(x);
      })
    );
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
    this.editFormStateService.isLoading$.next(true);
    this.subscription.add(
      this.formService.getById(this.formId).subscribe(
        (x) => {
          let result = new FormModel.FormInfo(x, x.questions);
          this.editFormStateService.initForm(result);
          this.formDetail = _.cloneDeep(x);
          this.cdr.detectChanges();
          this.isLoading = false;
          this.editFormStateService.isLoading$.next(false);
        },
        (error) => {
          this.isLoading = false;
          this.editFormStateService.isLoading$.next(false);
        }
      )
    );
  }

  createAndUpdateForms(result: Array<FormModel.FormInfo>) {
    this.isLoading = true;
    let create = result
      .filter((y) => y.isNewForm == true)
      .map((z) => {
        let input = {
          title: z.title,
          description: z.description,
        } as Volo.Forms.Forms.CreateFormDto;
        return this.formService.createByInput(input);
      });
    let update = result
      .filter((y) => y.isNewForm == false)
      .map((z) => {
        let input = {
          title: z.title,
          description: z.description,
        } as Volo.Forms.Forms.UpdateFormDto;
        return this.formService.updateByIdAndInput(z.id, input);
      });
    this.subscription.add(
      forkJoin([...create, ...update]).subscribe(
        (x) => {
          this.isLoading = false;
          this.loadFormData();
        },
        (error) => (this.isLoading = false)
      )
    );
  }

  createAndUpdateQuestrions(result: Array<FormModel.QuestionInfo>) {
    this.isLoading = true;
    let createQuestions = result
      .filter((y) => y.isNewQuestion == true && y.isDeleteQuestion == false)
      .map((z) => {
        let input = this.mapperQuestionData(
          z
        ) as Volo.Forms.Questions.CreateQuestionDto;
        return this.formService.createQuestionByIdAndInput(this.formId, input);
      });
    let updateQuestions = result
      .filter((y) => y.isNewQuestion == false && y.isDeleteQuestion == false)
      .map((z) => {
        let input = this.mapperQuestionData(
          z
        ) as Volo.Forms.Questions.UpdateQuestionDto;
        return this.questionService.updateByIdAndInput(z.id, input);
      });
    let deleteQuestions = result
      .filter((y) => y.isDeleteQuestion == true)
      .map((z) => {
        return this.questionService.deleteById(z.id);
      });
    this.subscription.add(
      forkJoin([
        ...createQuestions,
        ...updateQuestions,
        ...deleteQuestions,
      ]).subscribe(
        (x) => {
          this.isLoading = false;
          this.loadFormData();
        },
        (error) => (this.isLoading = false)
      )
    );
  }

  updateQuestion(result: FormModel.QuestionInfo) {
    this.isLoading = true;
    let input = this.mapperQuestionData(
      result
    ) as Volo.Forms.Questions.UpdateQuestionDto;
    this.subscription.add(
      this.questionService.updateByIdAndInput(result.id, input).subscribe(
        (x) => {
          this.isLoading = false;
          this.loadFormData();
        },
        (error) => (this.isLoading = false)
      )
    );
  }

  mapperQuestionData(data: FormModel.QuestionInfo) {
    let choices = data.choices.filter((x) => x.isDeleteChoice == false);
    return {
      index: data.index,
      title: data.title,
      description: data.description,
      isRequired: data.isRequired,
      hasOtherOption: data.hasOtherOption,
      questionType: data.questionType,
      choices: choices.map((res) => {
        return {
          index: res.index,
          isCorrect: res.isCorrect,
          value: res.value,
        } as Volo.Forms.Choices.ChoiceDto;
      }),
    };
  }
}
