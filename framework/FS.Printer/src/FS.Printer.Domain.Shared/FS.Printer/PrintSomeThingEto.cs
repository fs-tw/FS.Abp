using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.EventBus;

namespace FS.Printer
{
    public enum PrintSomeThingType
    {
        過磅單,
        收據
    }

    [EventName("FS.PrinterManagement.PrintSomeThingEto")]
    public class PrintSomeThingEto
    {
        public PrintSomeThingType Type { get; set; }

        public string LaneNo { get; set; }

        public Guid? CardTypeId { get; set; }

        public Dictionary<string, string> Paragraphs { get; set; }

    }
}
