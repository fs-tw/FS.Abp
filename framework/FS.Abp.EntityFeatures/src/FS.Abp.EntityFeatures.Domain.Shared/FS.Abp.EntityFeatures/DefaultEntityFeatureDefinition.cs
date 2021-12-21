namespace FS.Abp.EntityFeatures
{
    public class DefaultEntityFeatureDefinition : EntityFeatureDefinition
    {
        public DefaultEntityFeatureDefinition(string name) : base(name) { }
        public DefaultEntityFeatureDefinition(System.Type type) : base(type.FullName) { }

        public static DefaultEntityFeatureDefinition Default<T>()
        {
            return new DefaultEntityFeatureDefinition(typeof(T));
        }
    }
}
