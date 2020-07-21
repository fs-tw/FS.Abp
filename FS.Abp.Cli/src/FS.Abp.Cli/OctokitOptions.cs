using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Cli
{
    public class OctokitOptions
    {
        public string ProductHeaderName { get; set; }
        public string OwnerName { get; set; }
        public string RepositoryName { get; set; }
        public string BranchName { get; set; }
    }
}
