using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FS.Cms.Tags
{
    public class TagGroupDto 
    {
        public TagGroupDto() 
        {
            this.Tags = new List<TagDto>();
        }
        public Guid Id { get; set; }
        public string TagGroupName { get; set; }
        public List<TagDto> Tags { get; set; }
    }
    public class TagDto
    {   
        public Guid Id { get; set; }
        public string Name { get; set; }
      //  public List<TagDto> Tags { get; set; }
    }

    public class TagForCreateDto
    {
        [Required]
        public string Name { get; set; }
        public List<TagForCreateDto> Tags { get; set; }
    }

    

    public class TagForUpdateDto
    {
        public Guid? Id { get; set; }
        [Required]
        public string DisplayName { get; set; }
        public List<TagForUpdateDto> Tags { get; set; }
    }
}
