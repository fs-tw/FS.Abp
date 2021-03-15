﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace FS.FormManagement.Records
{
    public static class RecordsQueryableExtensions //auto-generated
    {
        public static IQueryable<Record> IncludeDetails(this IQueryable<Record> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.RecordItems);
        }
        public static IQueryable<RecordItem> IncludeDetails(this IQueryable<RecordItem> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.Record);
        }
    }
}
