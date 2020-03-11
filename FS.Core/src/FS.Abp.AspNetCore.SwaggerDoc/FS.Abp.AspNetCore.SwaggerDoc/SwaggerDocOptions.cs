using Microsoft.AspNetCore.Mvc.ApiExplorer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
namespace FS.Abp.AspNetCore.SwaggerDoc
{
    public class SwaggerDocOptions
    {
        //key:groupName,value:docName
        private Dictionary<string, string> SwaggerDocNameGroupNameMatchs { get; set; }

        public SwaggerDocOptions()
        {
            SwaggerDocNameGroupNameMatchs = new Dictionary<string, string>();
        }

        public void Add(string docName, string groupName)
        {
            if (!SwaggerDocNameGroupNameMatchs.ContainsKey(groupName))
            {
                SwaggerDocNameGroupNameMatchs.Add(groupName, docName);
            }
        }

        public string GetDocName(string groupName)
        {
            if (string.IsNullOrEmpty(groupName)) return null;
            if (SwaggerDocNameGroupNameMatchs.ContainsKey(groupName))
                return SwaggerDocNameGroupNameMatchs[groupName];
            return null;
        }
        public bool IsExistDocName(string docName)
        {
            if (string.IsNullOrEmpty(docName)) return false;
            return SwaggerDocNameGroupNameMatchs.ContainsValue(docName);
        }
        public List<string> FindDocNames()
        {
            return this.SwaggerDocNameGroupNameMatchs.Values.Distinct().ToList();
        }


    }
}
