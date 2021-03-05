using RestSharp;
using System;

namespace FS.Abp.RestSharp
{
    public interface IRestSharpManager
    {
        IRestClient GetClient();

        IRestClient GetClient(string baseUrl);

        IRestClient GetClient(Uri uri);
    }
}