import { Observable } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
export declare namespace Post {
    interface State {
        Blog: Fs.Cms.Blogs.Dtos.BlogDto;
    }
}
export declare class PostStateService {
    private store;
    getBlog(): Observable<Fs.Cms.Blogs.Dtos.BlogDto>;
    setBlog(blog: Fs.Cms.Blogs.Dtos.BlogDto): void;
}
