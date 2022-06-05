using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FS.Printer.Printing
{
    public interface IPrintingDomainService : ITransientDependency
    {
        Task PrintSomeThingAsync(PrintSomeThingEto data, Guid printerId);
    }
}
