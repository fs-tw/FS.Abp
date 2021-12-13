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
    public class FilterRequestDtoMetadata : FS.Abp.Metadata.IMetadata<FilterBase>
    {
        [BindNever]
        [System.Text.Json.Serialization.JsonIgnore]
        public CombineType CombineWith { get; set; }
    }
    public class SearchResultRequestDtoMetadata : FS.Abp.Metadata.IMetadata<PaginationFilterBase>
    {
        [BindNever]
        [System.Text.Json.Serialization.JsonIgnore]
        public int Page { get; set; }

        [BindNever]
        [System.Text.Json.Serialization.JsonIgnore]
        public int PerPage { get; set; }

        [BindNever]
        [System.Text.Json.Serialization.JsonIgnore]
        public CombineType CombineWith { get; set; }

        [BindNever]
        [System.Text.Json.Serialization.JsonIgnore]
        public string Sort { get; set; }

        [BindNever]
        [System.Text.Json.Serialization.JsonIgnore]
        public AutoFiltererSorting SortBy { get; set; }
    }
}
