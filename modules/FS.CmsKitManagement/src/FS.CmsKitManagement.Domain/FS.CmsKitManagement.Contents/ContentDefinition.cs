using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;

namespace FS.CmsKitManagement.Contents
{
    public partial class ContentDefinition
    {
        public void PatchContentTypes(List<ContentType> contentTypes)
        {
            //to update
            var toUpdate = this.ContentTypes.Intersect(contentTypes);
            toUpdate.ToList().ForEach(c =>
            {
                var match = contentTypes.SingleOrDefault(x => x.Id == c.Id);
                c.DisplayName = match.DisplayName;
                c.Type = match.Type;
                c.Sequence = match.Sequence;
            });

            //to delete
            var toDelete = this.ContentTypes.Except(contentTypes);
            toDelete.ToList().ForEach(c =>
            {
                this.ContentTypes.Remove(c);
            });

            //to add
            var toAdd = contentTypes.Except(this.ContentTypes);
            toAdd.ToList().ForEach(c =>
            {
                this.ContentTypes.Add(c);
            });


        }
    }

}
