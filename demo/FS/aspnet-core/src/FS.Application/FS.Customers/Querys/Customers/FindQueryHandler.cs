using FS.Customers.Dtos;
using System.Threading;
using System.Threading.Tasks;

namespace FS.Customers.Querys.Customers
{
    public class FindQueryHandler : FSAppService, MediatR.IRequestHandler<FindQuery, CustomerWithDetailsDto>
    {
        public async Task<CustomerWithDetailsDto> Handle(FindQuery request, CancellationToken cancellationToken)
        {
            ICustomerCrudAppService appService = this.LazyServiceProvider.LazyGetRequiredService<ICustomerCrudAppService>();
            return await appService.GetAsync(request.id);
        }
    }
}
