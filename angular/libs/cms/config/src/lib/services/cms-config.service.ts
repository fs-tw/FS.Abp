import { eLayoutType, ConfigStateService, } from '@abp/ng.core';
import { Injectable, Inject, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeCoreService, IConfigService } from '@fs/theme.core'
@Injectable({
  providedIn: 'root',
})
export class CmsConfigService implements IConfigService {

  get configStateService(): ConfigStateService {
    return this.injector.get(ConfigStateService);
  }
  get themeCoreService(): ThemeCoreService {
    return this.injector.get(ThemeCoreService);
  }


  private routes = [
    {
      name: 'cms',
      path: 'cms',
      iconClass: 'icon-cms',
      layout: eLayoutType.application,
      profile: {
        title: 'Cms',
        doc: 'Cms',
        nav: { routeName: 'cms' }
      },
      children: [
        {
          path: '',
          name: '開發中',
          children: [
            {
              path: 'post',
              name: 'post',
              iconClass: 'fa fa-university',
              order: 2,
              children: [],
            }
          ],
        },
      ],
    },
  ] as any[];

  constructor(private injector: Injector) {
  }
  registerRoutes(): Observable<any> {
    return this.themeCoreService.dispatchAddOrPatchRoute(this.routes[0]);

  }
}
