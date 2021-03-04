
export interface EmailSettingsDto {
  defaultFromAddress?: string;
  defaultFromDisplayName?: string;
  smtp: SmtpDto;
}

export interface EmailSettingsGetDto {
  providerName?: string;
  providerKey?: string;
}

export interface SmtpDto {
  host?: string;
  port: number;
  userName?: string;
  password?: string;
  domain?: string;
  enableSsl: boolean;
  useDefaultCredentials: boolean;
}
