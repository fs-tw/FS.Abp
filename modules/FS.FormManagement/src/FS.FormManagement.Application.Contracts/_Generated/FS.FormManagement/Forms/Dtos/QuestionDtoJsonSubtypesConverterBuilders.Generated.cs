﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

namespace FS.FormManagement.Forms.Dtos
{
    public partial class QuestionJsonSubtypesConverterProfile : FS.Abp.AspNetCore.Mvc.JsonSubTypes.JsonSubtypesConverterProfile
    {
        public QuestionJsonSubtypesConverterProfile()
        {
            this.CreateJsonSubtypesConverter<QuestionDto>("Discriminator")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.CheckboxDto>("Checkbox")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ChoiceMultipleDto>("ChoiceMultiple")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.DropdownListDto>("DropdownList")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ShortTextDto>("ShortText")
                ;

            this.CreateJsonSubtypesConverter<QuestionCreateDto>("Discriminator")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.CheckboxCreateDto>("Checkbox")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ChoiceMultipleCreateDto>("ChoiceMultiple")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.DropdownListCreateDto>("DropdownList")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ShortTextCreateDto>("ShortText")
                ;

            this.CreateJsonSubtypesConverter<QuestionUpdateDto>("Discriminator")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.CheckboxUpdateDto>("Checkbox")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ChoiceMultipleUpdateDto>("ChoiceMultiple")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.DropdownListUpdateDto>("DropdownList")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ShortTextUpdateDto>("ShortText")
                ;

            this.CreateJsonSubtypesConverter<QuestionWithDetailsDto>("Discriminator")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.CheckboxWithDetailsDto>("Checkbox")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ChoiceMultipleWithDetailsDto>("ChoiceMultiple")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.DropdownListWithDetailsDto>("DropdownList")
                .RegisterSubtype<FS.FormManagement.Forms.Dtos.ShortTextWithDetailsDto>("ShortText")
                ;

        }
    }

}
