import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, filter, switchMap } from 'rxjs/operators';
import { eIdentityServerComponents } from '../../enums/components';
import {
  ApiResourceWithDetailsDto,
  GetApiResourceListInput,
  ApiResourcePropertyDto,
  ApiResourceSecretDto,
  UpdateApiResourceDto,
} from '../../proxy/api-resource/dtos/models';
import { ApiResourcesService } from '../../proxy/api-resources.service';
import { IdentityServerClaimModel } from '../../modals/identity-server-modal/tabs/identity-server-modal-claims-tab/identity-server-modal-claims-tab.component';

@Component({
  selector: 'abp-api-resources',
  templateUrl: './api-resources.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityServerComponents.ApiResources,
    },
  ],
})
export class ApiResourcesComponent implements OnInit {
  createModalVisible = false;
  newScopeForm: FormGroup;

  editModalVisible = false;
  editScopeForm: FormGroup;
  editClaims: IdentityServerClaimModel[];
  editSelectedRecord: ApiResourceWithDetailsDto;
  editProperties: ApiResourcePropertyDto[];
  editSecrets: ApiResourceSecretDto[];

  constructor(
    public readonly list: ListService<GetApiResourceListInput>,
    public readonly service: ApiResourcesService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private injector: Injector,
  ) {}

  ngOnInit() {}

  onAdd() {
    this.newScopeForm = this.fb.group({
      name: ['', [Validators.required]],
      displayName: [''],
      description: [''],
      allowedAccessTokenSigningAlgorithms: [''],
      showInDiscoveryDocument: [false],
    });
    this.createModalVisible = true;
  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .subscribe(selected => {
        this.editSelectedRecord = selected;
        this.editProperties = selected.properties;
        this.editSecrets = selected.secrets;
        const data = new FormPropData(this.injector, selected);
        this.editScopeForm = generateFormFromProps(data);
        this.editScopeForm.patchValue({
          scopes: selected.scopes.map(s => s.scope),
        });
        this.editClaims = selected.userClaims.map(claim => ({
          id: claim.apiResourceId,
          name: claim.type,
          left: true,
        }));

        this.editModalVisible = true;
      });
  }

  create(formValue) {
    this.service
      .create(formValue)
      .pipe(take(1))
      .subscribe(_ => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  edit(formValue) {
    const request: UpdateApiResourceDto = {
      ...formValue,
      scopes: formValue.scopes.map(scope => ({ scope })),
    };
    this.service
      .update(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe(_ => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn(
        'AbpIdentityServer::ApiResourcesDeletionWarningMessage',
        'AbpIdentityServer::AreYouSure',
        {
          messageLocalizationParams: [name],
        },
      )
      .pipe(
        filter(status => status === Confirmation.Status.confirm),
        switchMap(_ => this.service.delete(id)),
        take(1),
      )
      .subscribe(_ => {
        this.list.get();
      });
  }
}
