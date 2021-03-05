// import { EntityAction } from '@abp/ng.theme.shared/extensions';
// // import {  } from 'libs/cms/proxy';
// import { ExtensionsService } from '../../services/extensions.service';
// import { eCrmComponentNames } from '../../enums/components-names';

// export const DEFAULT_POST_ENTITY_ACTIONS = EntityAction.createMany<
//   Fs.Crm.Employees.Dtos.EmployeeDto
// >([
//   {
//     text: 'AbpIdentity::Edit',
//     action: (data) => {
//       const service = data.getInjected(ExtensionsService);
//       service.action(eCrmComponentNames.Employee, {
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
//       service.action(eCrmComponentNames.Employee, {
//         name: 'Delete',
//         record: data.record,
//       });
//     },
//     //permission: 'AbpIdentity.Users.Delete',
//   },
// ]);
