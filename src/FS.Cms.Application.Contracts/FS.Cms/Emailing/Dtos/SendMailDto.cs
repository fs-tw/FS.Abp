using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Cms.Emailing.Dtos
{
    public class SendMailDto
    {
        public string TargetEmail { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public string TargetName { get; set; }
    }
}
