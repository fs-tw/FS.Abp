import { Component, Injector, Input, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Subscription } from 'rxjs';
import { setDefaults } from '@fs-tw/theme-alain/extensions';
import { GenerateForm } from './defaults';
import { FormGroup } from '@angular/forms';
import { MultiLingualService } from '../../services/multi-lingual.service';

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
export class MultiLingualModalComponent implements OnInit {
  public static NAME: string = 'MultiLingual.MultiLingualModalComponent';

  @Input() entityType: string;
  @Input() entityId: string;
  @Input() title: string;

  subs: Subscription = new Subscription();
  visible: boolean = false;
  defaultForm: FormGroup;
  form: FormGroup;
  defaultRecord = null;
  selectedRecord = null;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    public service: MultiLingualService
  ) {
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if (!this.entityType || !this.entityId) return;
    this.subs.add(
      this.service.getMultiLingualByType$(this.entityType).subscribe((x) => {
        this.subs.add(
          setDefaults(this.injector, MultiLingualModalComponent.NAME, {
            editFormProps: GenerateForm(x),
            createFormProps: GenerateForm(x),
          }).subscribe((x) => {})
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openModal() {
    if (!this.entityType || !this.entityId) return;
    this.defaultRecord = {};
    const defaultData = new FormPropData(this.injector, this.defaultRecord);
    this.defaultForm = generateFormFromProps(defaultData);
    this.selectedRecord = {};
    const data = new FormPropData(this.injector, this.selectedRecord);
    this.form = generateFormFromProps(data);
    this.visible = true;
  }
}
