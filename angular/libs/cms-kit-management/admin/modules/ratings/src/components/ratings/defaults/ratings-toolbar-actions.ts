import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export const RATINGS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
    Volo.CmsKit.Public.Ratings.RatingDto[]
>([
]);
