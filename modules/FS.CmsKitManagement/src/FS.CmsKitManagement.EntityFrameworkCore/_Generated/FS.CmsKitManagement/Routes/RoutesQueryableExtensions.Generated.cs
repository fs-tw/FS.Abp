﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace FS.CmsKitManagement.Routes
{
    public static class RoutesQueryableExtensions //auto-generated
    {
        public static IQueryable<Route> IncludeDetails(this IQueryable<Route> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.RouteDefinition)
                .Include(x => x.Children)
                .Include(x => x.Parent);
        }
        public static IQueryable<RouteDefinition> IncludeDetails(this IQueryable<RouteDefinition> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }
            return queryable
                .Include(x => x.Routes);
        }
    }
}
