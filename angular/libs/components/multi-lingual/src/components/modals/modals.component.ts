import { Component, Injector, Input, OnInit } from '@angular/core';
import { ListService, ConfigStateService, LanguageInfo, NameValue, ABP } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { setDefaults } from '@fs-tw/theme-alain/extensions';
import { GenerateForm } from './defaults';
import { FormGroup } from '@angular/forms';
import { MultiLingualService } from '../../services/multi-lingual.service';
import { MultiLingual } from '../../models/models';
import * as _ from 'lodash';

export type MultiLingualsProvider<T> = {
  get: (id: string) => Observable<T>;
};

@Component({
  selector: 'fs-multi-lingual-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: MultiLingualModalComponent.NAME,
    }
  ],
})
export class MultiLingualModalComponent<T> implements OnInit {
  public static NAME: string = 'MultiLingual.MultiLingualModalComponent';
  public Languages: LanguageInfo[];
  public CurrentCulture: string;
  public Fields: string[];

  @Input() provider: MultiLingualsProvider<T>;
  @Input() entityType: string;
  @Input() title: string;
  entityId: string;

  subs: Subscription = new Subscription();
  visible: boolean = false;
  
  defaultRecord: NameValue[];
  
  rawSelectedRecord: MultiLingual.MultiLingualWithDetailsDto;
  selectedForm: FormGroup;
  selectedRecord: NameValue[];

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    public readonly configStateService: ConfigStateService,
    public service: MultiLingualService
  ) {
  }

  ngOnInit(): void {
    this.subs.add(this.configStateService.getOne$("localization").subscribe(x => {
      this.Languages = x.languages;
      this.CurrentCulture = x.currentCulture.cultureName;
    }));
  }

  ngOnChanges() {
    if (!this.provider || !this.entityType) return;
    this.service.getMultiLingualByType$(this.entityType).subscribe((result) => {
      this.Fields = result.properties.map(x => x.name);
      this.subs.add(
        setDefaults(this.injector, MultiLingualModalComponent.NAME, {
          editFormProps: GenerateForm(result),
          createFormProps: GenerateForm(result),
        }).subscribe((x) => {})
      );
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openModal(entityId: string) {
    if (!entityId) return;
    this.entityId = entityId = "dba2be8d-1c40-3565-0fce-39ffa4fe3a09";
    forkJoin([
      this.provider.get(entityId),
      this.service.getMultiLingual({ entityId: entityId, entityType: this.entityType })
    ]).subscribe(result => {
      this.rawSelectedRecord = result[1];

      this.setDefaultRecord(result[0]);
      this.setSelectedRecord(result[1]);
      
      this.visible = true;
    });
  }

  onSelectedLanguageChange() {
    this.setSelectedRecord(
      this.rawSelectedRecord
    );
  }

  setDefaultRecord(input: T) {
    this.defaultRecord = this.Fields.map(x => {
      return {
        name: x,
        value: input[x.toLowerCase()]
      }
    });
  }

  setSelectedRecord(input: MultiLingual.MultiLingualWithDetailsDto) {
    let findResult = input?.multiLingualTranslations
      .find(x => x.culture == this.CurrentCulture)?.properties;
    
    this.selectedRecord = (findResult)
      ? findResult
      : this.defaultRecord;
    
    let result: ABP.Dictionary<string> = _.chain(
        this.selectedRecord
      ).keyBy('name')
      .mapValues('value')
      .value();
    
    const data = new FormPropData(this.injector, result);
    this.selectedForm = generateFormFromProps(data);
  }


  content: string;
  onEditorCreate(editor) {
    console.log(editor)
  }
  onChange() {
    console.log(this.content)
  }
}
