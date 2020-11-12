using System.Collections.Generic;

namespace FS.Cms.Data.Definitions
{
    public class BaseCodesJson
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }      
        public List<BaseCodesJson> Children { get; set; }
    }
}