Host Module:
            Configure<IISServerOptions>(o =>
            {
                o.AllowSynchronousIO = true;
            });

app.UseCrystalQuartz(() => AsyncHelper.RunSync(() => context.ServiceProvider.GetRequiredService<ISchedulerFactory>().GetScheduler()));

HomeController:
 public ActionResult Index()
        {
            return Redirect("~/quartz");

        }