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
        sortable: false,
        valueResolver:(data)=>{

            let displayName = data.record.displayName;
            let result = `${displayName}<br><small>排序：${data.record.sequence}</small>`
            return of(result)
        }
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
        sortable: false,
        columnWidth: 60,
        valueResolver: (data) => {           
            let text = "禁用:";
            if(data.record.disable) text = "禁用:是"
            else text ="禁用:否";
            
            
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
