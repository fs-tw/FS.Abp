import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { Injectable, Injector } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { eAuditLoggingComponents } from '../enums/components';
import {
  AuditLoggingEntityActionContributors,
  AuditLoggingEntityPropContributors,
  AuditLoggingToolbarActionContributors,
} from '../models/config-options';
import {
  AUDIT_LOGGING_ENTITY_ACTION_CONTRIBUTORS,
  AUDIT_LOGGING_ENTITY_PROP_CONTRIBUTORS,
  AUDIT_LOGGING_TOOLBAR_ACTION_CONTRIBUTORS,
  DEFAULT_AUDIT_LOGGING_ENTITY_ACTIONS,
  DEFAULT_AUDIT_LOGGING_ENTITY_PROPS,
  DEFAULT_AUDIT_LOGGING_TOOLBAR_ACTIONS,
} from '../tokens/extensions.token';

@Injectable()
export class AuditLoggingExtensionsGuard implements CanActivate {
  constructor(private injector: Injector) {}

  canActivate(): Observable<boolean> {
    const extensions: ExtensionsService = this.injector.get(ExtensionsService);
    const actionContributors: AuditLoggingEntityActionContributors =
      this.injector.get(AUDIT_LOGGING_ENTITY_ACTION_CONTRIBUTORS, null) || {};
    const toolbarContributors: AuditLoggingToolbarActionContributors =
      this.injector.get(AUDIT_LOGGING_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
    const propContributors: AuditLoggingEntityPropContributors =
      this.injector.get(AUDIT_LOGGING_ENTITY_PROP_CONTRIBUTORS, null) || {};

    const configState = this.injector.get(ConfigStateService);
    return getObjectExtensionEntitiesFromStore(configState, 'AuditLogging').pipe(
      map(entities => ({
        [eAuditLoggingComponents.AuditLogs]: entities.AuditLog,
      })),
      mapEntitiesToContributors(configState, 'AuditLogging'),
      tap(objectExtensionContributors => {
        mergeWithDefaultActions(
          extensions.entityActions,
          DEFAULT_AUDIT_LOGGING_ENTITY_ACTIONS,
          actionContributors,
        );
        mergeWithDefaultActions(
          extensions.toolbarActions,
          DEFAULT_AUDIT_LOGGING_TOOLBAR_ACTIONS,
          toolbarContributors,
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          DEFAULT_AUDIT_LOGGING_ENTITY_PROPS,
          objectExtensionContributors.prop,
          propContributors,
        );
      }),
      mapTo(true),
    );
  }
}
