using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Migrations
{
    public partial class add_Vocabulary_no : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "No",
                table: "CmsKitManagementVocabularies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "No",
                table: "CmsKitManagementVocabularies");
        }
    }
}
