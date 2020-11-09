using FS.Abp.Application.Dtos;
using FS.Cms.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts.Dtos
{
    public partial class PostGetListDto
    {
        public Guid? BlogCodeId { get; set; }
    }
    [Obsolete]
    public class PostsWithBlogCodeDto: PagedAndSortedResultRequestDto, ISearchResultRequest
    {
        public string Fields { get; set; }
        public string Value { get; set; }
        public Guid? BlogCodeId { get; set; }
    }

    public class UploadImageInput
    {
        public List<string> OriginFiles { get; set; }
        public List<string> DeleteFiles { get; set; }
        public string IsCoverName { get; set; }
    }

    public class CmsImageModel 
    {
        public List<CmsImageFieldDto> ImgaeField { get; set; }
        public UploadImageInput UploadImageInput { get; set; }
    }
}
