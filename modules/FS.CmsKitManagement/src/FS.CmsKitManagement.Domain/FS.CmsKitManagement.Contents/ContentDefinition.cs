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
        public void PatchContentProperties(List<ContentProperty> contentProperties)
        {
            //to update
            var toUpdate = this.ContentProperties.Intersect(contentProperties);
            toUpdate.ToList().ForEach(c =>
            {
                var match = contentProperties.SingleOrDefault(x => x.Id == c.Id);
                c.DisplayName = match.DisplayName;
                c.Type = match.Type;
                c.Sequence = match.Sequence;
            });

            //to delete
            var toDelete = this.ContentProperties.Except(contentProperties);
            toDelete.ToList().ForEach(c =>
            {
                this.ContentProperties.Remove(c);
            });

            //to add
            var toAdd = contentProperties.Except(this.ContentProperties);
            toAdd.ToList().ForEach(c =>
            {
                this.ContentProperties.Add(c);
            });


        }
    }

}
