import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/theme/proxy/src';

export const DEFAULT_ROUTE_CREATE_FORM_PROPS = FormProp.createMany<Fs.Theme.Routes.Dtos.RouteDto>([
  
   {
    type: ePropType.String,
    name: 'no',
    displayName: 'Theme::FS.Route.No',
    id: 'no',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'displayName',
    displayName: 'Theme::FS.Route.DisplayName',
    id: 'displayName',
    defaultValue: ""
  },
  {
    type: ePropType.String,
    name: 'description',
    displayName:'Theme::FS.Route.Description',
    id: 'description',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'disable',
    displayName:'Theme::FS.Route.Disable',
    id: 'disable',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'routeconfig',
    displayName:'Theme::FS.Route.RouteConfig',
    id: 'routeconfig',
    defaultValue: "",
  },
  {
    type: ePropType.String,
    name: 'routedefinitionid',
    displayName:'Theme::FS.Route.RouteDefinitionId',
    id: 'routedefinitionid',
    defaultValue: "",
  },
]);