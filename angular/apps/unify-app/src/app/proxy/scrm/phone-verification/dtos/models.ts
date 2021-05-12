
export interface CreatePhoneVerificationDto {
  accountId?: string;
  socialServiceId?: string;
  phoneNumber?: string;
  userName?: string;
}

export interface PhoneVerificationDto {
  phoneNumber?: string;
  code?: string;
  accountId?: string;
  socialServiceId?: string;
}
