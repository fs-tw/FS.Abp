﻿//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Blogs
{
    public partial interface IBlogCrudAppService
    {
        Task<ListResultDto<Dtos.BlogDto>> GetListAllAsync();
    }
}
