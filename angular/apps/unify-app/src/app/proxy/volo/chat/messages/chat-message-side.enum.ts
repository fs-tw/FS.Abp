import { mapEnumToOptions } from '@abp/ng.core';

export enum ChatMessageSide {
  Sender = 1,
  Receiver = 2,
}

export const chatMessageSideOptions = mapEnumToOptions(ChatMessageSide);
