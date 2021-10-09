﻿using AutoFilterer.Types;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.AutoFilterer
{
    public class AbpFilterBase : FilterBase, IPagedAndSortedResultRequest
    {
        public int SkipCount { get; set; }
        public int MaxResultCount { get; set; }
        public string Sorting { get; set; }
    }
}
