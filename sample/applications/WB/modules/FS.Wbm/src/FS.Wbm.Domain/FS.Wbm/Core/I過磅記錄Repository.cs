﻿//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating Repositories and a Unit of Work for EF Core model.
// 4.0.0
//
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Wbm.Core
{
    public partial interface I過磅記錄Repository
    {
        Task<List<過磅記錄>> GetByAsync(DateTime startDate, DateTime endDate);
    }
}
