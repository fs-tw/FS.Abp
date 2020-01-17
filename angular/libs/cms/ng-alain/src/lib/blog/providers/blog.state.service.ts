import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BlogState } from './blog.state';


@Injectable({
  providedIn: 'root',
})
export class BlogStateService{
  constructor(private store:Store) {}

  getBlogs(){
    return this.store.selectSnapshot(BlogState.getBlogs);
  }

  getEmployeesTotalCount() {
    return this.store.selectSnapshot(BlogState.getBlogsTotalCount);
  }

 
//   getEmployeesTotalCount() {
//     return this.store.selectSnapshot(EmployeeState.getEmployeesTotalCount);
//   }
    

}