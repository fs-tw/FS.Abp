﻿using Microsoft.Extensions.DependencyInjection;
using Serilog;
using Serilog.Events;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Cli;
using Volo.Abp.Threading;

namespace FS.Abp.Cli
{
    public class Program
    {
        private static void Main(string[] args)
        {
            var mergeFSprojectArgs = args.ToList();
            mergeFSprojectArgs.AddRange(new[] { "--local-framework-ref" });
            args = mergeFSprojectArgs.ToArray();
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
                .MinimumLevel.Override("Volo.Abp", LogEventLevel.Warning)
#if DEBUG
                .MinimumLevel.Override("Volo.Abp.Cli", LogEventLevel.Debug)
#else
                .MinimumLevel.Override("Volo.Abp.Cli", LogEventLevel.Information)
#endif
                .Enrich.FromLogContext()
                .WriteTo.File(Path.Combine(CliPaths.Log, "abp-cli-logs.txt"))
                .WriteTo.Console()
                .CreateLogger();

            using (var application = AbpApplicationFactory.Create<AbpCliModule>(
                options =>
                {
                    options.UseAutofac();
                    options.Services.AddLogging(c => c.AddSerilog());
                }))
            {
                application.Initialize();

                AsyncHelper.RunSync(
                    async() => {
                        await application.ServiceProvider.GetRequiredService<CliService>().RunAsync(args);
                        System.Console.Read();
                        return Task.CompletedTask;
                    }
                );

                application.Shutdown();
            }
        }
    }
}