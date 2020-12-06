import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { MSMenu } from '@fs/theme.ng-alain-ms/shared';
import { ConfigStateService, ABP, LocalizationPipe, TreeNode,PermissionService } from '@abp/ng.core'
import { MSProduct } from '@fs/theme.ng-alain-ms/layout';
import { InternalStore } from '@abp/ng.core'
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  ready$ = new BehaviorSubject<boolean>(false);

  constructor(){
  }
  //private readonly store = new InternalStore({} as Environment);

}