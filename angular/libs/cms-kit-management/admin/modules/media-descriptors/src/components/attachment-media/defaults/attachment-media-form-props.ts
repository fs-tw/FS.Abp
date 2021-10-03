import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

export const ATTACH_MENTMEDIA_CREATE_FORM_PROPS = FormProp.createMany<Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaDto>([
]);

export const ATTACH_MENTMEDIA_EDIT_FORM_PROPS = ATTACH_MENTMEDIA_CREATE_FORM_PROPS;
