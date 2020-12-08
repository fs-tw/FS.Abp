import { ABP, findRoute, getRoutePath, RoutesService, TreeNode } from '@abp/ng.core';
import { collapse } from '@abp/ng.theme.shared';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TrackByFunction
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'abp-routes',
  templateUrl: 'routes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [collapse],
})
export class RoutesComponent implements OnInit {
  @Output() clickedToLink = new EventEmitter<MouseEvent>();

  @Input() isMenuPlacementTop: boolean;

  @Input() smallScreen: boolean;

  readonly expandedRoutes = new Set<string>();

  trackByFn: TrackByFunction<TreeNode<ABP.Route>> = (_, item) => item.name;

  constructor(private router: Router, public readonly routes: RoutesService) {}

  isDropdown(node: TreeNode<ABP.Route>) {
    return !node?.isLeaf || this.routes.hasChildren(node.name);
  }

  ngOnInit() {
    let node = findRoute(this.routes, getRoutePath(this.router));
    node = { parent: node } as TreeNode<ABP.Route>;

    while (node.parent) {
      this.expandedRoutes.add(node.name);
      node = node.parent;
    }

    this.expandedRoutes.add(node.name);
  }

  onNavigate({ parentName }: ABP.Route) {
    const parents = [parentName];
    let node = this.routes.find(item => item.name === parentName);
    while (node?.parent) {
      node = node.parent;
      parents.push(node.name);
    }

    this.expandedRoutes.forEach(expanded => {
      if (parents.indexOf(expanded) < 0) this.expandedRoutes.delete(expanded);
    });
  }

  toggleExpand({ name, parentName }: ABP.Route) {
    const has = this.expandedRoutes.has(name);
    this.expandedRoutes[has ? 'delete' : 'add'](name);

    if (!has) {
      this.collapseDropdowns(name, parentName);
    }
  }

  collapseDropdowns(name: string, parentName: string) {
    this.routes.flat
      .filter(route => route.name !== name && route.parentName === parentName && !route.invisible)
      .forEach(route => {
        this.expandedRoutes.delete(route.name);
      });
  }
}
