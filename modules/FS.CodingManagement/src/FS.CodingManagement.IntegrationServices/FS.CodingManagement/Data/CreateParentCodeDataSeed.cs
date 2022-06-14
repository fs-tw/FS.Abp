using System.Threading.Tasks;
using MediatR;

namespace FS.CodingManagement.Data
{
    public class CreateParentCodeDataSeed : Volo.Abp.DependencyInjection.ITransientDependency
    {
        private readonly IMediator mediator;

        public CreateParentCodeDataSeed(
            MediatR.IMediator mediator)
        {
            this.mediator = mediator;
        }

        public async Task ExecuteAsync() {
            var command = new Mediator.CreateDefaultCodingParent();
            await mediator.Send(command);
        }
    }
}
