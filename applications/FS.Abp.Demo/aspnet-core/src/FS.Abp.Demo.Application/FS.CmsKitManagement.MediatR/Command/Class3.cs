using MR = MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.CmsKitManagement.MediatR.Command
{
    public record Test3Command(string application, string name) : FS.Abp.MediatR.ICommand, MR.IRequest
    {

    }

    public class Test3CommandHandler : CmsKitManagementAppService, MR.IRequestHandler<Test3Command>
    {
        public Task<MR.Unit> Handle(Test3Command request, CancellationToken cancellationToken)
        {
            return MR.Unit.Task;
        }
    }
}
