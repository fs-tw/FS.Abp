using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Volo.Abp.Options;

namespace Volo.Abp.Account.Public.Web.ExternalProviders
{
    public class AccountExternalProviderOptionsFactory<TOptions> : AbpOptionsFactory<TOptions>
        where TOptions : class, new()
    {
        public AccountExternalProviderOptionsFactory(
            IEnumerable<IConfigureOptions<TOptions>> setups,
            IEnumerable<IPostConfigureOptions<TOptions>> postConfigures)
            : base(setups, postConfigures)
        {
        }

        protected override void ValidateOptions(string name, TOptions options)
        {
            //We will dynamically configure options.
        }
    }
}
