import {
  AuthGuard,
  DynamicLayoutComponent,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
  RouterOutletComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineTemplateContentComponent } from './components/inline-template-content/inline-template-content.component';
import { TemplateContentsComponent } from './components/template-contents/template-contents.component';
import { TextTemplatesComponent } from './components/text-templates/text-templates.component';
import { eTextTemplateManagementComponents } from './enums/components';
import { TextTemplateManagementExtensionsGuard } from './guards/extensions.guard';

const routes: Routes = [
  { path: '', redirectTo: 'text-templates', pathMatch: 'full' },
  {
    path: 'text-templates',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard, TextTemplateManagementExtensionsGuard],
    children: [
      {
        path: '',
        component: ReplaceableRouteContainerComponent,
        data: {
          requiredPolicy: 'TextTemplateManagement.TextTemplates',
          replaceableComponent: {
            key: eTextTemplateManagementComponents.TextTemplates,
            defaultComponent: TextTemplatesComponent,
          } as ReplaceableComponents.RouteData<TextTemplatesComponent>,
        },
      },
      {
        path: 'contents',
        component: RouterOutletComponent,
        canActivate: [PermissionGuard],
        data: { requiredPolicy: 'TextTemplateManagement.TextTemplates.EditContents' },
        children: [
          {
            path: 'inline/:name',
            component: InlineTemplateContentComponent,
            data: {
              replaceableComponent: {
                key: eTextTemplateManagementComponents.InlineTemplateContent,
                defaultComponent: InlineTemplateContentComponent,
              } as ReplaceableComponents.RouteData<InlineTemplateContentComponent>,
            },
          },
          {
            path: ':name',
            component: TemplateContentsComponent,
            data: {
              replaceableComponent: {
                key: eTextTemplateManagementComponents.TemplateContents,
                defaultComponent: TemplateContentsComponent,
              } as ReplaceableComponents.RouteData<TemplateContentsComponent>,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextTemplateManagementRoutingModule {}
