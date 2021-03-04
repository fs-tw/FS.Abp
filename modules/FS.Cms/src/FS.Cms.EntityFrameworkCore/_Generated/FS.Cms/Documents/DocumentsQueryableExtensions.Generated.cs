﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace FS.Cms.Documents
{
    public static class DocumentsQueryableExtensions //auto-generated
    {
        public static IQueryable<DocumentDefinition> IncludeDetails(this IQueryable<DocumentDefinition> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.Documents);
        }
        public static IQueryable<Document> IncludeDetails(this IQueryable<Document> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.DocumentDefinition)
                .Include(x => x.Children)
                .Include(x => x.Parent);
        }
    }
}
