import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BlogState } from './blog.state';
import { CreateCoding,DeleteCoding,PatchNewsById } from './blog.action';
import { CodeProcessService } from '@fs/coding-management/core';

@Injectable({
  providedIn: 'root',
})
export class BlogStateService {
  constructor(
    private store: Store,
    private codeProcessService: CodeProcessService,
    ) {

  }


  getCodeChildrenDetail(filterNo:string){   
    var blog = this.getOne("codings");
    var result = this.codeProcessService.getCodeChildrenDetail(blog.children, blog.codeList);
    return result.find(x => { return x.no == filterNo }).children;    
  }

  getAll() {
    return this.store.selectSnapshot(BlogState.getAll);
  }

  getOne(...args: Parameters<typeof BlogState.getOne>) {
    return this.store.selectSnapshot(BlogState.getOne(...args));
  }

  dispatchPatchNewsById(...args: ConstructorParameters<typeof PatchNewsById>) {
    return this.store.dispatch(new PatchNewsById(...args));
  }

  dispatchAddNews(...args: ConstructorParameters<typeof CreateCoding>) {
    return this.store.dispatch(new CreateCoding(...args));
  }

  dispatchRemoveNews(...args: ConstructorParameters<typeof DeleteCoding>) {
    return this.store.dispatch(new DeleteCoding(...args));
  }


}