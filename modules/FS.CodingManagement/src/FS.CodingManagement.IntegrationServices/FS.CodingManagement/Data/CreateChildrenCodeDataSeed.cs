using System.Threading.Tasks;
using MediatR;

namespace FS.CodingManagement.Data
{
    public class CreateChildrenCodeDataSeed : Volo.Abp.DependencyInjection.ITransientDependency
    {
        private readonly IMediator mediator;
        public CreateChildrenCodeDataSeed(
            MediatR.IMediator mediator) 
        {
            this.mediator = mediator;
        }
        public async Task ExecuteAsync()
        {
            var command = new Mediator.CreateDefaultCoding();
            await mediator.Send(command);
        }
    }
}
