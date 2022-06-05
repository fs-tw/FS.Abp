using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace FS.PrinterManagement.Printing.Dtos
{
    public partial class PrintDocumentDefinitionGetListDto
    {
        public string Filter { get; set; }

        public bool? IsDefault { get; set; }
    }
}
