import { InjectionToken } from '@angular/core';

export const SHOW_ENTITY_DETAILS = new InjectionToken<(entityChangeId: string) => void>(
  'SHOW_ENTITY_DETAILS',
);
