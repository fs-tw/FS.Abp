using FS.Abp.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts.Dtos
{
    public class PostsWithBlogCodeDto: PagedAndSortedResultRequestDto, ISearchResultRequest
    {
        public string Fields { get; set; }
        public string Value { get; set; }
        public Guid BlogCodeId { get; set; }
    }

    public class UploadImageInput
    {
        public List<string> OriginFiles { get; set; }
        public List<string> DeleteFiles { get; set; }
    }
}
