import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { OrganizationUnitWithDetailsDto } from '../proxy/identity/models';

export const DEFAULT_ORGANIZATION_UNITS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  OrganizationUnitWithDetailsDto[]
>([]);
