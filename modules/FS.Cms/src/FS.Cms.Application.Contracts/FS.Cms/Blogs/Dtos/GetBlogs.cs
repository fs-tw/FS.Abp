﻿using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Cms.Blogs.Dtos
{
    public class GetBlogsInput : Volo.Abp.Application.Dtos.PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}
