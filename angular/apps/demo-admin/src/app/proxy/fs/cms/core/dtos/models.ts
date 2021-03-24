
export interface ResourceDto {
  fileId?: string;
  no?: string;
  default: boolean;
  sequence: number;
  properties: Record<string, string>;
}
