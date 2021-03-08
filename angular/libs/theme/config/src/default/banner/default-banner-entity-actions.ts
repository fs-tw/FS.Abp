// import { EntityAction } from '@abp/ng.theme.shared/extensions';
// import { Fs } from 'libs/cms/proxy/src';
// import { ExtensionsService } from '../../services/extensions.service';
// import { eThemeRouteNames } from '../../enums/route-names';

// export const DEFAULT_BANNER_ENTITY_ACTIONS = EntityAction.createMany<
//   Fs.Cms.Blogs.Dtos.BlogDto
// >([
//   {
//     text: 'AbpIdentity::Edit',
//     action: (data) => {
//       const service = data.getInjected(ExtensionsService);
//       service.action(eThemeRouteNames.Banner, {
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
//       service.action(eThemeRouteNames.Banner, {
//         name: 'Delete',
//         record: data.record,
//       });
//     },
//     //permission: 'AbpIdentity.Users.Delete',
//   },
// ]);
