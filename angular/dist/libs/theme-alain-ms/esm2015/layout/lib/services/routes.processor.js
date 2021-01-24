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
        return this.routesService.find((x) => this.formatParams(x.path) === this.CurrentUrl);
    }
    get NavConfigs() {
        let result = [];
        let node = this.CurrentRoute;
        if (!node)
            return [];
        pushNode(node);
        while (!!node.parent) {
            node = node.parent;
            pushNode(node);
        }
        return result;
        function pushNode(node) {
            if (!!node && !!node['navConfig']) {
                result.push(node);
            }
        }
    }
    get CurrentNavConfig() {
        let result = {
            parentName: null,
            name: this.CurrentRoute.parentName,
        };
        let stack = this.NavConfigs;
        while (stack.length !== 0) {
            let node = stack.pop();
            result = Object.assign(Object.assign({}, result), node['navConfig']);
        }
        return result;
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
        this.routesService.tree
            .filter((x) => !this.routesService.hide(x))
            .find((x) => {
            let result = this.searchRoute(x, nav);
            if (!!result)
                target = result;
        });
        if (!!target) {
            pageNavs.push(...this.transMenu(target));
        }
        return pageNavs;
    }
    searchRoute(element, nav) {
        let hasChildren = !!element.children && element.children.length > 0;
        let specifyParent = this.formatParams(nav.parentName);
        let isSpecifyParent = !!specifyParent;
        if (!isSpecifyParent && element.name == nav.name) {
            return element;
        }
        if (isSpecifyParent && element.name === specifyParent && hasChildren) {
            let target = element.children.find((x) => x.name === nav.name);
            if (!!target)
                return target;
        }
        if (element.children != null) {
            var i;
            var result = null;
            for (i = 0; result == null && i < element.children.length; i++) {
                result = this.searchRoute(element.children[i], nav);
            }
            return result;
        }
    }
    transMenu(first) {
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
            if (((_a = second === null || second === void 0 ? void 0 : second.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                left.children = this.transMenu(second);
            }
            result.push(left);
        });
        return result;
    }
    formatParams(text) {
        if (!text)
            return '';
        let regexp = /:([^(:\/\-\ )]+)/g;
        let result = text;
        let match = text.match(regexp);
        if (!!match) {
            text.match(regexp).forEach((i) => {
                let parameter = i.substr(1);
                let itemId = this.getParamKeyValue(parameter);
                result = result.replace(':' + parameter, itemId);
            });
        }
        return result;
    }
    getParamKeyValue(paramKey) {
        //let usedRouterState = routerState ? routerState : this.routerState;
        let targetRouter = this.searchRouter(this.RouterState.root, paramKey);
        if (targetRouter)
            return targetRouter.params[paramKey];
        return null;
    }
    searchRouter(router, property) {
        if (property in router.params) {
            return router;
        }
        else if (router.children != null) {
            var i;
            var result = null;
            for (i = 0; result == null && i < router.children.length; i++) {
                result = this.searchRouter(router.children[i], property);
            }
            return result;
        }
        return null;
    }
}
//# sourceMappingURL=routes.processor.js.map