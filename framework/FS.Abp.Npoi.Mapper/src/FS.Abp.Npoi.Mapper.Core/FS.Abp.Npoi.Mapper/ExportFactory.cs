using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace FS.Abp.Npoi.Mapper
{
    public interface IExportFactory:Volo.Abp.DependencyInjection.ITransientDependency
    {
        byte[] Produce(ExportOption exportOption);     
    }
    public class ExportFactory : IExportFactory
    {      
        public byte[] Produce(ExportOption exportOption)            
        {
            var i = 0;
            IWorkbook workbook= new XSSFWorkbook();
            if (exportOption.ExportFormat == ExportFormat.XLS)
            {
                 workbook = new HSSFWorkbook();
            }                                 
            var mapper = new global::Npoi.Mapper.Mapper(workbook);
            exportOption.ExportData.ForEach( data =>
            {
                ISheet sheet = workbook.CreateSheet(data.SheetName);
               
                 mapper.ForHeader(cell =>
                 {
                     sheet.AutoSizeColumn(cell.ColumnIndex);
                 });
                mapper.Put<Object>(data.Datas, i);
                i++;
            });
            
            MemoryStream memoryStream = new MemoryStream();
            mapper.Workbook.Write(memoryStream);
            var datas = memoryStream.ToArray();
            memoryStream.Close();
            return datas;         
        }
    }
}
