namespace FS.Abp.EntityTypes
{
    public static class EntityTypesDbProperties
    {
        public static string DbTablePrefix { get; set; } = "EntityTypes";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "EntityTypes";
    }
}
