import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BlogState } from './blog.state';
import { CreateCoding,DeleteCoding } from './blog.action';

@Injectable({
  providedIn: 'root',
})
export class BlogStateService {
  constructor(private store: Store) {

  }

  getOne(...args: Parameters<typeof BlogState.getOne>) {
    return this.store.selectSnapshot(BlogState.getOne(...args));
  }

  dispatchAddNews(...args: ConstructorParameters<typeof CreateCoding>) {
    return this.store.dispatch(new CreateCoding(...args));
  }

  dispatchRemoveNews(...args: ConstructorParameters<typeof DeleteCoding>) {
    return this.store.dispatch(new DeleteCoding(...args));
  }


}