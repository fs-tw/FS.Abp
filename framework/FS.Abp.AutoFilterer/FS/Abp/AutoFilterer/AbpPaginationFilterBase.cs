using AutoFilterer.Attributes;
using AutoFilterer.Enums;
using AutoFilterer.Types;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities.Auditing;
using AutoFiltererSorting = AutoFilterer.Enums.Sorting;

namespace FS.Abp.AutoFilterer
{
    [PossibleSortings(typeof(AuditedAggregateRoot))]
    public class AbpPaginationFilterBase : PaginationFilterBase, IPagedAndSortedResultRequest
    {
        public AbpPaginationFilterBase()
        {
            // As default.
            Sort = nameof(AuditedAggregateRoot.CreationTime);
            SortBy = AutoFiltererSorting.Descending;
        }

        public int SkipCount { get => (Page - 1) * PerPage; set => Page = value / PerPage + 1; }
        public int MaxResultCount { get => PerPage; set => PerPage = value; }


        [IgnoreFilter]
        public override int Page { get => base.Page; set => base.Page = value; }

        [IgnoreFilter]
        public override int PerPage { get => base.PerPage; set => base.PerPage = value; }

        public string Sorting
        {
            get => base.Sort + " " + GetAbpStringKeyword(SortBy);
            set => SetSortingByAbpKeyword(value);
        }

        private void SetSortingByAbpKeyword(string keyword)
        {
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
            return keyword == "DESC" ? AutoFiltererSorting.Descending : AutoFiltererSorting.Ascending;
        }

        static string Pascalize(string s)
        {
            if (string.IsNullOrEmpty(s))
                return s;

            return char.ToUpper(s[0]) + s.Substring(1);
        }
    }
}
