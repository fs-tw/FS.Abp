import { addAbpRoutes, eLayoutType, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CmsConfigService {
  constructor(private router: Router, private restService: RestService) {
    addAbpRoutes([
      {
        parentName: 'Development',
        name: 'Cms',
        path: 'cms',
        iconClass: 'fa fa-folder',
        children: [
          {
            path: 'blog', name: 'Blog', iconClass: 'fa fa-server', order: 1,
            children: []
          },
          {
            path: 'post', name: 'Post', iconClass: 'fa fa-paper-plane', order: 1,
            children: []
          },
        ]
      }
    ]);
  }
}
