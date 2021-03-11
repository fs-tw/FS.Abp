using FS.YC.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.YC.Api
{
    public class TestApi : YCController, ITestApi
    {
        [Route("api/tets")]
        [HttpGet]
        public async Task<string> TestAsync()
        {
            return "ok";
        }
    }
}
