import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ChatConfigService } from '../services/chat-config.service';

@Component({
  selector: 'abp-chat-icon',
  template: `<div class="position-relative">
    <a routerLink="/chat"
      ><i class="fas fa-envelope fa-lg"></i>
      <span *ngIf="chatConfigService.unreadMessagesCount" class="badge badge-primary">{{
        chatConfigService.unreadMessagesCount
      }}</span></a
    >
  </div>`,
  styles: [
    `
      a {
        color: inherit;
      }

      .badge {
        position: absolute;
        right: -10px;
        top: -8px;
      }
    `,
  ],
})
export class ChatIconComponent implements OnDestroy {
  private subscription = new Subscription();

  constructor(
    public chatConfigService: ChatConfigService,
    private toaster: ToasterService,
    private router: Router
  ) {
    this.listenToMessages();
    this.listenToRouterEvents();
  }

  private listenToMessages() {
    this.subscription.add(
      this.chatConfigService.message$
        .pipe(filter(() => this.router.url !== '/chat'))
        .subscribe((message) => {
          const { senderName, senderSurname, senderUsername, text } = message;
          const sender = `${
            senderName ? senderName + (' ' + senderSurname || '') : senderUsername
          }`;
          const toasterMessage = `<strong>${sender}</strong>: ${
            text.length > 50 ? text.substring(0, 49) + '...' : text
          }`;
          this.chatConfigService.unreadMessagesCount++;
          this.toaster.info(toasterMessage, 'Chat::NewChatMessage', {
            tapToDismiss: true,
          });
        })
    );
  }

  private listenToRouterEvents() {
    this.subscription.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd && event.url === '/chat'))
        .subscribe(() => (this.chatConfigService.unreadMessagesCount = 0))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
