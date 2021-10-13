import { Component, Injector, Input, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { EntityTypeService } from '@fs-tw/entity-type-management/config';
import { Subscription } from 'rxjs';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import { GenerateForm, MODAL_EDIT_FORM_PROPS } from './defaults';
import { MultiLingualInfo } from '../providers';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'fs-multi-lingual-modal',
  templateUrl: './modal.component.html',
  styles: [
  ],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: MultiLingualModalComponent.NAME,
    },
  ],
})
export class MultiLingualModalComponent implements OnInit {
  public static NAME: string = 'MultiLingual.MultiLingualModalComponent';

  @Input() entityType: string;
  @Input() entityId: string;
  @Input() title: string;

  featureName: string = "MultiLingual";
  subs: Subscription = new Subscription();
  visible: boolean = false;
  form: FormGroup;
  selectedRecord = null;
  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    public entityTypeService: EntityTypeService,
  ) {
    this.entityTypeService = injector.get(EntityTypeService);
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if(!this.entityType || !this.entityId) return;
    this.subs.add(this.entityTypeService.getMultiLingualByType$(this.featureName, this.entityType).subscribe(x => {
      let result: MultiLingualInfo = x as MultiLingualInfo;
      this.subs.add(
        setDefaults(this.injector, MultiLingualModalComponent.NAME, {
          editFormProps: GenerateForm(result),
          createFormProps: GenerateForm(result),
        }).subscribe((x) => {})
      );
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setVisible() {
    if(!this.entityType || !this.entityId) return;
    this.selectedRecord = {};
    const data = new FormPropData(this.injector, this.selectedRecord);
    this.form = generateFormFromProps(data);
    this.visible = true;
  }
}
