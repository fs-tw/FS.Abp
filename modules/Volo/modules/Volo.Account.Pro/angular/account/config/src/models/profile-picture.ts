import { ProfilePictureType } from '../enums/profile-picture-type';

export interface ProfilePictureInput {
  type: ProfilePictureType;
  imageContent?: string;
}

export interface ProfilePictureSourceDto {
  type: ProfilePictureType;
  source: string;
  fileContent: string;
}
