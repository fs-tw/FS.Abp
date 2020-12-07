import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { take, switchMap, filter } from 'rxjs/operators';
import { eIdentityServerComponents } from '../../enums/components';
import { IdentityResourcesService } from '../../proxy/identity-resources.service';
import {
  GetIdentityResourceListInput,
  IdentityResourceWithDetailsDto,
  IdentityResourcePropertyDto,
} from '../../proxy/identity-resource/dtos/models';
import { IdentityServerClaimModel } from '../../modals/identity-server-modal/tabs/identity-server-modal-claims-tab/identity-server-modal-claims-tab.component';

@Component({
  selector: 'abp-identity-resources',
  templateUrl: './identity-resources.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityServerComponents.IdentityResources,
    },
  ],
})
export class IdentityResourcesComponent implements OnInit {
  createModalVisible = false;
  newScopeForm: FormGroup;

  editModalVisible = false;
  editScopeForm: FormGroup;
  editClaims: IdentityServerClaimModel[];
  editSelectedRecord: IdentityResourceWithDetailsDto;
  editProperties: IdentityResourcePropertyDto[];
  constructor(
    public readonly list: ListService<GetIdentityResourceListInput>,
    public readonly service: IdentityResourcesService,
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
      required: [false],
      enabled: [true],
      emphasize: [false],
      showInDiscoveryDocument: [true],
    });
    this.createModalVisible = true;
  }

  create(formValue) {
    this.service
      .create({
        ...formValue,
        properties: [],
      })
      .pipe(take(1))
      .subscribe(_ => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .subscribe(result => {
        this.editSelectedRecord = result;
        const data = new FormPropData(this.injector, result);
        this.editScopeForm = generateFormFromProps(data);
        this.editClaims = result.userClaims.map(claim => ({
          id: claim.identityResourceId,
          name: claim.type,
          left: true,
        }));
        this.editProperties = result.properties;
        this.editModalVisible = true;
      });
  }

  edit(formValue) {
    this.service
      .update(this.editSelectedRecord.id, formValue)
      .pipe(take(1))
      .subscribe(_ => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  onCreateStandardResources() {
    this.confirmationService
      .warn(
        'AbpIdentityServer::CreateStandardIdentityResourcesWarningMessage',
        'AbpIdentityServer::AreYouSure',
      )
      .pipe(
        filter(status => status === Confirmation.Status.confirm),
        switchMap(_ => this.service.createStandardResources()),
        take(1),
      )
      .subscribe();
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn(
        'AbpIdentityServer::IdentityResourcesDeletionWarningMessage',
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
