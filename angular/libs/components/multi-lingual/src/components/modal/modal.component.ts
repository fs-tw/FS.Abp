import { AfterContentChecked, Component, Injector, Input, OnInit } from '@angular/core';
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
import { EntityTypeDefinitionInfo, EntityTypeInfo, MultiLingualInfo } from '../providers';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AbstractNavTreeService } from '@abp/ng.core';

export class ProviderService extends AbstractNavTreeService<EntityTypeInfo> {
  public static featureName: string = "MultiLingual";
  getMultiLingualByType$(entityType: string): Observable<EntityTypeDefinitionInfo> {
    return this.flat$.pipe(map(x =>
        x.find(y => y.name == ProviderService.featureName)?.definitions.find(z => z.entityType == entityType)
    ));
  }

  setData(datas){
    this.add(datas);
  }
}

type Provider = {
  flat: Array<EntityTypeInfo>;
}

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
    ProviderService
  ],
})
export class MultiLingualModalComponent implements OnInit {
  public static NAME: string = 'MultiLingual.MultiLingualModalComponent';

  @Input() provider:Provider
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
    public providerService: ProviderService
  ) {
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if(!this.provider || !this.entityType || !this.entityId) return;
    this.providerService.setData(this.provider.flat);
    this.subs.add(this.providerService.getMultiLingualByType$(this.entityType).subscribe(x => {
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
    if(!this.provider || !this.entityType || !this.entityId) return;
    this.defaultRecord = {};
    const defaultData = new FormPropData(this.injector, this.defaultRecord);
    this.defaultForm = generateFormFromProps(defaultData);
    this.selectedRecord = {};
    const data = new FormPropData(this.injector, this.selectedRecord);
    this.form = generateFormFromProps(data);
    this.visible = true;
  }
}
