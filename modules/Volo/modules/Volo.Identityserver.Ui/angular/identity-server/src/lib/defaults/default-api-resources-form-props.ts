import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { ApiResourceWithDetailsDto } from '../proxy/api-resource/dtos/models';
import { ApiScopesService } from '../proxy/api-scopes.service';
import { map } from 'rxjs/operators';

export const DEFAULT_API_RESOURCES_CREATE_FORM_PROPS = FormProp.createMany<
  ApiResourceWithDetailsDto
>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentityServer::Name',
    id: 'name',
    validators: () => [Validators.required],
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'AbpIdentityServer::DisplayName',
    id: 'displayName',
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName: 'AbpIdentityServer::Description',
    id: 'description',
  },
  {
    type: ePropType.String,
    name: 'allowedAccessTokenSigningAlgorithms',
    displayName: 'AbpIdentityServer::AllowedAccessTokenSigningAlgorithms',
    id: 'allowedAccessTokenSigningAlgorithms',
  },
  {
    type: ePropType.Boolean,
    name: 'showInDiscoveryDocument',
    displayName: 'AbpIdentityServer::ShowInDiscoveryDocument',
    id: 'showInDiscoveryDocument',
    defaultValue: false,
  },
]);

export const DEFAULT_API_RESOURCES_EDIT_FORM_PROPS = DEFAULT_API_RESOURCES_CREATE_FORM_PROPS.concat(
  FormProp.createMany<ApiResourceWithDetailsDto>([
    {
      type: ePropType.Boolean,
      name: 'enabled',
      displayName: 'AbpIdentityServer::Enabled',
      id: 'enabled',
      defaultValue: false,
    },
    {
      type: ePropType.MultiSelect,
      name: 'scopes',
      displayName: 'AbpIdentityServer::Scopes',
      id: 'scopes',
      options: data =>
        data
          .getInjected(ApiScopesService)
          .getAllList()
          .pipe(
            map(result =>
              result.map(scope => ({
                key: scope.displayName,
                value: scope.name,
              })),
            ),
          ),
    },
  ]),
);
