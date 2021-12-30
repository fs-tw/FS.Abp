import {
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import {
    Injectable
  } from '@angular/core';
  import {
    ABP,
    RoutesService,
    TreeNode,
  } from '@abp/ng.core';
  import {
    ActivatedRoute,
    ActivatedRouteSnapshot
  } from '@angular/router';
import { finalize } from 'rxjs/operators';
  
  @Injectable({
    providedIn: 'root',
  })
  export class ApiInterceptor implements HttpInterceptor {
    getSnapshots(node: ActivatedRoute): ActivatedRouteSnapshot[] {
      let result: ActivatedRouteSnapshot[] = [];
      result.push(node.snapshot);
      return result.concat(
        node.children
          .map((c) => this.getSnapshots(c))
          .reduce(function (a, b) {
            return b.concat(a);
          }, [])
      );
    }
  
    constructor(
      private routesService: RoutesService,
      private activatedRoute: ActivatedRoute
    ) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler) {
      return next
        .handle(
          request.clone({
            setHeaders: this.getAdditionalHeaders(request.headers),
          })
        )
        .pipe(finalize(() => {}));
    }
  
    getAdditionalHeaders(existingHeaders?: HttpHeaders) {
      const headers = {} as any;
  
      let snapshots = this.getSnapshots(this.activatedRoute.root).map((x) =>
        x.url.join('/')
      ).filter(x=>!!x);
  
      let searchs = snapshots
        .map((x, i) => {
          return '/'+snapshots.slice(0, snapshots.length - i).join('/');
        })
        .concat([undefined]);
        
      let result: TreeNode<ABP.Route>;
  
      searchs.find((s) => {
        result = this.routesService.find((y) => y.path === s);
        return !!result;
      });
  
      headers['abp-route-name'] = result.name;
      return headers;
    }
  }