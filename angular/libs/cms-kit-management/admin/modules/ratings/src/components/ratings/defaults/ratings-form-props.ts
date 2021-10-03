import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const RATINGS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Public.Ratings.RatingDto>([
]);

export const RATINGS_EDIT_FORM_PROPS = RATINGS_CREATE_FORM_PROPS;
