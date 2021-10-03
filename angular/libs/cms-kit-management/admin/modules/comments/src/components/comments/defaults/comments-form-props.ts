import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const COMMENTS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Comments.CommentWithAuthorDto>([

]);

export const COMMENTS_EDIT_FORM_PROPS = COMMENTS_CREATE_FORM_PROPS;
