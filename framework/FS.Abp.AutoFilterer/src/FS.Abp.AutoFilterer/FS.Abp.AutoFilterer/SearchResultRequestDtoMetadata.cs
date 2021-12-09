using AutoFilterer.Abstractions;
using AutoFilterer.Attributes;
using AutoFilterer.Enums;
using AutoFilterer.Types;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using AutoFiltererSorting = AutoFilterer.Enums.Sorting;

namespace FS.Abp.Application.Dtos
{
    public class FilterRequestDtoMetadata : FS.Abp.Metadata.IMetadata<FilterRequestDto>
    {
        [BindNever]
        public CombineType CombineWith { get; set; }
    }
    public class SearchResultRequestDtoMetadata : FS.Abp.Metadata.IMetadata<SearchResultRequestDto>
    {
        [BindNever]
        public int Page { get; set; }
        [BindNever]
        public int PerPage { get; set; }
        [BindNever]
        public CombineType CombineWith { get; set; }
        [BindNever]
        public string Sort { get; set; }
        [BindNever]
        public AutoFiltererSorting SortBy { get; set; }
    }
}
