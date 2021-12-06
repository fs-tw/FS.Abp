﻿using AutoFilterer.Swagger;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Modularity;

namespace FS.Abp.AutoFilterer
{
    public class AbpAutoFiltererModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.Configure<SwaggerGenOptions>(cfg => cfg.UseAutoFiltererParameters());

            context.Services.AddTransient<IConfigureOptions<MvcOptions>, AddIgnoreFilterMetadataProvider>();

            base.ConfigureServices(context);
        }
    }
}
