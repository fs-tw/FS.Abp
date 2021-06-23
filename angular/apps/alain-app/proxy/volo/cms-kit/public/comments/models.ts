
export interface CmsUserDto {
  id?: string;
  userName?: string;
  name?: string;
  surname?: string;
}

export interface CommentDto {
  id?: string;
  entityType?: string;
  entityId?: string;
  text?: string;
  repliedCommentId?: string;
  creatorId?: string;
  creationTime?: string;
  author: CmsUserDto;
}

export interface CommentWithDetailsDto {
  id?: string;
  entityType?: string;
  entityId?: string;
  text?: string;
  creatorId?: string;
  creationTime?: string;
  replies: CommentDto[];
  author: CmsUserDto;
}

export interface CreateCommentInput {
  text: string;
  repliedCommentId?: string;
}

export interface UpdateCommentInput {
  text: string;
}
