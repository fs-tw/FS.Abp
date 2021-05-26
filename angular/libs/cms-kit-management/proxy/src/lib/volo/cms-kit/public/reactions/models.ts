
export interface ReactionDto {
  name?: string;
  displayName?: string;
}

export interface ReactionWithSelectionDto {
  reaction: ReactionDto;
  count: number;
  isSelectedByCurrentUser: boolean;
}
