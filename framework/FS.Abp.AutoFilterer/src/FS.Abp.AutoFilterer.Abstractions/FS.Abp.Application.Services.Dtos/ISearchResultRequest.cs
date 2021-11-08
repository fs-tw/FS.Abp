using AutoFilterer.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Application.Dtos
{
    public interface ISearchResultRequest : Volo.Abp.Application.Dtos.IPagedAndSortedResultRequest
    {
        string Sort { get; set; }
    }
}
