import { createHTTPFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { Store } from '@ngxs/store';
import { EntityChangeService } from '../services/entity-change.service';
import { CORE_OPTIONS } from '@abp/ng.core';

describe('EntityChangeService', () => {
  let spectator: SpectatorHttp<EntityChangeService>;
  let service: EntityChangeService;
  // tslint:disable-next-line: deprecation
  const createHTTP = createHTTPFactory(EntityChangeService, [
    {
      provide: Store,
      useFactory: () => ({
        selectSnapshot() {
          return '';
        },
      }),
    },
    { provide: CORE_OPTIONS, useValue: { environment: {} } } as any,
  ]);

  beforeEach(() => {
    spectator = createHTTP() as SpectatorHttp<EntityChangeService>;
    service = spectator.service;
  });

  it('should get a list of entity changes', done => {
    const response = [] as any;

    service.getEntityChanges().subscribe(data => {
      expect(data).toBe(response);
      done();
    });

    const request = spectator.expectOne(`${service.auditLogsUrl}/entity-changes`, HttpMethod.GET);

    spectator.flushAll([request], [response]);
  });

  it('should get an entity change by id', done => {
    const response = {} as any;

    service.getEntityChangeById('x').subscribe(data => {
      expect(data).toBe(response);
      done();
    });

    const request = spectator.expectOne(`${service.auditLogsUrl}/entity-changes/x`, HttpMethod.GET);

    spectator.flushAll([request], [response]);
  });

  it('should get a list of entity changes with username', done => {
    const response = [] as any;

    service.getEntityChangesWithUserName('', '').subscribe(data => {
      expect(data).toBe(response);
      done();
    });

    const request = spectator.expectOne(
      `${service.auditLogsUrl}/entity-changes-with-username`,
      HttpMethod.GET,
    );

    spectator.flushAll([request], [response]);
  });

  it('should get an entity change with username by id', done => {
    const response = {} as any;

    service.getEntityChangeWithUserNameById('x').subscribe(data => {
      expect(data).toBe(response);
      done();
    });

    const request = spectator.expectOne(
      `${service.auditLogsUrl}/entity-change-with-username/x`,
      HttpMethod.GET,
    );

    spectator.flushAll([request], [response]);
  });
});
