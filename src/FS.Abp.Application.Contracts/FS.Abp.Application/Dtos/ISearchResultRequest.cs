using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Application.Dtos
{
    public enum SearchMode
    {
        Contains = 0,
        Equal = 1
    }
    public interface ISearchResultRequest
    {
        SearchMode Mode { get; set; }
        string Fields { get; set; }
        string Value { get; set; }
    }
}
