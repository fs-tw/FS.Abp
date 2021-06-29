import { Component, OnInit, Injector, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';

import { Fs } from '@fs-tw/proxy/cms-kit-management'

class RouteWithSpaceLength {
  spaceLength: number = 0;
  data: Fs.CmsKitManagement.Routes.Dtos.RouteDto;

  constructor(item: Fs.CmsKitManagement.Routes.Dtos.RouteDto) {
    this.data = item;
    this.spaceLength = item.code.split('.').length * 25;
  }
}

@Component({
  selector: 'fs-select-routes',
  templateUrl: './select-routes.component.html'
})
export class SelectRoutesComponent implements OnInit, OnChanges {

  @Input()
  routeIds: string[] = [];

  @Output()
  routeIdsChange = new EventEmitter<string[]>();

  routesApiService: Fs.CmsKitManagement.Routes.RoutesApiService = null;
  
  routes: RouteWithSpaceLength[] = [];
  selectedRoute = new Set<string>();
  
  constructor(
    injector: Injector
  ) {
    this.routesApiService = injector.get(Fs.CmsKitManagement.Routes.RoutesApiService);
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  ngOnChanges() {
    this.selectedRoute = new Set<string>();
    this.routeIds.forEach(x => this.selectedRoute.add(x));
  }

  getRoutes() {
    this.routesApiService.getRouteDefinitions()
      .pipe(
        mergeMap((x) => {
          let routeDefinition = x.find(x => x.no == "Public");
          return routeDefinition ?
            this.routesApiService.getRoutesByRouteDefinitionId(routeDefinition.id) :
            of([] as Fs.CmsKitManagement.Routes.Dtos.RouteDto[])
        })
      ).subscribe((x) => {
        x = _.orderBy(x, ['code'], ['asc']);
        this.routes = x.map(y => new RouteWithSpaceLength(y));
      });
  }

  onCheckChange(id: string) {
    if (this.selectedRoute.has(id)) {
      this.selectedRoute.delete(id);
    } else {
      this.selectedRoute.add(id);
    }

    let routeIds = [];
    for(let id of this.selectedRoute) {
      routeIds.push(id);
    }
    
    this.routeIdsChange.emit(routeIds);
  }
}
