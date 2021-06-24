using MediatR;

namespace FS.Abp.MediatR
{
    public interface IQuery : Volo.Abp.DependencyInjection.ITransientDependency { }
    public interface ICommand : Volo.Abp.DependencyInjection.ITransientDependency { }
}
