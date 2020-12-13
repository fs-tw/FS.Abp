import { takeUntilDestroy, trackBy } from '@abp/ng.core';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ChatConfigService, ChatMessage } from '@volo/abp.ng.chat/config';
import { ChatMessageSide } from '../enums/chat-message-side';
import { ChatContactDto } from '../models/chat-contact-dto';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'abp-chat-contacts',
  templateUrl: 'chat-contacts.component.html',
  styles: [
    `
      .messages-box {
        overflow-y: scroll;
        max-height: calc(100vh - 254.34px);
      }
    `,
  ],
})
export class ChatContactsComponent implements OnInit, OnDestroy {
  @Output()
  selected = new EventEmitter<ChatContactDto>();
  allContacts: ChatContactDto[] = [];
  selectedContact = {} as ChatContactDto;
  filter = '';

  getContactName = getContactName;
  trackByUserId = trackBy<ChatContactDto>('userId');

  get contacts(): ChatContactDto[] {
    return this.allContacts
      .filter((contact) => contact.lastMessage)
      .sort((a, b) =>
        new Date(a.lastMessageDate).valueOf() > new Date(b.lastMessageDate).valueOf() ? -1 : 1
      );
  }

  get otherContacts(): ChatContactDto[] {
    return this.allContacts.filter((contact) => !contact.lastMessage);
  }

  constructor(
    private contactService: ContactService,
    private chatConfigService: ChatConfigService
  ) {}

  private listenToNewMessages() {
    this.chatConfigService.message$
      .pipe(takeUntilDestroy(this))
      .subscribe(
        ({ senderName, senderSurname, senderUserId, senderUsername, text } = {} as ChatMessage) => {
          const index = this.allContacts.findIndex((cont) => cont.userId === senderUserId);

          const contact = {
            userId: senderUserId,
            username: senderUsername,
            name: senderName,
            surname: senderSurname,
            lastMessage: text,
            unreadMessageCount: 1,
            lastMessageDate: new Date(),
            lastMessageSide: ChatMessageSide.Receiver,
          };

          if (index > -1) {
            this.allContacts[index] = {
              ...contact,
              unreadMessageCount:
                this.selectedContact.userId === this.allContacts[index].userId
                  ? 0
                  : this.allContacts[index].unreadMessageCount + 1,
            };
          } else if (!this.filter) {
            this.allContacts.push(contact);
          }
        }
      );
  }

  ngOnInit() {
    this.get(() => {
      this.selectContact(this.allContacts.length ? this.allContacts[0] : ({} as ChatContactDto));
      this.listenToNewMessages();
    });
  }

  ngOnDestroy() {}

  get(onSuccess?: Function) {
    this.contactService
      .getContactsByInput({ includeOtherContacts: !!this.filter, filter: this.filter })
      .subscribe((res) => {
        if (!res.length) return;

        this.allContacts = res;
        if (onSuccess) onSuccess();
      });
  }

  selectContact(contact: ChatContactDto) {
    this.selectedContact = contact;
    this.selected.emit(contact);
  }

  changeLastMessageOfSelectedContact(message: string) {
    this.selectedContact.lastMessage = message;
    this.selectedContact.lastMessageDate = new Date();

    const index = this.allContacts.findIndex(
      (contact) => contact.userId === this.selectedContact.userId
    );

    this.allContacts[index] = this.selectedContact;
  }

  markSelectedContactAsRead() {
    this.selectedContact.unreadMessageCount = 0;
  }
}

export function getContactName({ name, surname, username }: ChatContactDto) {
  if (!name && !surname) return username;

  return `${name || ''} ${surname || ''}`;
}
