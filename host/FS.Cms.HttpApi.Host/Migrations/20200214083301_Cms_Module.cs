using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Cms.Migrations
{
    public partial class Cms_Module : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CmsBlogs",
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
                    Name = table.Column<string>(nullable: false),
                    ShortName = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsBlogs", x => x.Id);
                });

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
                name: "CmsTags",
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
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    UsageCount = table.Column<string>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsTags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsPosts",
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
                    Title = table.Column<string>(nullable: false),
                    Subtitle = table.Column<string>(nullable: false),
                    Url = table.Column<string>(nullable: false),
                    Content = table.Column<string>(nullable: false),
                    CoverImage = table.Column<string>(nullable: false),
                    Published = table.Column<bool>(nullable: false),
                    Published_By = table.Column<string>(nullable: true),
                    Published_At = table.Column<DateTime>(nullable: false),
                    ReadCount = table.Column<int>(nullable: false),
                    BlogId = table.Column<Guid>(nullable: false),
                    DisplayMode = table.Column<int>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsPosts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsPosts_CmsBlogs_BlogId",
                        column: x => x.BlogId,
                        principalTable: "CmsBlogs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.CreateTable(
                name: "CmsPostTags",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    PostId = table.Column<Guid>(nullable: false),
                    TagId = table.Column<Guid>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsPostTags", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsPostTags_CmsPosts_PostId",
                        column: x => x.PostId,
                        principalTable: "CmsPosts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CmsPostTags_CmsTags_TagId",
                        column: x => x.TagId,
                        principalTable: "CmsTags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsDocuments_DocumentDefinitionId",
                table: "CmsDocuments",
                column: "DocumentDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsDocuments_ParentId",
                table: "CmsDocuments",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsPosts_BlogId",
                table: "CmsPosts",
                column: "BlogId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsPostTags_PostId",
                table: "CmsPostTags",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsPostTags_TagId",
                table: "CmsPostTags",
                column: "TagId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CmsDocuments");

            migrationBuilder.DropTable(
                name: "CmsPostTags");

            migrationBuilder.DropTable(
                name: "CmsDocumentDefinitions");

            migrationBuilder.DropTable(
                name: "CmsPosts");

            migrationBuilder.DropTable(
                name: "CmsTags");

            migrationBuilder.DropTable(
                name: "CmsBlogs");
        }
    }
}
