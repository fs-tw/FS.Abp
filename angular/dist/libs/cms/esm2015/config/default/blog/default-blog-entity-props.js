import { EntityProp } from '@abp/ng.theme.shared/extensions';
import { of } from 'rxjs';
const ɵ0 = (data) => {
    let text = "";
    if (data.record.disable)
        text = "是";
    else
        text = "否";
    return of(text);
};
export const DEFAULT_BLOG_ENTITY_PROPS = EntityProp.createMany([
    // {
    //     type: ePropType.String,
    //     name: 'no',
    //     displayName: 'Cms::FS.Blog.No',
    //     sortable: true,
    //     columnWidth: 100,
    // },
    {
        type: "string" /* String */,
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
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Blog.Disable',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ0,
    },
]);
export { ɵ0 };
//# sourceMappingURL=default-blog-entity-props.js.map