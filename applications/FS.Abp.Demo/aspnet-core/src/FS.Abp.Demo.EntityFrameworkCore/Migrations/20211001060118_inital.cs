using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Abp.Demo.Migrations
{
    public partial class inital : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CmsKitManagementPostRoutes");

            migrationBuilder.DropTable(
                name: "CmsKitManagementRoutes");

            migrationBuilder.DropTable(
                name: "CmsKitManagementVocabularies");

            migrationBuilder.DropTable(
                name: "CmsKitManagementRouteDefinitions");

            migrationBuilder.DropTable(
                name: "CmsKitManagementVocabularyDefinitions");

            migrationBuilder.CreateTable(
                name: "CmsKitManagementCmsMediaDescriptors",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EntityType = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    EntityId = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    MediaDescriptorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_CmsKitManagementCmsMediaDescriptors", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementCmsMediaDescriptors_CreationTime",
                table: "CmsKitManagementCmsMediaDescriptors",
                column: "CreationTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CmsKitManagementCmsMediaDescriptors");

            migrationBuilder.CreateTable(
                name: "CmsKitManagementPostRoutes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PostId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RouteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementPostRoutes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementRouteDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementRouteDefinitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementVocabularyDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementVocabularyDefinitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementRoutes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsHidden = table.Column<bool>(type: "bit", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    RouteDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UrlType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementRoutes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementRoutes_CmsKitManagementRouteDefinitions_RouteDefinitionId",
                        column: x => x.RouteDefinitionId,
                        principalTable: "CmsKitManagementRouteDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementRoutes_CmsKitManagementRoutes_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CmsKitManagementRoutes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementVocabularies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    VocabularyDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
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
                name: "IX_CmsKitManagementRouteDefinitions_CreationTime",
                table: "CmsKitManagementRouteDefinitions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRoutes_CreationTime",
                table: "CmsKitManagementRoutes",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRoutes_ParentId",
                table: "CmsKitManagementRoutes",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRoutes_RouteDefinitionId",
                table: "CmsKitManagementRoutes",
                column: "RouteDefinitionId");

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
    }
}
