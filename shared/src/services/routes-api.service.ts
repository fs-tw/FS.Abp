import { Injectable, Injector } from '@angular/core';
import { Fs } from '@fs-tw/proxy/cms-kit-management';

@Injectable({
  providedIn: 'root',
})
export class RoutesApiService {
  public RoutesQuerys: Fs.CmsKitManagement.Routes.RoutesQuerysApiService = null;
  public RouteDefinitionsQuerys: Fs.CmsKitManagement.Routes.RouteDefinitionsQuerysApiService = null;

  constructor(private injector: Injector) {
    this.RoutesQuerys = injector.get(
      Fs.CmsKitManagement.Routes.RoutesQuerysApiService
    );
    this.RouteDefinitionsQuerys = injector.get(
      Fs.CmsKitManagement.Routes.RouteDefinitionsQuerysApiService
    );
  }
}
