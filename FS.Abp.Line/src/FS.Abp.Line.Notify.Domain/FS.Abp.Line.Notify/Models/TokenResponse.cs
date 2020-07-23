using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Line.Notify.Models
{
    public class TokenResponse
    {
        public string access_token { get; set; }
        public int status { get; set; }

        public string message { get; set; }
    }
}
