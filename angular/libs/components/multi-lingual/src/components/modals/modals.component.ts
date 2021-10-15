import { Component, Injector, Input, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Observable, Subscription } from 'rxjs';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import { GenerateForm } from './defaults';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AbstractNavTreeService } from '@abp/ng.core';
import { EntityTypeDefinitionInfo, EntityTypeInfo, MultiLingualInfo } from '@fs-tw/components/multi-lingual/proxy';
import { MULTI_LINGUAL_CONFIG_OPTIONS } from '@fs-tw/components/multi-lingual/config';

export class MultiLingualModalService extends AbstractNavTreeService<EntityTypeInfo> {
  public static featureName: string = "MultiLingual";
  getMultiLingualByType$(entityType: string): Observable<EntityTypeDefinitionInfo> {
    return this.flat$.pipe(map(x =>
        x.find(y => y.name == MultiLingualModalService.featureName)?.definitions.find(z => z.entityType == entityType)
    ));
  }
}

@Component({
  selector: 'fs-multi-lingual-modal',
  templateUrl: './modals.component.html',
  styles: [
  ],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: MultiLingualModalComponent.NAME,
    },
    MultiLingualModalService
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
    public service: MultiLingualModalService
  ) {
    let result = injector.get(MULTI_LINGUAL_CONFIG_OPTIONS);
    this.service.add(result.flat);
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if(!this.entityType || !this.entityId) return;
    this.subs.add(this.service.getMultiLingualByType$(this.entityType).subscribe(x => {
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

  openModal() {
    if(!this.entityType || !this.entityId) return;
    this.defaultRecord = {};
    const defaultData = new FormPropData(this.injector, this.defaultRecord);
    this.defaultForm = generateFormFromProps(defaultData);
    this.selectedRecord = {};
    const data = new FormPropData(this.injector, this.selectedRecord);
    this.form = generateFormFromProps(data);
    this.visible = true;
  }
}
