using System.Threading.Tasks;
using MediatR;

namespace FS.CodingManagement.Data
{
    public class CreateDefaultCodesDataSeed : Volo.Abp.DependencyInjection.ITransientDependency
    {
        private readonly IMediator mediator;

        public CreateDefaultCodesDataSeed(
            MediatR.IMediator mediator)
        {
            this.mediator = mediator;
        }

        public async Task ExecuteAsync()
        {

            var command = new Mediator.CreateDefaultCodes()
            {
                DisplayName="台中",
                Value="Taichung",
                No="Taichung",
                Children=new System.Collections.Generic.List<Mediator.CreateDefaultCodes>()
                {
                    new Mediator.CreateDefaultCodes(){No="North", Value="北區",DisplayName="北區"},
                    new Mediator.CreateDefaultCodes(){No="South" ,Value="南區",DisplayName="南區"}
                }
            };
            await mediator.Send(command);
        }
    }
}
