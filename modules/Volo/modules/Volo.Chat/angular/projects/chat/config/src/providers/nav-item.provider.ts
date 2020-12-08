import { NavItemsService } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { ChatIconComponent } from '../components/chat-icon.component';
import { eChatPolicyNames } from '../enums/policy-names';

export const CHAT_NAV_ITEM_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureNavItems, deps: [NavItemsService], multi: true },
];

export function configureNavItems(navItems: NavItemsService) {
  return () => {
    navItems.addItems([
      {
        id: 'Chat.ChatIconComponent',
        requiredPolicy: eChatPolicyNames.Messaging,
        component: ChatIconComponent,
        order: 99.99,
      },
    ]);
  };
}
