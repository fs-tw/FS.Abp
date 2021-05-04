using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class add_form : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormManagementGroups_FormManagementFormals_FormalId",
                table: "FormManagementGroups");

            migrationBuilder.DropTable(
                name: "FormManagementFormals");

            migrationBuilder.DropTable(
                name: "FormManagementItems");

            migrationBuilder.DropTable(
                name: "FormManagementRecordItems");

            migrationBuilder.DropTable(
                name: "FormManagementRecords");

            migrationBuilder.RenameColumn(
                name: "FormalId",
                table: "FormManagementGroups",
                newName: "FormId");

            migrationBuilder.RenameIndex(
                name: "IX_FormManagementGroups_FormalId",
                table: "FormManagementGroups",
                newName: "IX_FormManagementGroups_FormId");

            migrationBuilder.CreateTable(
                name: "FormManagementFormResponses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                    table.PrimaryKey("PK_FormManagementFormResponses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementForms",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
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
                    table.PrimaryKey("PK_FormManagementForms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementQuestions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sequence = table.Column<int>(type: "int", nullable: false),
                    HasOtherOption = table.Column<bool>(type: "bit", nullable: false),
                    IsRequired = table.Column<bool>(type: "bit", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementQuestions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementQuestions_FormManagementGroups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "FormManagementGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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
                name: "FormManagementAnswers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FormResponseId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    QuestionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ChoiceId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    AnswerDate = table.Column<DateTime>(type: "datetime2", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementAnswers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementAnswers_FormManagementFormResponses_FormResponseId",
                        column: x => x.FormResponseId,
                        principalTable: "FormManagementFormResponses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementChoices",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sequence = table.Column<int>(type: "int", nullable: false),
                    QuestionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsCorrect = table.Column<bool>(type: "bit", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    CheckboxId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ChoiceMultipleId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DropdownListId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormManagementChoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementChoices_FormManagementQuestions_CheckboxId",
                        column: x => x.CheckboxId,
                        principalTable: "FormManagementQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FormManagementChoices_FormManagementQuestions_ChoiceMultipleId",
                        column: x => x.ChoiceMultipleId,
                        principalTable: "FormManagementQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FormManagementChoices_FormManagementQuestions_DropdownListId",
                        column: x => x.DropdownListId,
                        principalTable: "FormManagementQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementAnswers_CreationTime",
                table: "FormManagementAnswers",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementAnswers_FormResponseId",
                table: "FormManagementAnswers",
                column: "FormResponseId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementChoices_CheckboxId",
                table: "FormManagementChoices",
                column: "CheckboxId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementChoices_ChoiceMultipleId",
                table: "FormManagementChoices",
                column: "ChoiceMultipleId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementChoices_CreationTime",
                table: "FormManagementChoices",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementChoices_DropdownListId",
                table: "FormManagementChoices",
                column: "DropdownListId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementFormResponses_CreationTime",
                table: "FormManagementFormResponses",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementForms_CreationTime",
                table: "FormManagementForms",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementQuestions_CreationTime",
                table: "FormManagementQuestions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementQuestions_GroupId",
                table: "FormManagementQuestions",
                column: "GroupId");

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
                name: "FK_FormManagementGroups_FormManagementForms_FormId",
                table: "FormManagementGroups",
                column: "FormId",
                principalTable: "FormManagementForms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormManagementGroups_FormManagementForms_FormId",
                table: "FormManagementGroups");

            migrationBuilder.DropTable(
                name: "FormManagementAnswers");

            migrationBuilder.DropTable(
                name: "FormManagementChoices");

            migrationBuilder.DropTable(
                name: "FormManagementForms");

            migrationBuilder.DropTable(
                name: "FrmAnswers");

            migrationBuilder.DropTable(
                name: "FrmChoices");

            migrationBuilder.DropTable(
                name: "FrmForms");

            migrationBuilder.DropTable(
                name: "FormManagementFormResponses");

            migrationBuilder.DropTable(
                name: "FormManagementQuestions");

            migrationBuilder.DropTable(
                name: "FrmFormResponses");

            migrationBuilder.DropTable(
                name: "FrmQuestions");

            migrationBuilder.RenameColumn(
                name: "FormId",
                table: "FormManagementGroups",
                newName: "FormalId");

            migrationBuilder.RenameIndex(
                name: "IX_FormManagementGroups_FormId",
                table: "FormManagementGroups",
                newName: "IX_FormManagementGroups_FormalId");

            migrationBuilder.CreateTable(
                name: "FormManagementFormals",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    VersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormManagementFormals", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sequence = table.Column<int>(type: "int", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormManagementItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementItems_FormManagementGroups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "FormManagementGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementRecords",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FormalId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormManagementRecords", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementRecordItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Asnwer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ItemId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    RecordId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormManagementRecordItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementRecordItems_FormManagementRecords_RecordId",
                        column: x => x.RecordId,
                        principalTable: "FormManagementRecords",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementFormals_CreationTime",
                table: "FormManagementFormals",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementItems_CreationTime",
                table: "FormManagementItems",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementItems_GroupId",
                table: "FormManagementItems",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementRecordItems_CreationTime",
                table: "FormManagementRecordItems",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementRecordItems_RecordId",
                table: "FormManagementRecordItems",
                column: "RecordId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementRecords_CreationTime",
                table: "FormManagementRecords",
                column: "CreationTime");

            migrationBuilder.AddForeignKey(
                name: "FK_FormManagementGroups_FormManagementFormals_FormalId",
                table: "FormManagementGroups",
                column: "FormalId",
                principalTable: "FormManagementFormals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
