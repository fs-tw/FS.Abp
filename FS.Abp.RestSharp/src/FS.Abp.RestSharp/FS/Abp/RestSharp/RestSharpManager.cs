using RestSharp;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.RestSharp
{
    public class RestSharpManager : ITransientDependency, IRestSharpManager
    {
        public IRestClient GetClient()
        {
            return new RestClient();
        }

        public IRestClient GetClient(string baseUrl)
        {
            return new RestClient(baseUrl);
        }

        public IRestClient GetClient(System.Uri uri)
        {
            return new RestClient(uri);
        }
    }
}