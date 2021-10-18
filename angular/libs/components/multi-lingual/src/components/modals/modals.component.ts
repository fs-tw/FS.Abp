import { Component, Injector, Input, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
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

export type MultiLingualsProvider<T> = {
  get: (id: string) => Observable<T>;
};

@Component({
  selector: 'fs-multi-lingual-modal',
  templateUrl: './modals.component.html',
  styles: [],
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

  @Input() provider: MultiLingualsProvider<T>;
  @Input() entityType: string;
  @Input() entityId: string;
  @Input() title: string;

  subs: Subscription = new Subscription();
  visible: boolean = false;
  defaultForm: FormGroup;
  form: FormGroup;
  defaultRecord: T;
  selectedRecord: MultiLingual.MultiLingualWithDetailsDto;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    public service: MultiLingualService
  ) {
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if (!this.provider || !this.entityType || !this.entityId) return;
    forkJoin([
      this.service.getMultiLingualByType$(this.entityType),
      this.service.getMultiLingual({ entityId: this.entityId, entityType: this.entityType })
    ])
    .subscribe((result) => {
      this.subs.add(
        setDefaults(this.injector, MultiLingualModalComponent.NAME, {
          editFormProps: GenerateForm(result[0]),
          createFormProps: GenerateForm(result[0]),
        }).subscribe((x) => {})
      );
      this.selectedRecord = result[1];
      const data = new FormPropData(this.injector, this.selectedRecord);
      this.form = generateFormFromProps(data);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openModal() {
    if (!this.provider || !this.entityType || !this.entityId) return;
    this.provider.get(this.entityId).subscribe(x => {
      this.defaultRecord = x;
      const defaultData = new FormPropData(this.injector, this.defaultRecord);
      this.defaultForm = generateFormFromProps(defaultData);
      this.visible = true;
    });
  }
}
