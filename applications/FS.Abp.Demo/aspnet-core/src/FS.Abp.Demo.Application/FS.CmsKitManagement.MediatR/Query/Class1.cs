using MR = MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.CmsKitManagement.MediatR.Query
{
    public record Test1Query(string application, string name) : FS.Abp.MediatR.IQuery, MR.IRequest
    {

    }

    public class Test1QueryHandler : CmsKitManagementAppService, MR.IRequestHandler<Test1Query>
    {
        public Task<MR.Unit> Handle(Test1Query request, CancellationToken cancellationToken)
        {
            return MR.Unit.Task;
        }
    }
}
