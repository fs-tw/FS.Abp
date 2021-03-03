using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Application.Dtos
{
    public interface ISearchResultRequest
    {
        string Fields { get; set; }
        string Value { get; set; }
    }
}
