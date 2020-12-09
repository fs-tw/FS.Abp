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
    }


    public class TagGroupForCreateDto 
    {     
        public string TagGroupName { get; set; }
    }


    public class TagGroupForUpdateDto
    {       
        public string TagGroupName { get; set; }
    }


    //----
    public class TagForCreateDto
    {
        [Required]
        public string Name { get; set; }
    }

    

    public class TagForUpdateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
