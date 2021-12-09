using AutoFilterer.Abstractions;
using AutoFilterer.Attributes;
using AutoFilterer.Enums;
using AutoFilterer.Types;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using AutoFiltererSorting = AutoFilterer.Enums.Sorting;

namespace FS.Abp.Application.Dtos
{
    public class FilterRequestDto : FilterBase
    {

    }
    public class SearchResultRequestDto : PaginationFilterBase, ISearchResultRequest
    {
        public int SkipCount { get => (Page - 1) * PerPage; set => Page = value / PerPage + 1; }
        
        public int MaxResultCount { get => PerPage; set => PerPage = value; }

        public string Sorting
        {
            get => base.Sort.IsNullOrWhiteSpace() ? "" : base.Sort + " " + GetAbpStringKeyword(SortBy);
            set => SetSortingByAbpKeyword(value);
        }

        private void SetSortingByAbpKeyword(string keyword)
        {
            if (keyword.IsNullOrWhiteSpace())
                return;
            var splitted = keyword.Split(' ');
            Sort = Pascalize(splitted[0]);
            SortBy = GetSortingFromKeyword(splitted.Length > 0 ? splitted[1] : default);
        }

        private static string GetAbpStringKeyword(AutoFiltererSorting sorting)
        {
            return sorting == AutoFiltererSorting.Descending ? "DESC" : "ASC";
        }

        private static AutoFiltererSorting GetSortingFromKeyword(string keyword)
        {
            return keyword.ToUpper() == "DESC" ? AutoFiltererSorting.Descending : AutoFiltererSorting.Ascending;
        }

        static string Pascalize(string s)
        {
            if (string.IsNullOrEmpty(s))
                return s;

            return char.ToUpper(s[0]) + s.Substring(1);
        }
    }
}
