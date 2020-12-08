import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { TextTemplateManagementState } from '../state/text-template-management.state';
import { GetTemplateDefinitions } from '../state/text-template-management.actions';
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class TextTemplateManagementStateService {
  constructor(private store: Store) {}

  getTemplateDefinitions(params = {} as PagedAndSortedResultRequestDto) {
    return this.store.selectSnapshot(TextTemplateManagementState.getTemplateDefinitions);
  }

  dispatchGetTemplateDefinitions(...args: ConstructorParameters<typeof GetTemplateDefinitions>) {
    return this.store.dispatch(new GetTemplateDefinitions(...args));
  }
}
