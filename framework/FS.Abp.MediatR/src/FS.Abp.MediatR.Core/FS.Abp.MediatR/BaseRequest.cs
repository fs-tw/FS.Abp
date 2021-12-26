using MediatR;

namespace FS.Abp.MediatR
{
    public interface IQuery { }

    public interface ICommand { }

    public interface IBaseRequestDecorator : IBaseRequest
    {
        public IBaseRequest Peer { get; set; }
    }
}
