using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Cms.Migrations
{
    public partial class add_documents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CmsDocumentDefinitions",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    Title = table.Column<string>(nullable: false),
                    Url = table.Column<string>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsDocumentDefinitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsDocuments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    Content = table.Column<string>(nullable: false),
                    DocumentDefinitionId = table.Column<string>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    ParentId = table.Column<Guid>(nullable: true),
                    DisplayName = table.Column<string>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsDocuments_CmsDocumentDefinitions_DocumentDefinitionId",
                        column: x => x.DocumentDefinitionId,
                        principalTable: "CmsDocumentDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CmsDocuments_CmsDocuments_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CmsDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsDocuments_DocumentDefinitionId",
                table: "CmsDocuments",
                column: "DocumentDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsDocuments_ParentId",
                table: "CmsDocuments",
                column: "ParentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CmsDocuments");

            migrationBuilder.DropTable(
                name: "CmsDocumentDefinitions");
        }
    }
}
