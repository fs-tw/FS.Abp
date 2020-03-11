using System;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Report
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule)
        )]
    public class ReportModule:AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Stimulsoft.Base.StiLicense.Key = "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHmjYyUs3rPp9QCjPC97F/VRgHK4Qbzcf5Yp3PREqdkHTNSjR8" +
            "DgOvdPghhzl3QnSiFbyF47Dcd6lY1Z3VETZRJsf2z6OYx0bM6Qnyg8JQTN+4/pBWkFKB4saeXTEmE55Q/1g+PylKrB" +
            "a8iR7mhtxNQEQuYmUFzmC8IDOZdrm+gSkThCPzls0xoopVN1r0+sSIMDqsFAg5VJi1sBzNQauOruk3f2DEPhiBfqMe" +
            "qvZLS/XOrckfMzDSyT/fHODXT7tZAIAcQ0DvNBOtyRzUYYvDOFsZXNd9oe/PjcdbCsk3Sm7Y9ty9L9ONGv0IDZ5Jss" +
            "TjK4qrtt+1hMpQjBapo156r9hh8PuSufOwvQbJtbUehWR0CZzRNKudxHLoI5+pp0eYLsVb4URRJE/ObmtTKhPvN/jw" +
            "o8zh5BLgsz/YCnLsD3DRAjmK0lIO9EHy3F5wuxgzvDuLjBMAdONVOzZELuMsI+q2TW7qlEOyTjz6a4NOHp3+W6Wd4e" +
            "k0ff6u84yEe544MH9chxXCMehyl0r4BqMuR5";
        }

    }
}
