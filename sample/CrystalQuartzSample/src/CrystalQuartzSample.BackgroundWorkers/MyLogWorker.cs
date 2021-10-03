using FS.Abp.Shared;
using Microsoft.Extensions.Logging;
using Quartz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.BackgroundWorkers.Quartz;
using Volo.Abp.Identity;
using Volo.Abp.Auditing;

namespace CrystalQuartzSample
{
    public class MyLogWorker : QuartzBackgroundWorkerBase
    {
        Volo.Abp.Auditing.IAuditingManager AuditingManager => this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Auditing.IAuditingManager>();
        Volo.Abp.Auditing.IAuditingHelper AuditingHelper => this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Auditing.IAuditingHelper>();
        Volo.Abp.Identity.IIdentityUserRepository IdentityUserRepository => this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Identity.IIdentityUserRepository>();
        Volo.Abp.ObjectMapping.IObjectMapper ObjectMapper => this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.ObjectMapping.IObjectMapper>();
        public MyLogWorker()
        {
            JobDetail = JobBuilder.Create<MyLogWorker>().WithIdentity(nameof(MyLogWorker)).Build();
            Trigger = TriggerBuilder.Create()
                .WithIdentity(nameof(MyLogWorker))
                .StartNow()
                .WithSchedule(CronScheduleBuilder.DailyAtHourAndMinute(0, 30))
                .Build();
            //Trigger = TriggerBuilder.Create()
            //    .WithIdentity(nameof(MyLogWorker))
            //    .WithSimpleSchedule(s => s.WithIntervalInSeconds(3)
            //    .RepeatForever()
            //    .WithMisfireHandlingInstructionIgnoreMisfires()).Build();
        }

        public override async Task Execute(IJobExecutionContext context)
        {
            Logger.LogInformation("Executed MyLogWorker..!");
            await AuditingManager.CreateAuditingScopeAsync("Worker", async () =>
            {
                var log = AuditingManager.Current.Log;
                var users = await IdentityUserRepository.GetListAsync();
                var userDtos = ObjectMapper.Map<List<IdentityUser>, List<Volo.Abp.Identity.IdentityUserDto>>(users);

                var methodInfo = GetMethodInfoUtil.GetMethodInfo<IJobExecutionContext, Task>(this.Execute);

                AuditingManager.CreateAuditLogAction<MyLogWorker>(AuditingHelper, methodInfo, new { datas = userDtos });
            });
        }

    }

}

