using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class add_form : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FormManagementGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementGroups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementGroups_FormManagementGroups_ParentId",
                        column: x => x.ParentId,
                        principalTable: "FormManagementGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FrmFormResponses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrmFormResponses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FrmForms",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    CanEditResponse = table.Column<bool>(type: "bit", nullable: false),
                    IsCollectingEmail = table.Column<bool>(type: "bit", nullable: false),
                    HasLimitOneResponsePerUser = table.Column<bool>(type: "bit", nullable: false),
                    IsAcceptingResponses = table.Column<bool>(type: "bit", nullable: false),
                    IsQuiz = table.Column<bool>(type: "bit", nullable: false),
                    RequiresLogin = table.Column<bool>(type: "bit", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrmForms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FrmQuestions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Index = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    Type = table.Column<int>(type: "int", nullable: false),
                    IsRequired = table.Column<bool>(type: "bit", nullable: true),
                    HasOtherOption = table.Column<bool>(type: "bit", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrmQuestions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementGroupQuestions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    QuestionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sequence = table.Column<int>(type: "int", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementGroupQuestions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementGroupQuestions_FormManagementGroups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "FormManagementGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FrmAnswers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    QuestionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormResponseId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ChoiceId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    AnswerDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrmAnswers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FrmAnswers_FrmFormResponses_FormResponseId",
                        column: x => x.FormResponseId,
                        principalTable: "FrmFormResponses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FrmChoices",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ChoosableQuestionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsCorrect = table.Column<bool>(type: "bit", nullable: false),
                    Index = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrmChoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FrmChoices_FrmQuestions_ChoosableQuestionId",
                        column: x => x.ChoosableQuestionId,
                        principalTable: "FrmQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<int>(type: "int", nullable: false),
                    PrevVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    NextVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    VersionDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementVersions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementVersionDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EntityType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EntityKey = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
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
                    table.PrimaryKey("PK_FormManagementVersionDefinitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementVersionDefinitions_FormManagementVersions_CurrentVersionId",
                        column: x => x.CurrentVersionId,
                        principalTable: "FormManagementVersions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroupQuestions_CreationTime",
                table: "FormManagementGroupQuestions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroupQuestions_GroupId",
                table: "FormManagementGroupQuestions",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroups_CreationTime",
                table: "FormManagementGroups",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroups_ParentId",
                table: "FormManagementGroups",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersionDefinitions_CreationTime",
                table: "FormManagementVersionDefinitions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersionDefinitions_CurrentVersionId",
                table: "FormManagementVersionDefinitions",
                column: "CurrentVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersions_CreationTime",
                table: "FormManagementVersions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersions_VersionDefinitionId",
                table: "FormManagementVersions",
                column: "VersionDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_FrmAnswers_FormResponseId",
                table: "FrmAnswers",
                column: "FormResponseId");

            migrationBuilder.CreateIndex(
                name: "IX_FrmAnswers_Id_QuestionId_FormResponseId_TenantId",
                table: "FrmAnswers",
                columns: new[] { "Id", "QuestionId", "FormResponseId", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_FrmChoices_ChoosableQuestionId",
                table: "FrmChoices",
                column: "ChoosableQuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_FrmChoices_Id_ChoosableQuestionId_TenantId",
                table: "FrmChoices",
                columns: new[] { "Id", "ChoosableQuestionId", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_FrmFormResponses_Id_FormId_UserId_TenantId",
                table: "FrmFormResponses",
                columns: new[] { "Id", "FormId", "UserId", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_FrmForms_Id_TenantId",
                table: "FrmForms",
                columns: new[] { "Id", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_FrmQuestions_Id_FormId_TenantId",
                table: "FrmQuestions",
                columns: new[] { "Id", "FormId", "TenantId" });

            migrationBuilder.AddForeignKey(
                name: "FK_FormManagementVersions_FormManagementVersionDefinitions_VersionDefinitionId",
                table: "FormManagementVersions",
                column: "VersionDefinitionId",
                principalTable: "FormManagementVersionDefinitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormManagementVersionDefinitions_FormManagementVersions_CurrentVersionId",
                table: "FormManagementVersionDefinitions");

            migrationBuilder.DropTable(
                name: "FormManagementGroupQuestions");

            migrationBuilder.DropTable(
                name: "FrmAnswers");

            migrationBuilder.DropTable(
                name: "FrmChoices");

            migrationBuilder.DropTable(
                name: "FrmForms");

            migrationBuilder.DropTable(
                name: "FormManagementGroups");

            migrationBuilder.DropTable(
                name: "FrmFormResponses");

            migrationBuilder.DropTable(
                name: "FrmQuestions");

            migrationBuilder.DropTable(
                name: "FormManagementVersions");

            migrationBuilder.DropTable(
                name: "FormManagementVersionDefinitions");
        }
    }
}
