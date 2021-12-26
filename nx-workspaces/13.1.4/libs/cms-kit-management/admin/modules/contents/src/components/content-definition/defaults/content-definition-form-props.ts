import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { of } from 'rxjs';

export const CONTENT_DEFINITION_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionDto>([

]);

export const CONTENT_DEFINITION_EDIT_FORM_PROPS = CONTENT_DEFINITION_CREATE_FORM_PROPS;
