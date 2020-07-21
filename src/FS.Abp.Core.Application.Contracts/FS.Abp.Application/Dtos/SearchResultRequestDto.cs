using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.Application.Dtos
{

    public class SearchResultRequestDto : PagedAndSortedResultRequestDto, ISearchResultRequest
    {
        public string Fields { get; set; }
        public string Value { get; set; }
    }
}
