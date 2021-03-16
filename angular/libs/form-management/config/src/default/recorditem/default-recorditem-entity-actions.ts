// import { EntityAction } from '@abp/ng.theme.shared/extensions';
// import {} from '@fs-tw/form-management/proxy';
// import { ExtensionsService } from '../../services/extensions.service';
// import { eFormmanagementRouteNames } from '../../enums/route-names';

// export const DEFAULT_RECORDITEM_ENTITY_ACTIONS = EntityAction.createMany<
//   Fs.Theme.Banners.Dtos.BannerDto
// >([
//   {
//     text: 'AbpIdentity::Edit',
//     action: (data) => {
//       const service = data.getInjected(ExtensionsService);
//       service.action(eFormmanagementRouteNames.RecordItem, {
//         name: 'Edit',
//         record: data.record,
//       });
//     },
//     //permission: 'AbpIdentity.Users.Update',
//   },
//   {
//     text: 'AbpIdentity::Delete',
//     action: (data) => {
//       const service = data.getInjected(ExtensionsService);
//       service.action(eFormmanagementRouteNames.RecordItem, {
//         name: 'Delete',
//         record: data.record,
//       });
//     },
//     //permission: 'AbpIdentity.Users.Delete',
//   },
// ]);
