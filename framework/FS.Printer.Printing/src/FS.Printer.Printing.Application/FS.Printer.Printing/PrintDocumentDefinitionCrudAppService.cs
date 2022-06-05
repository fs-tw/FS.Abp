using FS.Printer.Printing.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using System.Linq.Dynamic.Core;

namespace FS.Printer.Printing.Filters
{
    public class PrintDocumentDefinitionFilter : AutoFilterer.Types.FilterBase
    {
        [AutoFilterer.Attributes.CompareTo(
            nameof(PrintDocumentDefinition.Code),
            nameof(PrintDocumentDefinition.DisplayName))]
        [AutoFilterer.Attributes.StringFilterOptions(AutoFilterer.Enums.StringFilterOption.Contains)]
        public string Filter { get; set; }

        [AutoFilterer.Attributes.CompareTo(
            nameof(PrintDocumentDefinition.IsDefault))]
        [AutoFilterer.Attributes.OperatorComparison(AutoFilterer.Enums.OperatorType.Equal)]
        public bool? IsDefault { get; set; }

        public PrintDocumentDefinitionFilter(string filter, bool? isDefault)
        {
            this.Filter = filter;
            this.IsDefault = isDefault;
        }
    }
}

namespace FS.Printer.Printing
{
    public partial class PrintDocumentDefinitionCrudAppService :
        IPrintDocumentDefinitionCrudAppService
    {
        public override async Task<PrintDocumentDefinitionWithDetailsDto> CreateAsync(PrintDocumentDefinitionCreateDto input)
        {
            if (input.Paragraphs == null || input.Margins == null || input.PaperSize == null)
                throw new UserFriendlyException("物件欄位不可為 Null");

            var hasRepeatCodes = (await this.AsyncExecuter.CountAsync((await this._repository.GetQueryableAsync())
                .Where(x => x.Code == input.Code))) > 0;

            if (hasRepeatCodes) throw new UserFriendlyException("已有重複的代碼");

            var hasRepeatParagraphNames = input.Paragraphs
                .GroupBy(x => x.Name)
                .Where(x => x.Count() > 1)
                .Count() > 0;

            if (hasRepeatParagraphNames) throw new UserFriendlyException("有重複的段落名稱");

            return await base.CreateAsync(input);
        }

        public override async Task<PrintDocumentDefinitionWithDetailsDto> UpdateAsync(Guid id, PrintDocumentDefinitionUpdateDto input)
        {
            if (input.Paragraphs == null || input.Margins == null || input.PaperSize == null)
                throw new UserFriendlyException("物件欄位不可為 Null");

            var hasRepeatCodes = (await this.AsyncExecuter.CountAsync((await this._repository.GetQueryableAsync())
                .Where(x => x.Code == input.Code)
                .Where(x => x.Id != id))) > 0;

            if (hasRepeatCodes) throw new UserFriendlyException("已有重複的代碼");

            var hasRepeatParagraphNames = input.Paragraphs
                .GroupBy(x => x.Name)
                .Where(x => x.Count() > 1)
                .Count() > 0;

            if (hasRepeatParagraphNames) throw new UserFriendlyException("有重複的段落名稱");

            return await base.UpdateAsync(id, input);
        }

        protected override async Task<IQueryable<PrintDocumentDefinition>> CreateFilteredQueryAsync(PrintDocumentDefinitionGetListDto input)
        {
            var query = await base.CreateFilteredQueryAsync(input);
            return new Filters.PrintDocumentDefinitionFilter(input.Filter, input.IsDefault).ApplyFilterTo(query);
        }

        protected override IQueryable<PrintDocumentDefinition> ApplySorting(IQueryable<PrintDocumentDefinition> query, PrintDocumentDefinitionGetListDto input)
        {
            var sorting = String.IsNullOrEmpty(input.Sorting) ?
                "CreationTime desc" :
                input.Sorting;

            // Default 置頂
            return query
                .OrderByDescending(x => x.IsDefault)
                .ThenBy(sorting)
                .AsQueryable();
        }

    }
}
