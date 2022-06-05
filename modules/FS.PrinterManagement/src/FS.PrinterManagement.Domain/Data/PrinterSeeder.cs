using FS.Abp.Npoi.Mapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.Domain.Services;
using System.Linq;
using Volo.Abp.Uow;

namespace FS.Printer.Data
{
    public class PrinterSeeder : DomainService, Volo.Abp.Data.IDataSeeder
    {
        protected IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        protected Printing.IPrintingStore PrintingStore => this.LazyServiceProvider.LazyGetRequiredService<Printing.IPrintingStore>();

        public class PrintDocumentDefinitionInfo
        {
            public string PrinterName { get; set; }
            public string Code { get; set; }
            public string DisplayName { get; set; }
            public string Description { get; set; }

            // Margins
            public int MarginBottom { get; set; }
            public int MarginLeft { get; set; }
            public int MarginRight { get; set; }
            public int MarginTop { get; set; }

            // PaperSize
            public int PaperWidth { get; set; }
            public int PaperHeight { get; set; }
        }

        public class ParagraphInfo
        {
            public string Code { get; set; }
            public string Name { get; set; }
            public string Content { get; set; }
            public int PointX { get; set; }
            public int PointY { get; set; }
            public string DrawMethod { get; set; }
            public int FontSize { get; set; }
            public string FontType { get; set; }
        }

        [UnitOfWork]
        public virtual async Task SeedAsync(DataSeedContext context)
        {

            await processDefaultPrintsAsync();
            await processPrintsAsync();

            async Task processDefaultPrintsAsync()
            {
                string fileName = "Files/default_printer.xlsx";
                string printDocumentDefinitionSheetName = "PrintDocumentDefinition";
                string paragraphSheetName = "Paragraph";

                await this.processPrintDocumentDefinitionAsync(
                    fileName,
                    printDocumentDefinitionSheetName,
                    paragraphSheetName,
                    true);
            }
            async Task processPrintsAsync()
            {
                string fileName = "Files/printer.xlsx";
                string printDocumentDefinitionSheetName = "PrintDocumentDefinition";
                string paragraphSheetName = "Paragraph";

                await this.processPrintDocumentDefinitionAsync(
                    fileName,
                    printDocumentDefinitionSheetName,
                    paragraphSheetName,
                    false);
            }
            
        }

        private async Task processPrintDocumentDefinitionAsync(
            string fileName, 
            string printDocumentDefinitionSheetName, 
            string paragraphSheetName,
            bool isDefault)
        {
            var existedDatasCount = await this.AsyncExecuter.CountAsync(
                    (await this.PrintingStore.PrintDocumentDefinition.GetQueryableAsync())
                    .Where(x => x.IsDefault == isDefault));

            if (existedDatasCount > 0)
                return;

            var PrintDocumentDefinitionInfoList = VirtualFileNpoiReader.Read<PrintDocumentDefinitionInfo>(fileName, printDocumentDefinitionSheetName);
            var ParagraphInfoList = VirtualFileNpoiReader.Read<ParagraphInfo>(fileName, paragraphSheetName);

            List<Printing.PrintDocumentDefinition> printDocumentDefinitionList = new List<Printing.PrintDocumentDefinition>();
            foreach (var item in PrintDocumentDefinitionInfoList)
            {
                Printing.PaperSize paperSize = new Printing.PaperSize()
                {
                    PaperName = "Customer",
                    Width = item.PaperWidth,
                    Height = item.PaperHeight
                };

                Printing.Margins margins = new Printing.Margins()
                {
                    Bottom = item.MarginBottom,
                    Left = item.MarginLeft,
                    Top = item.MarginTop,
                    Right = item.MarginRight
                };

                List<Printing.Paragraph> paragraphList = new List<Printing.Paragraph>();
                foreach (var paragraphinfo in ParagraphInfoList.Where(x => x.Code == item.Code).ToList())
                {
                    Printing.Paragraph paragraph = new Printing.Paragraph()
                    {
                        Name = paragraphinfo.Name,
                        Content = paragraphinfo.Content,
                        PointX = paragraphinfo.PointX,
                        PointY = paragraphinfo.PointY,
                        DrawMethod = (Printing.DrawMethod)Enum.Parse(typeof(Printing.DrawMethod), paragraphinfo.DrawMethod, false),
                        FontSize = paragraphinfo.FontSize,
                        FontType = paragraphinfo.FontType
                    };
                    paragraphList.Add(paragraph);
                }


                Printing.PrintDocumentDefinition printDocumentDefinition = new Printing.PrintDocumentDefinition()
                {
                    PrinterName = item.PrinterName,
                    PaperSize = paperSize,
                    Margins = margins,
                    Paragraphs = paragraphList,
                    Code = item.Code,
                    DisplayName = item.DisplayName,
                    Description = item.Description,
                    IsDefault = isDefault
                };

                printDocumentDefinitionList.Add(printDocumentDefinition);
            }
            await PrintingStore.PrintDocumentDefinition.InsertManyAsync(printDocumentDefinitionList, true);
        }
    }
}
