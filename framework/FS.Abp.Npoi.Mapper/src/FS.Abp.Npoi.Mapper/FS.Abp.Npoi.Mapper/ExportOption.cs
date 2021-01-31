using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Npoi.Mapper
{
    public class ExportOption
    {
        public ExportFormat ExportFormat { get; set; }
        public List<ExportData> ExportData { get; set; }
    }



    public class ExportData
    { 
        public string SheetName { get; set; }
        public IEnumerable<Object> Datas { get; set; }
    }

    public enum ExportFormat 
    { 
        XLSX = 1,
        XLS = 2
    }
}
