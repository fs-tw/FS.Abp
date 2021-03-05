using Microsoft.AspNetCore.Mvc;
using Stimulsoft.Report;
using Stimulsoft.Report.Export;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Report
{
    public class ReportFactory : Volo.Abp.DependencyInjection.ITransientDependency, IReportFactory
    {
        private readonly StiReport report;
        private readonly StiPdfExportService service;
        protected Volo.Abp.VirtualFileSystem.IVirtualFileProvider VirtualFileProvider { get; set; }

        public ReportFactory(
            Volo.Abp.VirtualFileSystem.IVirtualFileProvider virtualFileProvider
            )
        {
            report = new StiReport();
            service = new StiPdfExportService();
            Stimulsoft.Base.StiFontCollection.AddFontFile(@"C:\Windows\Fonts\kaiu.ttf");
            VirtualFileProvider = virtualFileProvider;

        }
        /// <summary>
        /// produce a pdf filestream
        /// </summary>
        /// <param name="reportFilePath">report file(mrt)</param>
        /// <param name="modelJson">data(json)</param>
        /// <returns></returns>
        public FileStreamResult Produce(string reportFilePath, dynamic model)
        {
            var reportFile = this.VirtualFileProvider.GetFileInfo(reportFilePath);
            if (!reportFile.Exists)
                throw new Exception($"ERROR: 'Report mrt file' could not be found at {reportFilePath}!");
            var stream = reportFile.CreateReadStream();
            report.Load(stream);
            Stimulsoft.Base.Json.Linq.JObject jsonObj = Stimulsoft.Base.Json.Linq.JObject.FromObject(model);
            var jsondata = Stimulsoft.Base.StiJsonToDataSetConverterV2.GetDataSet(jsonObj);
            report.Dictionary.Databases.Clear();
            report.RegData("JSON", jsondata);
            report.Render();
            System.IO.MemoryStream ms = new System.IO.MemoryStream();
            service.ExportPdf(report, ms);
            ms.Position = 0;
            return new FileStreamResult(ms, "application/pdf");
        }
    }
}
