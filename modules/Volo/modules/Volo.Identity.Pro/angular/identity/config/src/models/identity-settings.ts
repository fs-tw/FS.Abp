export interface Settings {
  password: Password;
  lockout: Lockout;
  signIn: SignIn;
  user: User;
}

export interface Lockout {
  allowedForNewUsers: boolean;
  lockoutDuration: number;
  maxFailedAccessAttempts: number;
}

export interface Password {
  requiredLength: number;
  requiredUniqueChars: number;
  requireNonAlphanumeric: boolean;
  requireLowercase: boolean;
  requireUppercase: boolean;
  requireDigit: boolean;
}

export interface SignIn {
  requireConfirmedEmail: boolean;
  enablePhoneNumberConfirmation: boolean;
  requireConfirmedPhoneNumber: boolean;
}

export interface User {
  isUserNameUpdateEnabled: boolean;
  isEmailUpdateEnabled: boolean;
}
