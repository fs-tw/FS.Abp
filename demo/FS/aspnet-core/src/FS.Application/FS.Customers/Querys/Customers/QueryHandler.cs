using FS.Customers.Dtos;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Customers.Querys.Customers
{
    public class QueryHandler : FSAppService, MediatR.IRequestHandler<Query, PagedResultDto<CustomerWithDetailsDto>>
    {
        public async Task<PagedResultDto<CustomerWithDetailsDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            ICustomerCrudAppService appService = this.LazyServiceProvider.LazyGetRequiredService<ICustomerCrudAppService>();
            return await appService.GetListAsync(request.input ?? new CustomerGetListDto());
        }
    }
}
