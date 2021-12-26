namespace FS.CmsKitManagement.Contents.Dtos
{
    public partial class EntityContentDefinitionGetListDto
    {
        public virtual string EntityType { get; set; }

        public virtual string EntityId { get; set; }
    }
    public partial class EntityContentDefinitionWithDetailsDto : EntityContentDefinitionDto
    {
        public ContentDefinitionWithDetailsDto ContentDefinition { get; set; }
    }
}
