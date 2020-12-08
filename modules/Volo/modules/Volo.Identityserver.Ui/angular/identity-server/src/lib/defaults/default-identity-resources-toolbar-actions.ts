import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { IdentityResourcesComponent } from '../components/identity-resources/identity-resources.component';
import { IdentityResourceWithDetailsDto } from '../proxy/identity-resource/dtos/models';

export const DEFAULT_IDENTITY_RESOURCES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  IdentityResourceWithDetailsDto[]
>([
  {
    text: 'AbpIdentityServer::CreateStandardResources',
    action: data => {
      const component = data.getInjected(IdentityResourcesComponent);
      component.onCreateStandardResources();
    },
    permission: 'IdentityServer.IdentityResource.Create',
    icon: 'fa fa-cog',
  },
  {
    text: 'AbpIdentityServer::CreateANewResource',
    action: data => {
      const component = data.getInjected(IdentityResourcesComponent);
      component.onAdd();
    },
    permission: 'IdentityServer.IdentityResource.Create',
    icon: 'fa fa-plus',
  },
]);
