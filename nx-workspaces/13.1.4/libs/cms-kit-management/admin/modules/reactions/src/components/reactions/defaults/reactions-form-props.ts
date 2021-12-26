import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const REACTIONS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Public.Reactions.ReactionDto>([
]);

export const REACTIONS_EDIT_FORM_PROPS = REACTIONS_CREATE_FORM_PROPS;
