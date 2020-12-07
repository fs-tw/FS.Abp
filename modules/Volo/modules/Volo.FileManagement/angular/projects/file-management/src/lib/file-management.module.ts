import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { TreeModule } from '@abp/ng.components/tree';
import { FileManagementComponent } from './file-management.component';
import { FileManagementRoutingModule } from './file-management-routing.module';
import { FileManagementDirectoryTreeComponent } from './components/file-management-directory-tree/file-management-directory-tree.component';
import { FileManagementButtonsComponent } from './components/file-management-buttons/file-management-buttons.component';
import { FileManagementBreadcrumbComponent } from './components/file-management-breadcrumb/file-management-breadcrumb.component';
import { FileManagementFolderContentComponent } from './components/file-management-folder-content/file-management-folder-content.component';
import { FileManagementFolderFilterComponent } from './components/file-management-folder-filter/file-management-folder-filter.component';
import { FileManagementFolderPanelComponent } from './components/file-management-folder-panel/file-management-folder-panel.component';
import { FileManagementConfigOptions } from './models/config-options';
import { FileManagementInitializer } from './file-management.initializer';
import {
  FILE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  FILE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  FILE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
  FILE_MANAGEMENT_XSRF_HEADER_NAME,
} from './tokens/extensions.token';
import { RenameModalComponent } from './modals/rename-modal/rename-modal.component';
import { CreateFolderModalComponent } from './modals/create-folder-modal/create-folder-modal.component';
import { BaseModalComponent } from './modals/base-modal.component';
import { MoveFileModalComponent } from './modals/move-file-modal/move-file-modal.component';

const exportedComponents = [
  FileManagementComponent,
  FileManagementDirectoryTreeComponent,
  FileManagementButtonsComponent,
  FileManagementBreadcrumbComponent,
  FileManagementFolderContentComponent,
  FileManagementFolderFilterComponent,
  FileManagementFolderPanelComponent,
];

const modals = [
  RenameModalComponent,
  CreateFolderModalComponent,
  BaseModalComponent,
  MoveFileModalComponent,
];

@NgModule({
  declarations: [...exportedComponents, ...modals],
  imports: [
    CoreModule,
    ThemeSharedModule,
    TreeModule,
    FileManagementRoutingModule,
    NgbDropdownModule,
    UiExtensionsModule,
    NgxValidateCoreModule,
  ],
  exports: [...exportedComponents],
})
export class FileManagementModule {
  static forChild(
    options: FileManagementConfigOptions = {}
  ): ModuleWithProviders<FileManagementModule> {
    return {
      ngModule: FileManagementModule,
      providers: [
        {
          provide: FILE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: FILE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: FILE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        {
          provide: FILE_MANAGEMENT_XSRF_HEADER_NAME,
          useValue: options.xsrfHeaderName || 'RequestVerificationToken',
        },

        FileManagementInitializer,
      ],
    };
  }

  static forLazy(
    options: FileManagementConfigOptions = {}
  ): NgModuleFactory<FileManagementModule> {
    return new LazyModuleFactory(FileManagementModule.forChild(options));
  }
}
