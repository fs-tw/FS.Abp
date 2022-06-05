using BarcodeLib;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Printing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.PrinterManagement.Printing
{
    public class PrintingDomainService : DomainService, IPrintingDomainService
    {
        private IPrintingStore PrintingStore => this.LazyServiceProvider.LazyGetRequiredService<IPrintingStore>();

        public async Task PrintSomeThingAsync(PrintSomeThingEto data, Guid printerId)
        {
            var printDoc = await this.PrintingStore.PrintDocumentDefinition.GetAsync(printerId);

            PrintDocument pd = new PrintDocument();
            pd.PrinterSettings.PrinterName = printDoc.PrinterName;
            pd.DefaultPageSettings.PaperSize = new System.Drawing.Printing.PaperSize(
                printDoc.PaperSize.PaperName,
                printDoc.PaperSize.Width,
                printDoc.PaperSize.Height
            );
            pd.DefaultPageSettings.Margins = new System.Drawing.Printing.Margins
            {
                Bottom = printDoc.Margins.Bottom,
                Left = printDoc.Margins.Left,
                Right = printDoc.Margins.Right,
                Top = printDoc.Margins.Top
            };
            pd.PrintPage += new PrintPageEventHandler(printEvent);

            pd.Print();

            // 設定列印文字
            void printEvent(object sender, PrintPageEventArgs e)
            {
                float leftMargin = e.MarginBounds.Left;
                float topMargin = e.MarginBounds.Top;

                // 單位，微軟正黑體 10px 高度，以防止主機因無此字體而錯誤，所以直接寫值
                float fontHeight = 18.4733047f; // = new Font("微軟正黑體", 10).GetHeight(e.Graphics);

                foreach (var paragraph in printDoc.Paragraphs)
                {
                    switch (paragraph.DrawMethod)
                    {
                        case DrawMethod.Text:
                            setText(e, paragraph, leftMargin, topMargin, fontHeight);
                            break;
                        case DrawMethod.Barcode:
                            setBarcode(e, paragraph, leftMargin, topMargin, fontHeight);
                            break;
                        default:
                            setText(e, paragraph, leftMargin, topMargin, fontHeight);
                            break;
                    }
                }
            }

            void setText(PrintPageEventArgs e, Paragraph paragraph, float leftMargin, float topMargin, float fontHeight)
            {
                var font = new Font(paragraph.FontType, paragraph.FontSize);
                var text = replaceParams(paragraph.Content);
                var textArr = text.Split("\r\n").ToList();

                var rowLine = paragraph.PointY;
                foreach (var showText in textArr)
                {
                    e.Graphics.DrawString(
                        showText,
                        font,
                        Brushes.Black,
                        leftMargin + (float)(paragraph.PointX * fontHeight),
                        topMargin + (float)(rowLine * fontHeight),
                        new StringFormat());

                    rowLine++;
                }
            }
            void setBarcode(PrintPageEventArgs e, Paragraph paragraph, float leftMargin, float topMargin, float fontHeight)
            {
                var text = replaceParams(paragraph.Content);

                // 目前 Barcode 大小不能設定
                Barcode barcode = new Barcode();
                Image img = barcode.Encode(BarcodeLib.TYPE.CODE39, text, Color.Black, Color.White, 350, 40);
                Rectangle destRect = new Rectangle(
                    (int)(leftMargin + (float)(paragraph.PointX * fontHeight)),
                    (int)(topMargin + (float)(paragraph.PointY * fontHeight)),
                    img.Width,
                    img.Height);

                e.Graphics.DrawImage(img, destRect, 0, 0, img.Width, img.Height, GraphicsUnit.Pixel);
            }
            string replaceParams(string content)
            {
                if (String.IsNullOrEmpty(content)) return "--";

                var keys = data.Paragraphs.Keys.ToList();
                keys.ForEach(key =>
                {
                    var keyName = "{$" + key + "}";
                    content = content.Replace(keyName, data.Paragraphs[key]);
                });

                return content;
            }
        }
    }
}
