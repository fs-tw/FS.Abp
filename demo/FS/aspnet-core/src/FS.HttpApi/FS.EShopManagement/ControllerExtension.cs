using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using Volo.Abp.AspNetCore.Mvc;
using MediatR;
using FS.Abp.AspNetCore.Mvc.Notifications.ApplicationApiDescriptionModels;
using System.Threading;

namespace FS.EShopManagement
{
    public class AddNotificationHandler : Volo.Abp.Domain.Services.DomainService, INotificationHandler<AddNotification>
    {
        public Task Handle(AddNotification request, CancellationToken cancellationToken)
        {
            var appModule = request.model.GetOrAddModule("app", "Default");
            var targetModule = request.model.GetOrAddModule("eShopManagement", "Default");

            var eshopControllers = appModule.Controllers.Where(x =>
            {
                return x.Key.StartsWith("EasyAbp.EShop");
            }).ToList();

            eshopControllers.ForEach(x =>
            {
                appModule.Controllers.Remove(x);
                targetModule.Controllers.Add(x);
            });

            return Task.CompletedTask;
        }
    }
}
