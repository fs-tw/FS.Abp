using System;
using System.Collections.Generic;
using System.Text;

namespace FS.LineNotify.Models
{
    public class TokenResponse
    {
        public string access_token { get; set; }
        public int status { get; set; }

        public string message { get; set; }
    }
}
