﻿using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Line.Notify.Models
{
    public class StatusResponse
    {
        public int status { get; set; }
        public string message { get; set; }
        public string targetType { get; set; }

        public string target { get; set; }
    }


}
