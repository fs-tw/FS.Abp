using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.Domain.Services;

namespace FS.Abp.Data
{
    public interface ISeederOptions
    {
        public bool Ignore { get; set; }
    }
    public abstract class Seeder<TOptions> : DomainService
        where TOptions : class, ISeederOptions
    {
        protected TOptions Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<TOptions>>().Value;

        protected abstract Task SeedAsync(DataSeedContext context);

        public async Task SeedAsync(DataSeedContext context, Action<TOptions> configure = null)
        {
            configure?.Invoke(Options);
            if (Options.Ignore) return;
            await this.SeedAsync(context);
        }
    }
}
