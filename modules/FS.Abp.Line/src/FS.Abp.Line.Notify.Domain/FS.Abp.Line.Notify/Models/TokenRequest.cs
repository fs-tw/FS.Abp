using RestSharp.Serializers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace FS.Abp.Line.Notify.Models
{
    public class TokenRequest
    {
        public string grant_type { get; set; }
        public string code { get; set; }
        public string redirect_uri { get; set; }
        public string client_id { get; set; }
        public string client_secret { get; set; }
    }
}
