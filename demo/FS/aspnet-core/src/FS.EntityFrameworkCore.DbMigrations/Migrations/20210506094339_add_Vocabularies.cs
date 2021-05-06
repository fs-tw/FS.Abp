using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Migrations
{
    public partial class add_Vocabularies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CmsKitManagementVocabularyDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    table.PrimaryKey("PK_CmsKitManagementVocabularyDefinitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementVocabularies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VocabularyDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    table.PrimaryKey("PK_CmsKitManagementVocabularies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementVocabularies_CmsKitManagementVocabularies_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CmsKitManagementVocabularies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementVocabularies_CmsKitManagementVocabularyDefinitions_VocabularyDefinitionId",
                        column: x => x.VocabularyDefinitionId,
                        principalTable: "CmsKitManagementVocabularyDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementVocabularies_CreationTime",
                table: "CmsKitManagementVocabularies",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementVocabularies_ParentId",
                table: "CmsKitManagementVocabularies",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementVocabularies_VocabularyDefinitionId",
                table: "CmsKitManagementVocabularies",
                column: "VocabularyDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementVocabularyDefinitions_CreationTime",
                table: "CmsKitManagementVocabularyDefinitions",
                column: "CreationTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CmsKitManagementVocabularies");

            migrationBuilder.DropTable(
                name: "CmsKitManagementVocabularyDefinitions");
        }
    }
}
