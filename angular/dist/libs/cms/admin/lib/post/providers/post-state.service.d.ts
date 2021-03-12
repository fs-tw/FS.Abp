import { Observable } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import * as i0 from "@angular/core";
export declare namespace Post {
    interface State {
        Blog: Fs.Cms.Blogs.Dtos.BlogDto;
    }
}
export declare class PostStateService {
    private store;
    getBlog(): Observable<Fs.Cms.Blogs.Dtos.BlogDto>;
    constructor();
    setBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto): void;
    static ɵfac: i0.ɵɵFactoryDef<PostStateService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PostStateService>;
}
//# sourceMappingURL=post-state.service.d.ts.map