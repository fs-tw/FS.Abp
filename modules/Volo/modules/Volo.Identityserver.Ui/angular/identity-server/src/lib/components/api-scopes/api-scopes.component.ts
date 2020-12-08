import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListService } from '@abp/ng.core';
import { filter, switchMap, take } from 'rxjs/operators';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { GetApiScopeListInput, ApiScopeWithDetailsDto } from '../../proxy/api-scope/dtos/models';
import { ApiScopesService } from '../../proxy/api-scopes.service';
import { eIdentityServerComponents } from '../../enums/components';
import { IdentityServerClaimModel } from '../../modals/identity-server-modal/tabs/identity-server-modal-claims-tab/identity-server-modal-claims-tab.component';

@Component({
  selector: 'abp-api-scopes',
  templateUrl: './api-scopes.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityServerComponents.ApiScopes,
    },
  ],
})
export class ApiScopesComponent implements OnInit {
  createModalVisible = false;
  newScopeForm: FormGroup;

  editModalVisible = false;
  editScopeForm: FormGroup;
  editClaims: IdentityServerClaimModel[];
  editSelectedRecord: ApiScopeWithDetailsDto;

  constructor(
    public readonly list: ListService<GetApiScopeListInput>,
    public readonly service: ApiScopesService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private injector: Injector,
  ) {}

  ngOnInit(): void {}

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .subscribe(result => {
        this.editSelectedRecord = result;
        const data = new FormPropData(this.injector, result);
        this.editScopeForm = generateFormFromProps(data);
        this.editClaims = result.userClaims.map(claim => ({
          id: claim.apiScopeId,
          name: claim.type,
          left: true,
        }));
        this.editModalVisible = true;
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('AbpIdentityServer::ApiScopesDeletionWarningMessage', 'AbpIdentityServer::AreYouSure', {
        messageLocalizationParams: [name],
      })
      .pipe(
        filter(status => status === Confirmation.Status.confirm),
        switchMap(_ => this.service.delete(id)),
        take(1),
      )
      .subscribe(_ => {
        this.list.get();
      });
  }

  onAdd() {
    this.newScopeForm = this.fb.group({
      name: ['', [Validators.required]],
      displayName: [''],
      description: [''],
      required: [false],
      enabled: [false],
      emphasize: [false],
      showInDiscoveryDocument: [false],
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

  edit(formValue) {
    this.service
      .update(this.editSelectedRecord.id, formValue)
      .pipe(take(1))
      .subscribe(_ => {
        this.editModalVisible = false;
        this.list.get();
      });
  }
}
