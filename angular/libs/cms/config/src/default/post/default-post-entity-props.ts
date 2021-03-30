import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { of } from 'rxjs';
import * as fns from 'date-fns';

export const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Posts.Dtos.PostDto>(
  [
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
        if (data.record.displayMode == Fs.Cms.Posts.DisplayMode.Content)
          text = '內文';
        else text = '連結';
        return of(text);
      },
    },
    {
      type: ePropType.String,
      name: 'starttime',
      displayName: 'Cms::FS.Post.StartTime',
      sortable: false,
      columnWidth: 100,
      valueResolver: (data) => {
        let date = '';
        if (data.record.startTime)
          date = fns.format(new Date(data.record.startTime), 'yyyy-MM-dd');
        return of(date);
      },
    },
    {
      type: ePropType.String,
      name: 'endtime',
      displayName: 'Cms::FS.Post.EndTime',
      sortable: false,
      columnWidth: 100,
      valueResolver: (data) => {
        let date = '';
        if (data.record.endTime)
          date = fns.format(new Date(data.record.endTime), 'yyyy-MM-dd');
        return of(date);
      },
    },
    {
      type: ePropType.String,
      name: 'disable',
      displayName: 'Cms::FS.Post.Disable',
      sortable: false,
      columnWidth: 60,
      valueResolver: (data) => {
        let text = '';
        if (data.record.disable) text = '是';
        else text = '否';
        return of(text);
      },
    }
  ]
);
