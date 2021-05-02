import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { Validators } from '@angular/forms';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { map } from 'rxjs/operators';

export const DEFAULT_BLOG_POSTS_CREATE_FORM_PROPS = FormProp.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
  {
    type: ePropType.String,
    name: 'blogId',
    id: 'blogId',
    displayName: 'CmsKit::BlogId',
    options: (data) => {
      let service = data.getInjected(Volo.CmsKit.Admin.Blogs.BlogAdminService);
      return service.getListByInput({} as any)
        .pipe(map(x =>
          x.items.map(item => {
            return {
              key: item.name,
              value: item.id
            }
          }
          )));
    }    
    //defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'title',
    id: 'title',
    displayName: 'CmsKit::Title',
    //defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'slug',
    id: 'slug',
    displayName: 'CmsKit::Slug',
    //defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'shortDescription',
    id:'shortDescription',
    displayName: 'CmsKit::ShortDescription',
    //defaultValue:''
  },
  {
    type: ePropType.String,
    name: 'content',
    id:'content',
    displayName: 'CmsKit::Content',
    //defaultValue:''
  }
]);

export const DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS = DEFAULT_BLOG_POSTS_CREATE_FORM_PROPS;
