import { ApplicationConfiguration } from '@abp/ng.core';

export namespace ThemeLepton {
  export interface CurrentUserImageComponentInputs {
    readonly currentUser?: ApplicationConfiguration.CurrentUser;
    readonly classes: string;
  }
}
