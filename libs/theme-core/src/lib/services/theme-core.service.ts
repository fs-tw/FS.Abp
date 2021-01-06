import { Injectable, Optional, Inject } from '@angular/core';
import { ABP } from '@abp/ng.core';
import { Observable, of } from 'rxjs';
import { SettingAppService } from './Setting/SettingApp.service';
import { CodeSettingAppService } from './CodeSetting/CodeSettingApp.service';
import * as _ from 'lodash';
import { DefinitionSettingAppService } from './DefinitionSetting/DefinitionSettingApp.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeCoreService {
  constructor(
    public codeSettingAppService: CodeSettingAppService,
    public definitionSettingAppService: DefinitionSettingAppService,
    public settingAppService: SettingAppService,    

    @Optional() @Inject('ThemeCoreOptions') private options: any
  ) { }



  dispatchAddOrPatchRoute(route: ABP.Route): Observable<any> {
    return of();
    // let actions: Array<any> = [];

    // if (!this.configStateService.getRoute(null, route.name)) {
    //   actions.push(new AddRoute(route));
    // }
    // actions = actions.concat(convertTreeToList(route).map(r => new PatchRouteByName(r.name, r)));
    // return this.store.dispatch(actions);
    // function convertTreeToList(root): ABP.FullRoute[] {
    //   var stack: ABP.FullRoute[] = [], array: ABP.FullRoute[] = [];
    //   stack.push(root);
    //   while (stack.length !== 0) {
    //     var node = stack.pop();
    //     if (!!node.children && node.children.length > 0) {
    //       array.push(node);
    //     }
    //     if (!!node.children) {
    //       for (var i = node.children.length - 1; i >= 0; i--) {
    //         stack.push(node.children[i] as ABP.FullRoute);
    //       }
    //     }
    //   }
    //   return array;
    // }
  }
}
