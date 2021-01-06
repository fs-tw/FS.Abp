
export interface BlogCreateInput {
  enable: boolean;
  displayName: string;
  description: string;
  sequence: number;
  url: string;
  listStyle: string;
  iconUrl: string;
}

export interface BlogDto {
  codesId: string;
  displayName: string;
  description: string;
  enable: boolean;
  sequence: number;
  url: string;
  listStyle: string;
  iconUrl: string;
}

export interface BlogUpdateInput {
  enable: boolean;
  displayName: string;
  description: string;
  sequence: number;
  url: string;
  listStyle: string;
  iconUrl: string;
}

export interface PutStorageLockDto {
  setLock: boolean;
}

export interface StorageDto {
  id: string;
  fileName: string;
  fileUrl: string;
  creationTime: string;
  fileSizeStr: string;
  isLock: boolean;
  lockUserId: string;
  userName: string;
}

export interface StorageLockDto {
  isLock: boolean;
}
