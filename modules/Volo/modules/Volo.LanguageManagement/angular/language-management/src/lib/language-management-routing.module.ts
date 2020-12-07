import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageTextsComponent } from './components/language-texts/language-texts.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { eLanguageManagementComponents } from './enums/components';
import { LanguageManagementExtensionsGuard } from './guards/extensions.guard';

const routes: Routes = [
  { path: '', redirectTo: 'languages', pathMatch: 'full' },
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard, LanguageManagementExtensionsGuard],
    children: [
      {
        path: 'languages',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'LanguageManagement.Languages',
          replaceableComponent: {
            key: eLanguageManagementComponents.Languages,
            defaultComponent: LanguagesComponent,
          } as ReplaceableComponents.RouteData<LanguagesComponent>,
        },
      },
      {
        path: 'texts',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'LanguageManagement.LanguageTexts',
          replaceableComponent: {
            key: eLanguageManagementComponents.LanguageTexts,
            defaultComponent: LanguageTextsComponent,
          } as ReplaceableComponents.RouteData<LanguageTextsComponent>,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageManagementRoutingModule {}
