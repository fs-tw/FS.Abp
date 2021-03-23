using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Authentication.External
{
    public interface IExternalAuthProvider:Volo.Abp.DependencyInjection.ITransientDependency
    {
        Task<ExternalAuthUserInfo> GetUserInfoAsync(NameValueCollection raw);
    }
}
