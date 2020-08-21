using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Emailing;

namespace FS.Cms.Emailing
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/emailing")]    
    public class EmailingController : CmsController
    {
        private readonly IEmailSender _emailSender;

        public EmailingController(
            IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [Route("sendTestMail")]
        [HttpGet]
        public async Task SendTestMail(string targetEmail)
        {

            await _emailSender.SendAsync(
               targetEmail,     // target email address
               "This is an Test from furthersoftware",         // subject
               "This is email body..."  // email body
           );
        }
        [Route("sendSimpleEmail")]
        [HttpGet]
        public async Task SendTestMail(string targetEmail,string subject,string content)
        {
            await _emailSender.SendAsync(
               targetEmail,     // target email address
               subject,         // subject
               content  // email body
           );
        }

    }
}
