import { GetTemplateDefinitionListInput } from '../proxy/text-templates/models';

export class GetTemplateDefinitions {
  static readonly type = '[TextTemplateManagement] Get template definitions';
  constructor(public payload?: GetTemplateDefinitionListInput) {}
}
