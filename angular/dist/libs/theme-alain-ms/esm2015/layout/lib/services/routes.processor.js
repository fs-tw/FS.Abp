import { RoutesService as AbpRoutesService, LocalizationPipe, } from '@abp/ng.core';
import { map } from 'rxjs/operators';
export class RoutesProcessor {
    constructor(injector) {
        this.injector = injector;
    }
    get routesService() {
        return this.injector.get(AbpRoutesService);
    }
    get localizationPipe() {
        return this.injector.get(LocalizationPipe);
    }
    get CurrentUrl() {
        var current_url = this.RouterState.url.split('?')[0];
        return decodeURI(current_url);
    }
    get CurrentRoute() {
        const result = this.routesService.find((x) => this.formatParams(x.path) === this.CurrentUrl);
        return result;
    }
    MergeRouteData(prop, defaultValue) {
        let result = defaultValue;
        let targetRoutes = [];
        let route = this.CurrentRoute;
        if (!route)
            return [];
        pushNode(route);
        while (!!route.parent) {
            route = route.parent;
            pushNode(route);
        }
        let stack = targetRoutes;
        while (stack.length !== 0) {
            let node = stack.pop();
            result = Object.assign(Object.assign({}, result), node[prop]);
        }
        return result;
        function pushNode(node) {
            if (!!node && node.hasOwnProperty(prop)) {
                targetRoutes.push(node);
            }
        }
    }
    get Category$() {
        return this.routesService.visible$.pipe(map((x) => {
            if (x.length === 0)
                return;
            return x
                .filter((y) => y.name === "AbpUiNavigation::Menu:Administration" /* Administration */ &&
                !this.routesService.hide(y))
                .map((r) => r.children)
                .reduce((a, b) => a.concat(b))
                .map((r) => {
                let category = {
                    id: r.name,
                    name: this.localizationPipe.transform(r.name),
                    icon: r.iconClass,
                    products: [],
                    link: r.path,
                };
                category.products = r.children
                    .filter((c) => !this.routesService.hide(c))
                    .map((c) => {
                    let product = {
                        productId: c.name,
                        name: this.localizationPipe.transform(c.name),
                        link: c.path,
                        icon: c.iconClass,
                        id: c.name,
                    };
                    return product;
                });
                return category;
            });
        }));
    }
    GetPageNavs(routerState, nav) {
        if (!this.CurrentRoute)
            return [];
        let pageNavs = [];
        this.RouterState = routerState;
        let target;
        target = this.routesService.find((x) => x.name == nav.name);
        if (!!target) {
            pageNavs.push(...this.transMenu(target));
        }
        return pageNavs;
    }
    transMenu(first, recursive = true) {
        let result = [];
        first.children
            .filter((r) => !this.routesService.hide(r))
            .forEach((second) => {
            var _a;
            let left = {
                text: second.displayName || this.localizationPipe.transform(second.name),
                link: this.formatParams(second.path),
                icon: second.iconClass,
                children: [],
            };
            if (((_a = second === null || second === void 0 ? void 0 : second.children) === null || _a === void 0 ? void 0 : _a.length) > 0 && recursive) {
                left.children = this.transMenu(second, false);
            }
            result.push(left);
        });
        return result;
    }
    formatParams(text, router = this.RouterState.root) {
        if (!text)
            return '';
        let regexp = /:([^(:\/\-\ )]+)/g;
        let result = text;
        let match = text.match(regexp);
        if (!!match) {
            text.match(regexp).forEach((i) => {
                var _a;
                let parameter = i.substr(1);
                let itemId = (_a = this.findRouter((x) => parameter in x.params, [router])) === null || _a === void 0 ? void 0 : _a.params[parameter];
                result = result.replace(':' + parameter, itemId);
            });
        }
        return result;
    }
    findRouter(predicate, routers) {
        return routers.reduce((acc, node) => acc
            ? acc
            : predicate(node)
                ? node
                : this.findRouter(predicate, node.children), null);
    }
}
//# sourceMappingURL=routes.processor.js.map