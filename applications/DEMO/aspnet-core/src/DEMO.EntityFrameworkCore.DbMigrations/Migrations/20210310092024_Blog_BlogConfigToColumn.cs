using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class Blog_BlogConfigToColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IconUrl",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ListStyle",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Sequence",
                table: "CmsBlogs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ThemeWebSiteDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThemeWebSiteDefinitions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ThemeWebSiteDefinitions_CreationTime",
                table: "ThemeWebSiteDefinitions",
                column: "CreationTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ThemeWebSiteDefinitions");

            migrationBuilder.DropColumn(
                name: "IconUrl",
                table: "CmsBlogs");

            migrationBuilder.DropColumn(
                name: "ListStyle",
                table: "CmsBlogs");

            migrationBuilder.DropColumn(
                name: "Sequence",
                table: "CmsBlogs");

            migrationBuilder.DropColumn(
                name: "Url",
                table: "CmsBlogs");
        }
    }
}
