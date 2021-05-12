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

namespace FS.FormManagement.Groups
{
    public static class GroupsQueryableExtensions //auto-generated
    {
        public static IQueryable<Group> IncludeDetails(this IQueryable<Group> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.Children)
                .Include(x => x.Parent)
                .Include(x => x.Items);
        }
        public static IQueryable<GroupQuestion> IncludeDetails(this IQueryable<GroupQuestion> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.Group);
        }
    }
}
