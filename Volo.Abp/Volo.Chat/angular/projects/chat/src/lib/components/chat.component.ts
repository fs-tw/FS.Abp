import { ConfigStateService, trackBy } from '@abp/ng.core';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ChatConfigService, ChatMessage } from '@volo/abp.ng.chat/config';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, finalize, takeUntil } from 'rxjs/operators';
import { ChatMessageSide } from '../enums/chat-message-side';
import { ChatContactDto } from '../models/chat-contact-dto';
import { ChatMessageDto } from '../models/chat-message-dto';
import { ConversationService } from '../services/conversation.service';
import { ChatContactsComponent, getContactName } from './chat-contacts.component';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();

@Component({
  selector: 'abp-chat',
  templateUrl: 'chat.component.html',
  styles: [
    `
      .chat-box {
        height: calc(100vh - 390px);
        overflow-y: scroll;
      }

      .message-date {
        position: absolute;
        opacity: 0.35;
        width: 100px;
        top: 1px;
      }

      .message-date.left {
        left: -110px;
        text-align: right;
      }

      .message-date.right {
        right: -110px;
      }
    `,
  ],
})
export class ChatComponent implements AfterViewInit, OnDestroy {
  selectedContact = {} as ChatContactDto;
  unreadMessageCount = 0;
  userMessages = new Map<string, ChatMessageDto[]>();
  chatMessageSide = ChatMessageSide;
  message: string;
  sendOnEnter: boolean;
  loading: boolean;
  pagingLoading: boolean;
  allMessagesLoaded: boolean;

  @ViewChild('chatBox', { static: false })
  chatBoxRef: ElementRef<HTMLDivElement>;

  @ViewChild(ChatContactsComponent, { static: false })
  chatContactsComponent: ChatContactsComponent;

  trackByMessageDate = trackBy<ChatMessageDto>('messageDate');

  destroy$ = new Subject();

  get contactName(): string {
    return getContactName(this.selectedContact || ({} as ChatContactDto));
  }

  get selectedContactMessages(): ChatMessageDto[] {
    return this.userMessages.get(this.selectedContact.userId) || [];
  }

  constructor(
    private conversationService: ConversationService,
    private chatConfigService: ChatConfigService,
    private configState: ConfigStateService
  ) {}

  private listenToChatBoxScroll() {
    fromEvent(this.chatBoxRef.nativeElement, 'scroll')
      .pipe(debounceTime(150), takeUntil(this.destroy$))
      .subscribe(this.onScroll);
  }

  private listenToNewMessages() {
    this.chatConfigService.message$
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ senderUserId, text } = {} as ChatMessage) => {
        if (!this.userMessages.has(senderUserId)) return;

        const isSelected = this.selectedContact.userId === senderUserId;
        this.userMessages.get(senderUserId).push({
          message: text,
          messageDate: new Date(),
          side: ChatMessageSide.Receiver,
          isRead: isSelected,
          readDate: isSelected ? new Date() : null,
        });
        this.scrollToEnd();
      });
  }

  ngAfterViewInit() {
    this.sendOnEnter =
      (
        this.configState.getSetting('Volo.Chat.Messaging.SendMessageOnEnter') || ''
      ).toLowerCase() !== 'false';

    this.listenToChatBoxScroll();
    this.listenToNewMessages();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getConversation(scrollToEnd: boolean) {
    this.allMessagesLoaded = false;
    this.conversationService
      .getConversationByInput({
        skipCount: 0,
        maxResultCount: 50,
        targetUserId: this.selectedContact.userId,
      })
      .subscribe((res) => {
        this.userMessages.set(this.selectedContact.userId, res.messages.reverse());
        if (scrollToEnd) this.scrollToEnd();
        if (this.selectedContact.unreadMessageCount) this.markConversationAsRead();
      });
  }

  send() {
    if (!this.message || this.loading) return;

    this.unreadMessageCount = 0;
    this.loading = true;
    this.conversationService
      .sendMessageByInput({ message: this.message, targetUserId: this.selectedContact.userId })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => {
        this.chatContactsComponent.changeLastMessageOfSelectedContact(this.message);

        if (!this.userMessages.has(this.selectedContact.userId)) {
          this.userMessages.set(this.selectedContact.userId, []);
        }

        this.userMessages.get(this.selectedContact.userId).push({
          message: this.message,
          isRead: true,
          readDate: now,
          messageDate: now,
          side: ChatMessageSide.Sender,
        });

        this.message = '';
        this.scrollToEnd();
      });
  }

  markConversationAsRead() {
    this.conversationService
      .markConversationAsReadByInput({ targetUserId: this.selectedContact.userId })
      .subscribe(() => {
        this.chatContactsComponent.markSelectedContactAsRead();
        this.selectedContact.unreadMessageCount = 0;
        setTimeout(() => (this.unreadMessageCount = 0), 5000);
      });
  }

  sendWithEnter(event: KeyboardEvent) {
    if (!this.sendOnEnter) return;

    event.preventDefault();
    this.send();
  }

  onSelectContact(contact: ChatContactDto) {
    this.selectedContact = contact;
    this.unreadMessageCount = contact.unreadMessageCount;
    this.scrollToEnd();

    if (this.userMessages.has(contact.userId) || !contact.lastMessage) {
      if (contact.unreadMessageCount) this.markConversationAsRead();
      return;
    }
    this.getConversation(true);
  }

  getDateFormat(date: string | Date): string {
    date = new Date(date);
    const messageDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()).valueOf();

    if (messageDay === today) return 'shortTime';

    return 'short';
  }

  scrollToEnd() {
    setTimeout(() => {
      const { offsetTop } = (document.querySelector('.unread-message-count-badge-wrapper') ||
        {}) as HTMLDivElement;

      this.chatBoxRef.nativeElement.scrollTo({
        top: offsetTop ? offsetTop - 60 : this.chatBoxRef.nativeElement.scrollHeight,
      });
    }, 0);
  }

  onScroll = (event: Event) => {
    if (
      this.allMessagesLoaded ||
      this.pagingLoading ||
      !this.selectedContact.lastMessage ||
      this.chatBoxRef.nativeElement.scrollTop > 250 ||
      this.selectedContactMessages.length % 50 !== 0
    ) {
      event.preventDefault();
      return;
    }

    this.pagingLoading = true;
    this.conversationService
      .getConversationByInput({
        skipCount: this.selectedContactMessages.length,
        maxResultCount: 50,
        targetUserId: this.selectedContact.userId,
      })
      .pipe(finalize(() => (this.pagingLoading = false)))
      .subscribe((res) => {
        if (!res.messages.length) {
          this.allMessagesLoaded = true;
          return;
        }
        this.userMessages.get(this.selectedContact.userId).unshift(...res.messages.reverse());
      });
  };
}
