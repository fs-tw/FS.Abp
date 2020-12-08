using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.DependencyInjection;

namespace FS.Cms.Tags
{
   
    public partial class TagAppService : CmsAppService, ITagAppService
    {
        private ICodingStore _codingStore;
        public ICodingStore CodingStore => LazyGetRequiredService(ref _codingStore);
    }
}
