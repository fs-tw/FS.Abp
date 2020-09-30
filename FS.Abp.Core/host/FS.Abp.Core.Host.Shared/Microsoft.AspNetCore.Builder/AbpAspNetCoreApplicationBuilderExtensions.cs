using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Microsoft.AspNetCore.Builder
{
    public static class FSAbpCoreHostSharedExtensions
    {
        public static void MapAngularApp(this IApplicationBuilder app, string path)
        {
            var sourcePath = "wwwroot/" + path;
            var realPath= Path.Combine(Directory.GetCurrentDirectory(), sourcePath);

            if (!System.IO.Directory.Exists(realPath))
                return;

            app.Map("/" + path, application =>
            {
                application.UseSpa(spa =>
                {
                    spa.Options.SourcePath = sourcePath;
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(realPath)
                    };
                });
            });
        }
    }
}
