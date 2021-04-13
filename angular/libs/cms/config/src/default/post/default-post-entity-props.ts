import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { of } from 'rxjs';
import * as fns from 'date-fns';

export const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Posts.Dtos.PostDto>(
  [
    {
      type: ePropType.Number,
      name: 'sequence',
      displayName: 'Cms::FS.Post.Sequence',
      sortable: false,
      columnWidth: 40
    },
    {
      type: ePropType.String,
      name: 'disable',
      displayName: 'Cms::FS.Post.Disable',
      sortable: false,
      columnWidth: 40,
      valueResolver: (data) => {
        let text = '';
        if (data.record.disable) text = '是';
        else text = '否';
        return of(text);
      },
    },
    {
      type: ePropType.String,
      name: 'title',
      displayName: 'Cms::FS.Post.Title',
      sortable: false,
      // columnWidth: 160,
    },
    {
      type: ePropType.String,
      name: 'displaymode',
      displayName: 'Cms::FS.Post.DisplayMode',
      sortable: false,
      columnWidth: 60,
      valueResolver: (data) => {
        let text = '';
        switch (data.record.displayMode) {
          case Fs.Cms.Posts.DisplayMode.Content:
            text = '內文';
            break;
          case Fs.Cms.Posts.DisplayMode.Link:
            text = '連結';
            break;
          case Fs.Cms.Posts.DisplayMode.HtmlRaw:
            text = 'Html標籤';
            break;
          default:
            text = '未知';
            break;

        }
        return of(text);
      },
    },
    {
      type: ePropType.String,
      name: '_starttime+endtime',
      displayName: 'Cms::FS.Message:StartEndDate',
      sortable: false,
      columnWidth: 100,
      valueResolver: (data) => {
        let result = '';let start = '';let end = '';
        
        if (data.record.startTime)
          start = fns.format(new Date(data.record.startTime), 'yyyy-MM-dd');
        if (data.record.endTime)
          end = fns.format(new Date(data.record.endTime), 'yyyy-MM-dd');
        result = `${start}<br>${end}`
        return of(result);
      },
    }
  ]
);
