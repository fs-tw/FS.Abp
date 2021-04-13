# DEFAULT_{Nanme}_ENTITY_PROPS
`sort`: Table是否顯示排序  
`name`: 欄位名稱，若需合併顯示加`_` 區別

``` javascript
export const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany<Fs.Cms.Posts.Dtos.PostDto>(
  [
    //基本
    {
      type: ePropType.String,
      name: 'title',
      displayName: 'Cms::FS.Post.Title',
      sortable: false,
      // columnWidth: 160,
    },
    //合併欄位顯示
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
     }
    },
   ]
```