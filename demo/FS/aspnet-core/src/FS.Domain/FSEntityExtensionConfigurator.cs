using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace FS
{
    public static class FSEntityExtensionConfigurator
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public static void Configure()
        {
            OneTimeRunner.Run(() =>
            {
                ConfigureExistingProperties();
                ConfigureExtraProperties();
            });
        }

        private static void ConfigureExistingProperties()
        {

        }

        private static void ConfigureExtraProperties()
        {
            //ObjectExtensionManager.Instance.AddOrUpdate<Customers.Customer>(o =>
            //{
            //    o.AddOrUpdateProperty<string>("test");
            //});
        }
    }
}
