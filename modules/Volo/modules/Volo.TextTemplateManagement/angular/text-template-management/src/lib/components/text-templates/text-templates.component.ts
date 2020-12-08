import { ABP, ListService, PagedResultDto } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component, OnInit } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { eTextTemplateManagementComponents } from '../../enums/components';
import {
  GetTemplateDefinitionListInput,
  TemplateDefinitionDto,
} from '../../proxy/text-templates/models';
import { GetTemplateDefinitions } from '../../state/text-template-management.actions';
import { TextTemplateManagementState } from '../../state/text-template-management.state';

@Component({
  selector: 'abp-text-templates',
  templateUrl: 'text-templates.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eTextTemplateManagementComponents.TextTemplates,
    },
  ],
})
export class TextTemplatesComponent implements OnInit {
  @Select(TextTemplateManagementState.getTemplateDefinitions)
  pagedData$: Observable<PagedResultDto<TemplateDefinitionDto>>;

  constructor(public readonly list: ListService<ABP.PageQueryParams>, private store: Store) {}

  ngOnInit() {
    this.hookToQuery();
  }

  private hookToQuery() {
    this.list
      .hookToQuery(({ filter: filterText, ...query }) =>
        this.store.dispatch(
          new GetTemplateDefinitions({ ...query, filterText } as GetTemplateDefinitionListInput),
        ),
      )
      .subscribe();
  }

  editContents(record: TemplateDefinitionDto) {
    this.store.dispatch(
      new Navigate([
        `/text-template-management/text-templates/contents${
          record.isInlineLocalized ? '/inline' : ''
        }/${record.name}`,
      ]),
    );
  }
}
