import { Injectable, Injector, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import {
  CheckboxComponent,
  DateComponent,
  DateTimeComponent,
  HiddenComponent,
  InputComponent,
  MultiselectComponent,
  QuillEditorComponent,
  SelectComponent,
  TextareaComponent,
  TimeComponent,
  TypeaheadComponent
} from '@fs-tw/theme-alain/extensions';
import { Observable } from 'rxjs';
import { ReplaceableComponentsService } from '@abp/ng.core';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class ReplaceComponentsResolver implements Resolve<boolean> {
  replaceableComponents: Array<any> = [
    {
      name: 'checkbox',
      component: CheckboxComponent,
    },
    {
      name: 'date',
      component: DateComponent,
    },
    {
      name: 'dateTime',
      component: DateTimeComponent,
    },
    {
      name: 'hidden',
      component: HiddenComponent,
    },
    {
      name: 'input',
      component: InputComponent,
    },
    {
      name: 'multiselect',
      component: MultiselectComponent,
    },
    {
      name: 'quill-editor',
      component: QuillEditorComponent,
    },
    {
      name: 'select',
      component: SelectComponent,
    },
    {
      name: 'textarea',
      component: TextareaComponent,
    },
    {
      name: 'time',
      component: TimeComponent,
    },
    {
      name: 'typeahead',
      component: TypeaheadComponent,
    },

  ];
  options: Array<any>;

  constructor(
    injector: Injector,
    private replaceableComponentsService: ReplaceableComponentsService
  ) {
    this.options = [];
  }

  resolve(): boolean | Observable<boolean> | Promise<boolean> {
    let result = _.uniqBy(
      this.options.concat(this.replaceableComponents),
      'name'
    );
    result.forEach((item:any) => {
      this.replaceableComponentsService.add({
        key: item.name,
        component: item.component,
      });
    });
    return true;
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  {
    path: 'cms-kit-management',
    resolve: { ReplaceComponentsResolver: ReplaceComponentsResolver },
    loadChildren: () =>
      import('@fs-tw/cms-kit-management/admin').then(m => m.CmsKitManagementAdminModule.forLazy()),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [ReplaceComponentsResolver],
})
export class AppRoutingModule {}
