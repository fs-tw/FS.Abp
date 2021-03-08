using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace FS.Report
{
    public interface IReportFactory
    {
        FileStreamResult Produce(string reportFilePath, dynamic modelJson);
    }
}