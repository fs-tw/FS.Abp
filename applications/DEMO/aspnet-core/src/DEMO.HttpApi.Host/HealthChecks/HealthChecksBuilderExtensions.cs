﻿using System;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace DEMO.HealthChecks
{
    public static class HealthChecksBuilderExtensions
    {
        public static void AddDEMOHealthChecks(this IServiceCollection services)
        {
            // Add your health checks here
            var healthChecksBuilder = services.AddHealthChecks();
            healthChecksBuilder.AddCheck<DEMODatabaseCheck>("DEMO DbContext Check", tags: new string[] { "database" });
            
            services.ConfigureHealthCheckEndpoint("/health-status");
            
            // If you don't want to add HealthChecksUI, remove following configurations.
            var healthChecksUiBuilder = services.AddHealthChecksUI(settings =>
            {
                settings.AddHealthCheckEndpoint("DEMO Health Status", "/health-status");
            });
            
            // Set your HealthCheck UI Storage here
            healthChecksUiBuilder.AddInMemoryStorage();
            
            services.MapHealthChecksUiEndpoints(options =>
            {
                options.UIPath = "/health-ui";
                options.ApiPath = "/health-api";
            });
        }
        
        private static IServiceCollection ConfigureHealthCheckEndpoint(this IServiceCollection services, string path)
        {
            services.Configure<AbpEndpointRouterOptions>(options =>
            {
                options.EndpointConfigureActions.Add(endpointContext =>
                {
                    endpointContext.Endpoints.MapHealthChecks(
                        new PathString(path.EnsureStartsWith('/')),
                        new HealthCheckOptions
                        {
                            Predicate = _ => true,
                            ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                            AllowCachingResponses = false,
                        });
                });
            });

            return services;
        }

        private static IServiceCollection MapHealthChecksUiEndpoints(this IServiceCollection services, Action<global::HealthChecks.UI.Configuration.Options> setupOption = null)
        {
            services.Configure<AbpEndpointRouterOptions>(routerOptions =>
            {
                routerOptions.EndpointConfigureActions.Add(endpointContext =>
                {
                    endpointContext.Endpoints.MapHealthChecksUI(setupOption);
                });
            });

            return services;
        }
    }
}