using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Modeling;
using System.Linq;
using System.Reflection;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Volo.Abp.Application.Services;
using Volo.Abp.AspNetCore.Mvc.Conventions;
using Volo.Abp.AspNetCore.Mvc.Utils;
using Volo.Abp.Reflection;
using Volo.Abp.Threading;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp;

namespace FS.Abp.AspNetCore.Mvc
{
    [Dependency(ReplaceServices = true)]
    public class AspNetCoreApiDescriptionModelProvider : Volo.Abp.AspNetCore.Mvc.AspNetCoreApiDescriptionModelProvider, IApiDescriptionModelProvider, ITransientDependency
    {
        private readonly global::MediatR.IMediator _mediator;

        public AspNetCoreApiDescriptionModelProvider(
            IOptions<AspNetCoreApiDescriptionModelProviderOptions> options,
            IApiDescriptionGroupCollectionProvider descriptionProvider,
            IOptions<AbpAspNetCoreMvcOptions> abpAspNetCoreMvcOptions,
            IOptions<AbpApiDescriptionModelOptions> modelOptions,
            global::MediatR.IMediator mediator
            )
            : base(options, descriptionProvider, abpAspNetCoreMvcOptions, modelOptions)
        {
            _mediator = mediator;
        }

        public new ApplicationApiDescriptionModel CreateApiModel(ApplicationApiDescriptionModelRequestDto input)
        {
            var model = base.CreateApiModel(input);

            var addCustomTypesToModelMethod = typeof(Volo.Abp.AspNetCore.Mvc.AspNetCoreApiDescriptionModelProvider).GetMethod("AddCustomTypesToModel", BindingFlags.Static | BindingFlags.NonPublic);

            this._mediator.Publish(new Notifications.ApplicationApiDescriptionModels.AddNotification(model)
            {
                Action = (x) =>
                {
                    addCustomTypesToModelMethod.Invoke(obj: null, parameters: new object[] { model, x });
                }
            });

            return model;
        }
    }
}




