import { Injectable } from '@angular/core';
import { eLayoutType, addAbpRoutes, ABP } from '@abp/ng.core';
import { addSettingTab } from '@abp/ng.theme.shared';
import { TextTemplateManagementSettingsComponent } from '../components/text-template-management-settings.component';

@Injectable({
  providedIn: 'root',
})
export class TextTemplateManagementConfigService {
  constructor() {
    addAbpRoutes({
      name: 'TextTemplateManagement',
      path: 'text-template-management',
      layout: eLayoutType.application,
      iconClass: 'fas fa-check',
      order: 4,
    } as ABP.FullRoute);

    const route = addSettingTab({
      component: TextTemplateManagementSettingsComponent,
      name: 'TextTemplateManagement Settings',
      order: 4,
      requiredPolicy: '',
    });
  }
}
