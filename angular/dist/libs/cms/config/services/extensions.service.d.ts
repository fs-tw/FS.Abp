import { eCmsRouteNames } from '../enums/route-names';
import { Subject } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<ExtensionsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ExtensionsService>;
}
//# sourceMappingURL=extensions.service.d.ts.map