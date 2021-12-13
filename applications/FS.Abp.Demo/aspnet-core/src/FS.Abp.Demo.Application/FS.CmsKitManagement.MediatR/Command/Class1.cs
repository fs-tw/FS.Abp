using MR = MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.CmsKitManagement.MediatR.Command
{
    public record Test1Command(string application, string name) : FS.Abp.MediatR.ICommand, MR.IRequest<int>
    {

    }

    public class Test1CommandHandler : CmsKitManagementAppService, MR.IRequestHandler<Test1Command,int>
    {
        public Task<int> Handle(Test1Command request, CancellationToken cancellationToken)
        {
            Mediator.Send(new Test2Command("1", "2"));
            return Task.FromResult(0);
        }
    }
}
