import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { of } from 'rxjs';

export const DEFAULT_BLOG_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Blogs.Dtos.BlogDto>([
   
    // {
    //     type: ePropType.String,
    //     name: 'no',
    //     displayName: 'Cms::FS.Blog.No',
    //     sortable: true,
    //     columnWidth: 100,
    // },
    {
        type: ePropType.String,
        name: 'displayName',
        displayName: 'Cms::FS.Blog.DisplayName',
        sortable: true,
        columnWidth: 50,
    },
    // {
    //     type: ePropType.String,
    //     name: 'description',
    //     displayName: 'Cms::FS.Blog.Description',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    {
        type: ePropType.String,
        name: 'disable',
        displayName: 'Cms::FS.Blog.Disable',
        sortable: true,
        columnWidth: 50,
        valueResolver: (data) => {           
            let text = "";
            if(data.record.disable) text = "是"
            else text ="否"
            return of(text)
        },
    },
    // {
    //     type: ePropType.String,
    //     name: 'blogConfig',
    //     displayName: 'Cms::FS.Blog.BlogConfig',
    //     sortable: true,
    //     columnWidth: 150,
    // }
]);
