import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetTemplateDefinitions } from './text-template-management.actions';
import { Injectable } from '@angular/core';
import { PagedResultDto } from '@abp/ng.core';
import { tap } from 'rxjs/operators';
import { TemplateDefinitionService } from '../proxy/text-templates/template-definition.service';
import { TemplateDefinitionDto } from '../proxy/text-templates/models';

export class TextTemplateManagementStateModel {
  public templateDefinitions: PagedResultDto<TemplateDefinitionDto>;
}

@State<TextTemplateManagementStateModel>({
  name: 'textTemplateManagement',
  defaults: {
    templateDefinitions: { items: [], totalCount: 0 },
  },
})
@Injectable()
export class TextTemplateManagementState {
  @Selector()
  static getTemplateDefinitions({
    templateDefinitions,
  }: TextTemplateManagementStateModel): PagedResultDto<TemplateDefinitionDto> {
    return templateDefinitions;
  }

  constructor(private templateDefinitionService: TemplateDefinitionService) {}

  @Action(GetTemplateDefinitions)
  fetchTemplateDefinitions(
    { patchState }: StateContext<TextTemplateManagementStateModel>,
    { payload }: GetTemplateDefinitions,
  ) {
    return this.templateDefinitionService.getList(payload).pipe(
      tap(templateDefinitions =>
        patchState({
          templateDefinitions,
        }),
      ),
    );
  }
}
