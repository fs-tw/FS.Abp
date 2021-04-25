using System.Collections.Generic;
using Volo.Abp.Identity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace FS
{
    public static class FSDtoExtensions
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public static void Configure()
        {
            OneTimeRunner.Run(() =>
            {
                ObjectExtensionManager.Instance
                    .AddOrUpdateProperty<List<FS.Contact>>(
                        new[]
                        {
                            typeof(Customers.Dtos.CustomerDto),
                            typeof(Customers.Dtos.CustomerCreateDto),
                            typeof(Customers.Dtos.CustomerUpdateDto)
                        },
                        nameof(FS.CustomerExtensionType.Contacts));
                //ObjectExtensionManager.Instance
                //   .AddOrUpdateProperty<Customers.Dtos.CustomerDto, string>("test");
                /* You can add extension properties to DTOs
                 * defined in the depended modules.
                 *
                 * Example:
                 *
                 * ObjectExtensionManager.Instance
                 *   .AddOrUpdateProperty<IdentityRoleDto, string>("Title");
                 *
                 * See the documentation for more:
                 * https://docs.abp.io/en/abp/latest/Object-Extensions
                 */
            });
        }
    }
}