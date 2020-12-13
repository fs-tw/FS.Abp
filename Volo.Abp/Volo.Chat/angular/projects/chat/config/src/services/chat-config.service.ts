import {
  ApplicationConfiguration,
  ConfigStateService,
  EnvironmentService,
  PermissionService,
  RestService,
} from '@abp/ng.core';
import { NavItemsService } from '@abp/ng.theme.shared';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const permission = 'Chat.Messaging';

export interface ChatMessage {
  senderUserId: string;
  senderUsername: string;
  senderName: string;
  senderSurname: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatConfigService {
  apiName = 'Chat';
  conectedUserId: string;
  connection: signalR.HubConnection;
  message$ = new Subject<ChatMessage>();
  unreadMessagesCount = 0;

  get isChatEnabled(): boolean {
    return (this.configState.getFeature('Chat.Enable') || '').toLowerCase() !== 'false';
  }

  get signalRUrl() {
    const { apis } = this.environmentService.getEnvironment();

    return apis[this.apiName]?.signalRUrl || apis[this.apiName]?.url || apis.default.url;
  }

  constructor(
    private restService: RestService,
    private router: Router,
    private store: Store,
    private oAuthService: OAuthService,
    private navItems: NavItemsService,
    private permissionService: PermissionService,
    private configState: ConfigStateService,
    private environmentService: EnvironmentService
  ) {
    this.listenToAppConfig();
  }

  private listenToAppConfig() {
    this.configState
      .createOnUpdateStream((state) => state)
      .subscribe(() => {
        const currentUser = this.configState.getOne(
          'currentUser'
        ) as ApplicationConfiguration.CurrentUser;

        if (!this.isChatEnabled) {
          this.toggleChat();
          return;
        }

        if (!currentUser.isAuthenticated || !this.permissionService.getGrantedPolicy(permission)) {
          if (this.connection) this.connection.stop();
          return;
        }

        this.initSignalR(currentUser);
        this.setTotalUnreadMessageCount();
      });
  }

  private toggleChat() {
    if (!this.isChatEnabled && this.connection) this.connection.stop();
    this.navItems.patchItem('Chat.ChatIconComponent', { visible: () => this.isChatEnabled });
  }

  private initSignalR(currentUser: ApplicationConfiguration.CurrentUser) {
    if (this.conectedUserId === currentUser.id) return;
    if (this.connection) this.connection.stop();

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.signalRUrl}/signalr-hubs/chat`, {
        accessTokenFactory: () => this.oAuthService.getAccessToken(),
      })
      .build();

    this.connection.on('ReceiveMessage', this.handleMessage);

    this.connection
      .start()
      .then(() => {
        this.conectedUserId = currentUser.id;
      })
      .catch((err) => {
        return console.error(err.toString());
      });
  }

  private handleMessage = (message: ChatMessage) => {
    this.message$.next(message);
  };

  setTotalUnreadMessageCount() {
    if (this.router.url === '/chat') return;

    this.restService
      .request<null, number>(
        { url: '/api/chat/contact/total-unread-message-count', method: 'GET' },
        { apiName: this.apiName }
      )
      .subscribe((count) => (this.unreadMessagesCount = count));
  }
}
