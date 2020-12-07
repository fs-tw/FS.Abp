import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { ApiResourcesComponent } from '../components/api-resources/api-resources.component';
import { ApiResourceWithDetailsDto } from '../proxy/api-resource/dtos/models';

export const DEFAULT_API_RESOURCES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  ApiResourceWithDetailsDto[]
>([
  {
    text: 'AbpIdentityServer::CreateANewResource',
    action: data => {
      const component = data.getInjected(ApiResourcesComponent);
      component.onAdd();
    },
    permission: 'IdentityServer.ApiResource.Create',
    icon: 'fa fa-plus',
  },
]);
