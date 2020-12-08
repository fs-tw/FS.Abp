import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, switchMap } from 'rxjs/operators';
import { eIdentityServerComponents } from '../../enums/components';
import { ApiResourceWithDetailsDto } from '../../proxy/api-resource/dtos/models';
import { ApiResourcesService } from '../../proxy/api-resources.service';
import { ClientWithDetailsDto, GetClientListInput } from '../../proxy/client/dtos/models';
import { ClientsService } from '../../proxy/clients.service';
import { IdentityResourceWithDetailsDto } from '../../proxy/identity-resource/dtos/models';
import { IdentityResourcesService } from '../../proxy/identity-resources.service';
import { PicklistDataType } from '../picklist/picklist.component';

export type ResourceType = PicklistDataType<{ name: string; displayName: string }>;

@Component({
  selector: 'abp-clients',
  templateUrl: './clients.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityServerComponents.Clients,
    },
  ],
})
export class ClientsComponent implements OnInit {
  createModalVisible = false;
  newScopeForm: FormGroup;

  editModalVisible = false;
  editSelectedRecord: ClientWithDetailsDto;
  editScopeForm: FormGroup;
  editApiResources: ResourceType;
  editIdentityResources: ResourceType;
  editGrantTypes: string[];

  identityResourcesPicklistValue: ResourceType = [];
  apiResourcesPicklistValue: ResourceType = [];

  providerKey: string;
  visiblePermissions: boolean = false;

  onVisiblePermissionChange = (value: boolean) => {
    this.visiblePermissions = value;
  };

  constructor(
    public readonly list: ListService<GetClientListInput>,
    public readonly service: ClientsService,
    private apiResourceService: ApiResourcesService,
    private identityResourceService: IdentityResourcesService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private injector: Injector,
  ) {}

  private setEditApiResources(result: ClientWithDetailsDto) {
    const isAllowedResource = createAllowedResourceFinder(result);
    this.editApiResources = this.apiResourcesPicklistValue.map(resource => ({
      ...resource,
      left: isAllowedResource(resource),
    }));
  }

  private setEditIdentityResources(result: ClientWithDetailsDto) {
    const isAllowedResource = createAllowedResourceFinder(result);
    this.editIdentityResources = this.identityResourcesPicklistValue.map(resource => ({
      ...resource,
      left: isAllowedResource(resource),
    }));
  }

  private setEditGrantTypes(result: ClientWithDetailsDto) {
    this.editGrantTypes = result.allowedGrantTypes.map(grant => grant.grantType);
  }

  ngOnInit() {
    this.apiResourceService
      .getAllList()
      .pipe(mapToResources())
      .subscribe(list => (this.apiResourcesPicklistValue = list));
    this.identityResourceService
      .getAllList()
      .pipe(mapToResources())
      .subscribe(list => (this.identityResourcesPicklistValue = list));
  }

  openPermissionsModal(providerKey: string) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visiblePermissions = true;
    }, 0);
  }

  onAdd() {
    this.newScopeForm = this.fb.group({
      clientId: ['', [Validators.required]],
      clientName: ['', [Validators.required]],
      description: [''],
      clientUri: [''],
      logoUri: [''],
      requireConsent: [false],
    });
    this.createModalVisible = true;
  }

  create(formValue) {
    this.service
      .create({
        ...formValue,
        scopes: [...formValue.identityResources, ...formValue.apiResources].map(
          resource => resource.name,
        ),
      })
      .subscribe(_ => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service.get(id).subscribe(result => {
      this.editSelectedRecord = result;
      const data = new FormPropData(this.injector, result);
      this.editScopeForm = generateFormFromProps(data);
      this.editModalVisible = true;
      this.setEditApiResources(result);
      this.setEditIdentityResources(result);
      this.setEditGrantTypes(result);
    });
  }

  delete({ id, clientId }: ClientWithDetailsDto) {
    this.confirmationService
      .warn('AbpIdentityServer::ClientsDeletionWarningMessage', 'AbpIdentityServer::AreYouSure', {
        messageLocalizationParams: [clientId],
      })
      .pipe(
        filter(status => status === Confirmation.Status.confirm),
        switchMap(_ => this.service.delete(id)),
      )
      .subscribe(_ => {
        this.list.get();
      });
  }

  edit(formValue) {
    this.service.update(this.editSelectedRecord.id, this.mapEditForm(formValue)).subscribe(_ => {
      this.editModalVisible = false;
      this.list.get();
    });
  }

  mapEditForm(formValue) {
    const postLogoutRedirectUris = formValue.postLogoutRedirectUris.map(
      val => val.postLogoutRedirectUri,
    );
    const redirectUris = formValue.redirectUris.map(val => val.redirectUri);
    const allowedCorsOrigins = formValue.allowedCorsOrigins.map(val => val.origin);
    const identityProviderRestrictions = formValue.identityProviderRestrictions.map(
      val => val.provider,
    );
    const scopes = formValue.apiResources.concat(formValue.identityResources).map(res => res.name);
    return {
      ...formValue,
      postLogoutRedirectUris,
      redirectUris,
      allowedCorsOrigins,
      identityProviderRestrictions,
      scopes,
    };
  }
}

function createAllowedResourceFinder(result: ClientWithDetailsDto) {
  return ({ name }: ResourceType[0]) => result.allowedScopes.findIndex(s => s.scope === name) > -1;
}

function mapToResources<T extends ApiResourceWithDetailsDto | IdentityResourceWithDetailsDto>() {
  return map((items: T[]) =>
    items.map<ResourceType[0]>(item => ({
      displayName: item.displayName || item.name,
      name: item.name,
      left: false,
    })),
  );
}
