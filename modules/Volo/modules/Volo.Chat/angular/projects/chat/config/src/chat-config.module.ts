import { CoreModule, noop } from '@abp/ng.core';
import { ModuleWithProviders, NgModule, APP_INITIALIZER } from '@angular/core';
import { ChatIconComponent } from './components/chat-icon.component';
import { CHAT_NAV_ITEM_PROVIDERS } from './providers/nav-item.provider';
import { CHAT_ROUTE_PROVIDERS } from './providers/route.provider';
import { ChatConfigService } from './services/chat-config.service';
import { OAuthService } from 'angular-oauth2-oidc';

@NgModule({
  imports: [CoreModule],
  declarations: [ChatIconComponent],
  entryComponents: [ChatIconComponent],
})
export class ChatConfigModule {
  static forRoot(): ModuleWithProviders<ChatConfigModule> {
    return {
      ngModule: ChatConfigModule,
      providers: [
        CHAT_ROUTE_PROVIDERS,
        CHAT_NAV_ITEM_PROVIDERS,
        {
          provide: APP_INITIALIZER,
          deps: [ChatConfigService, OAuthService],
          multi: true,
          useFactory: noop,
        },
      ],
    };
  }
}
