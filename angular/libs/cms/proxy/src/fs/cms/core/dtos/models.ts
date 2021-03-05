
export interface CmsFileFieldDto {
  title?: string;
  url?: string;
  size?: string;
}

export interface CmsImageFieldDto {
  title?: string;
  url?: string;
  width: number;
  height: number;
  isCover: boolean;
}
