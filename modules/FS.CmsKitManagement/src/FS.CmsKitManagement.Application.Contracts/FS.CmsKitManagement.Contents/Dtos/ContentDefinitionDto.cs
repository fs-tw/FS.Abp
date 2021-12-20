using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;
using AutoFilterer.Attributes;

namespace FS.CmsKitManagement.Contents.Dtos
{
    public partial class ContentDefinitionGetListDto : PagedAndSortedResultRequestDto
    {
        [CompareTo("EntityType")]
        [OperatorComparison(AutoFilterer.Enums.OperatorType.Equal)]
        public string Filter { get; set; }
    }

}
