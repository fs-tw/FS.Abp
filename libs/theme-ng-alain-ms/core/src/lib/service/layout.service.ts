import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { MSMenu } from '@fs/theme.ng-alain-ms/shared';
import { ConfigStateService, ABP, LocalizationPipe, TreeNode,PermissionService } from '@abp/ng.core'
import { MSProduct } from '@fs/theme.ng-alain-ms/layout';
import { RoutesService } from '@abp/ng.core'
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared'
import { LayoutState } from '../states/layout.state';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  get routes(): TreeNode<ABP.Route>[] {
    return this.RoutesService.tree;
  }
  get Shortcuts(): MSProduct[] {
    let condition = (x: ABP.Route) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy);
    let result: MSProduct[] = [];
    //only administrator children second
    this.routes
      .filter(condition)
      .find(first => first.name == eThemeSharedRouteNames.Administration)
      .children
      .forEach(second => {
        let group: MSProduct = {
          id: second.name,
          name: this.localizationPipe.transform(second.name),
          text: this.localizationPipe.transform(second.name),
          icon: second.iconClass,
          link: second.path
        };
        if (!second.invisible)
          result.push(group);
      });
    return result;
  }
  get NavList(): MSMenu[] {
    let result: MSMenu[] = [];
    let processor = this.store.selectSnapshot(LayoutState.getProcessor);
    if (processor.currentRoute?.route?.parentName == null || processor.currentRoute.route.parentName == eThemeSharedRouteNames.Administration) {
      return result;
    }
    let nav = this.store.selectSnapshot(LayoutState.getProfile).nav ?? { parentName: null, routeName: processor.currentRoute.parent.route.name };
    if (!nav) return result;

    let self = this;
    let condition = (x: ABP.Route) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy);
    let target = null
    this.routes.filter(condition).find(x => {
      let result = searchTree(x);
      if (!!result)
        target = result;
    });

    if (!!target) {
      result.push(...transMenu(target));
    }
    return result;
    function searchTree(element: TreeNode<ABP.Route>) {
      let hasChildren = (!!element.children && element.children.length > 0);
      let specifyParent = processor.formatParams(nav.parentName);
      let isSpecifyParent = !!specifyParent;
      if (!isSpecifyParent && element.name == nav.routeName) {
        return element;
      }
      if (isSpecifyParent && element.name === specifyParent && hasChildren) {
        let target = element.children.find(x => x.name === nav.routeName);
        if (!!target)
          return target;
      }
      if (element.children != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.children.length; i++) {
          result = searchTree(element.children[i]);
        }
        return result;
      }
    }
    function transMenu(first: any) {
      //this.navConfig.backHref = null;
      let result = [];
      first.children.filter(condition).forEach(second => {
        if (!second.children || second.children.length === 0) {
          let left: MSMenu = {
            text: second.displayName || self.localizationPipe.transform(second.name),
            link: formatUrl(second),//(second.url || second.path),//urlPrefix + '/' + (second.url || second.path),
            icon: second.iconClass
          };
          result.push(left);
          return;
        }
        let node: MSMenu = {
          text: second.displayName || self.localizationPipe.transform(second.name),
          icon: second.iconClass,
          children: []
        };
        result.push(node);
        second.children.filter(condition).forEach(third => {
          let left: MSMenu = {
            text: third.displayName || self.localizationPipe.transform(third.name),
            link: formatUrl(third),//(third.url || third.path),
            icon: third.iconClass,
            children: []
          };
          node.children.push(left);
        });
      })
      return result;
    }
    function formatUrl(route: ABP.Route) {
      return processor.formatParams(route.path);
    }
  }

  constructor(
    private store: Store,
    private localizationPipe: LocalizationPipe,
    private configStateService: ConfigStateService,
    private RoutesService: RoutesService,
    private permissionService:PermissionService
  ) {

  }

  private isGrantedPolicy(requiredPolicy: string) {
    if (!!requiredPolicy) {
      return this.permissionService.getGrantedPolicy(requiredPolicy);
    }
    return true;
  }

}