// import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
// import { Fs } from '@fs-tw/crm/proxy'
// import { eCrmComponentNames } from '../../enums/components-names';
// import { ExtensionsService } from '../../services/extensions.service';

// export const DEFAULT_EMPLOYEE_TOOLBAR_ACTIONS = ToolbarAction.createMany<
// Fs.Crm.Employees.Dtos.EmployeeDto[]>([
//   {
//     text: 'Crm::EmployeesCreate',
//     action: data => {
//       const service = data.getInjected(ExtensionsService);
//       service.action(eCrmComponentNames.Employee, {
//         name: 'Add'
//       });
//       //const component = data.getInjected(UsersComponent);
//       //component.add();
//     },
//     //permission: 'AbpIdentity.Users.Create',
//     icon: 'fa fa-plus',
//   },
// ]);
