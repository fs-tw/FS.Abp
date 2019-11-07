using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Modularity;
using Volo.Abp.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;

namespace FS.Abp.AspNetCore.Authentication
{
    [DependsOn(typeof(AbpAspNetCoreAuthenticationJwtBearerModule))]
    public class AbpAuthenticationModule: AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                var serviceProvider = context.Services.BuildServiceProvider();
                var secret = serviceProvider.GetService<IOptions<AbpAuthenticationOptions>>().Value.Secret;
                var key = Encoding.ASCII.GetBytes(secret);
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };

            });
        }
    }
}
