using AutoFilterer.Attributes;
using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Contents.Dtos
{
    public partial class ContentDefinitionGetListDto : PagedAndSortedResultRequestDto
    {
        [CompareTo("EntityType")]
        [OperatorComparison(AutoFilterer.Enums.OperatorType.Equal)]
        public string Filter { get; set; }
    }

}
