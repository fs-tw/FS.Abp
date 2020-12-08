using FS.Cms.Definitions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FS.Cms.Posts.Dtos
{
    public class PostWithTagsDto : PostWithDetailsDto
    {
        private List<TagDto> tags;
        public string BlogDisplayName { get; set; }
        public PostWithTagsDto(List<TagDto> tags) 
        {            
            this.tags = tags;
            PostTags = new List<PostTagMapDto>();
        }
        public List<PostsTagsForDisplayName> Tags 
        {
            get 
            {
                List<PostsTagsForDisplayName> result = new List<PostsTagsForDisplayName>();
                foreach (var item in PostTags) 
                {
                    var code = tags.Find(x => x.Id == item.TagCodeId);
                    result.Add(new PostsTagsForDisplayName()
                    {
                        TagId = item.TagCodeId,
                        DisplayName = code.Name
                    });
                }
                return result;
            }
        }

       
        public PostImageDto CoverImage
        {
            get
            {
                var images = PostImages.ToList();
                if (images.Count == 0) return null;
                if (images.Where(x => x.IsCover == true).FirstOrDefault() != null)
                {
                    return images.Where(x => x.IsCover == true).First();
                }
                else
                {
                    return images.First();
                }
            }
        }

    }

    public class PostsTagsForDisplayName 
    {
        public Guid TagId { get; set; }
        public string DisplayName { get; set; }
    }


    
}
