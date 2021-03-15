import { EntityProp } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { of } from 'rxjs';
import * as fns from 'date-fns';
const ɵ0 = (data) => {
    let text = "";
    if (data.record.disable)
        text = "是";
    else
        text = "否";
    return of(text);
}, ɵ1 = (data) => {
    let text = "";
    if (data.record.displayMode == Fs.Cms.Posts.DisplayMode.內文)
        text = "內文";
    else
        text = "連結";
    return of(text);
}, ɵ2 = (data) => {
    let date = "";
    if (data.record.startTime)
        date = fns.format(new Date(data.record.startTime), 'yyyy-MM-dd');
    return of(date);
}, ɵ3 = (data) => {
    let date = "";
    if (data.record.endTime)
        date = fns.format(new Date(data.record.endTime), 'yyyy-MM-dd');
    return of(date);
};
export const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany([
    // {
    //     type: ePropType.String,
    //     name: 'blogid',
    //     displayName: 'Cms::FS.Post.BlogId',
    //     sortable: true,
    //     columnWidth: 100,
    // },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Post.Disable',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ0,
    },
    {
        type: "string" /* String */,
        name: 'title',
        displayName: 'Cms::FS.Post.Title',
        sortable: true,
        columnWidth: 100,
    },
    // {
    //     type: ePropType.String,
    //     name: 'subtitle',
    //     displayName: 'Cms::FS.Post.Subtitle',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    // {
    //     type: ePropType.String,
    //     name: 'url',
    //     displayName: 'Cms::FS.Post.Url',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    // {
    //     type: ePropType.String,
    //     name: 'content',
    //     displayName: 'Cms::FS.Post.Content',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    {
        type: "string" /* String */,
        name: 'displaymode',
        displayName: 'Cms::FS.Post.DisplayMode',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ1,
    },
    {
        type: "string" /* String */,
        name: 'starttime',
        displayName: 'Cms::FS.Post.StartTime',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ2,
    },
    {
        type: "string" /* String */,
        name: 'endtime',
        displayName: 'Cms::FS.Post.EndTime',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ3,
    },
]);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=default-post-entity-props.js.map