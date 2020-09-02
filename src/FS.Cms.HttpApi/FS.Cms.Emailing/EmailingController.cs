using FS.Cms.Emailing.Dtos;
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
        [HttpPost]
        public async Task SendTestMail(SendMailDto input)
        {
            var text = String.Format("<p>聯絡人名稱:{0}</p><p>聯絡人信箱:{1}</p><p>內容</p><p>{2}</p>", input.TargetName, input.TargetEmail, input.Content);
            var contactor = "yijie.trading.tw@gmail.com";
            await _emailSender.SendAsync(
            "further0507@gmail.com",     // target email address
            input.Subject,         // subject
            text  // email body
            );
            await _emailSender.SendAsync(
               contactor,     // target email address
               input.Subject,         // subject
               text  // email body
           );
        }

    }
}
