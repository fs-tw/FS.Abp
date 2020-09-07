using System.Collections.Generic;

namespace FS.Cms.DataSeed.Seeder.Model
{
    public class BaseCodesJson
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }      
        public List<BaseCodesJson> Children { get; set; }
    }
}