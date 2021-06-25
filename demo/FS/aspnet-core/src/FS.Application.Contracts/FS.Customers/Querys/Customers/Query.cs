using FS.Abp.MediatR;
using FS.Customers.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace FS.Customers.Querys.Customers
{
    public record Query(CustomerGetListDto input = null) :
        IQuery,
        MediatR.IRequest<PagedResultDto<CustomerWithDetailsDto>>
    {
         
    }
}
