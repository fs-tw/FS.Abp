using System.Collections.Generic;

namespace FS.Abp.Npoi.Mapper
{
    public interface IErrorHandler : Volo.Abp.DependencyInjection.ISingletonDependency
    {
        public List<ErrorHandler.ErrorInfo> ErrorInfos { get; set; }

        public void Add(ErrorHandler.ErrorInfo errorInfo);
        void Clear();
    }
}