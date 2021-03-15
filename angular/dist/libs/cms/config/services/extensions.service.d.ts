import { eCmsRouteNames } from '../enums/route-names';
import { Subject } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
export declare class ActionItem<T> {
    name: 'Edit' | 'Delete' | 'Add';
    record?: T;
}
export declare class ExtensionsService {
    Actions$: {
        "Cms::FS.Cms.Blogs": Subject<ActionItem<Fs.Cms.Blogs.Dtos.BlogDto>>;
        "Cms::FS.Cms.PostManagement": Subject<ActionItem<Fs.Cms.Posts.Dtos.PostDto>>;
        標籤維護: Subject<ActionItem<Fs.Cms.Tags.Dtos.TagDto>>;
    };
    constructor();
    action<T>(type: eCmsRouteNames, data?: ActionItem<T>): void;
}
