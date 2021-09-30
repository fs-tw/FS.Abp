import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const MEDIA_DESCRIPTORS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto>([
    {
        type: ePropType.String,
        name: 'name',
        id:'name',
        displayName: 'CmsKit::Name',
        validators: () => [Validators.required],
    },
]);

export const MEDIA_DESCRIPTORS_EDIT_FORM_PROPS = MEDIA_DESCRIPTORS_CREATE_FORM_PROPS;
