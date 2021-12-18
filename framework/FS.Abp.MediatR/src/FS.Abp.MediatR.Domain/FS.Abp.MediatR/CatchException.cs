using MediatR;
using System;

namespace FS.Abp.MediatR
{
    public class CatchException : global::MediatR.IRequest, IBaseRequestDecorator
    {
        public IBaseRequest Peer { get; set; }
        public Action<Exception> CatchAction { get; set; }
    }
}
