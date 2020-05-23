import {
  AddRoute,
  ABP,
  addAbpRoutes,
  eLayoutType,
  RestService,
  PatchRouteByName,
  ConfigStateService,
  ConfigState,
  GetAppConfiguration,
} from '@abp/ng.core';
import { Injectable, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { ThemeCoreService } from '@fs/theme.core';
@Injectable({
  providedIn: 'root',
})
export class CmsConfigService {

  get configStateService(): ConfigStateService {
    return this.injector.get(ConfigStateService);
  }
  get themeCoreService(): ThemeCoreService {
    return this.injector.get(ThemeCoreService);
  }

  get store(): Store {
    return this.injector.get(Store);
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
    addAbpRoutes(this.routes);
    setTimeout(() => {
      this.routes.forEach(route => {
        this.themeCoreService.dispatchAddOrPatchRoute$(route);
      });

      this.registerRoutes();
    });
  }
  registerRoutes() {
    var oldRoute = this.configStateService.getRoute(null, 'AbpUiNavigation::Menu:Administration');

  }
}
