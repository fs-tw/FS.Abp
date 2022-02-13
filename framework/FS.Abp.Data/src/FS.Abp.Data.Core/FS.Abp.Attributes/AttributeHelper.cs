using System;
using System.ComponentModel;
using System.Linq;

namespace FS.Abp.Attributes
{
    public static class AttributeHelper 
    {
        public static T Find<T>(Type owner)
            where T: Attribute
        {
            return TypeDescriptor.GetAttributes(owner).OfType<T>().FirstOrDefault();

        }
    }
}