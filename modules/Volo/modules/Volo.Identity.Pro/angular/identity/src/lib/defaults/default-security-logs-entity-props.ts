import { ConfigStateService, getShortDateShortTimeFormat } from '@abp/ng.core';
import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { DatePipe } from '@angular/common';
import { IdentitySecurityLogDto } from '@volo/abp.commercial.ng.ui';
import { of } from 'rxjs';
import { SecurityLogsComponent } from '../components/security-logs/security-logs.component';

export const DEFAULT_SECURITY_LOGS_ENTITY_PROPS = EntityProp.createMany<IdentitySecurityLogDto>([
  {
    type: ePropType.String,
    name: 'creationTime',
    displayName: 'AbpIdentity::SecurityLogs:Time',
    sortable: true,
    columnWidth: 180,
    valueResolver: data => {
      const config = data.getInjected(ConfigStateService);
      const datePipe = data.getInjected(DatePipe);

      return of(datePipe.transform(data.record.creationTime, getShortDateShortTimeFormat(config)));
    },
  },
  {
    type: ePropType.String,
    name: 'action',
    displayName: 'AbpIdentity::SecurityLogs:Action',
    sortable: true,
    columnWidth: 180,
    valueResolver: data => {
      return of(
        `<div style="max-width: 160px" class="pointer abp-ellipsis-inline">${data.record.action ||
          ''}</div>`,
      );
    },
    action: data => {
      const component = data.getInjected(SecurityLogsComponent);
      component.filter.action = data.record.action;
      component.list.get();
    },
  },
  {
    type: ePropType.String,
    name: 'clientIpAddress',
    displayName: 'AbpIdentity::SecurityLogs:IpAddress',
    sortable: false,
    columnWidth: 200,
    valueResolver: data => {
      return of(
        `<div style="max-width: 180px" class="abp-ellipsis-inline">${data.record.clientIpAddress ||
          ''}</div>`,
      );
    },
  },
  {
    type: ePropType.String,
    name: 'browserInfo',
    displayName: 'AbpIdentity::SecurityLogs:Browser',
    sortable: false,
    columnWidth: 200,
    valueResolver: data => {
      return of(
        `<div style="max-width: 180px" class="abp-ellipsis-inline">${data.record.browserInfo ||
          ''}</div>`,
      );
    },
  },
  {
    type: ePropType.String,
    name: 'applicationName',
    displayName: 'AbpIdentity::SecurityLogs:Application',
    sortable: true,
    columnWidth: 150,
    valueResolver: data => {
      return of(
        `<div style="max-width: 135px" class="pointer abp-ellipsis-inline">${data.record
          .applicationName || ''}</div>`,
      );
    },
    action: data => {
      const component = data.getInjected(SecurityLogsComponent);
      component.filter.applicationName = data.record.applicationName;
      component.list.get();
    },
  },
  {
    type: ePropType.String,
    name: 'identity',
    displayName: 'AbpIdentity::SecurityLogs:Identity',
    sortable: true,
    columnWidth: 150,
    valueResolver: data => {
      return of(
        `<div style="max-width: 135px" class="pointer abp-ellipsis-inline">${data.record.identity ||
          ''}</div>`,
      );
    },
    action: data => {
      const component = data.getInjected(SecurityLogsComponent);
      component.filter.identity = data.record.identity;
      component.list.get();
    },
  },
  {
    type: ePropType.String,
    name: 'userName',
    displayName: 'AbpIdentity::SecurityLogs:UserName',
    sortable: true,
    columnWidth: 150,
    valueResolver: data => {
      return of(
        `<div style="max-width: 135px" class="pointer abp-ellipsis-inline">${data.record.userName ||
          ''}</div>`,
      );
    },
    action: data => {
      const component = data.getInjected(SecurityLogsComponent);
      component.filter.userName = data.record.userName;
      component.list.get();
    },
  },
  {
    type: ePropType.String,
    name: 'clientId',
    displayName: 'AbpIdentity::SecurityLogs:Client',
    sortable: true,
    columnWidth: 320,
    valueResolver: data => {
      return of(`<div class="pointer">${data.record.clientId || ''}</div>`);
    },
    action: data => {
      const component = data.getInjected(SecurityLogsComponent);
      component.filter.clientId = data.record.clientId;
      component.list.get();
    },
  },
  {
    type: ePropType.String,
    name: 'correlationId',
    displayName: 'AbpIdentity::SecurityLogs:CorrelationId',
    sortable: true,
    columnWidth: 320,
    valueResolver: data => {
      return of(`<div class="pointer">${data.record.correlationId || ''}</div>`);
    },
    action: data => {
      const component = data.getInjected(SecurityLogsComponent);
      component.filter.correlationId = data.record.correlationId;
      component.list.get();
    },
  },
]);
