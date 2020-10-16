using FS.Abp.Application;
using FS.Abp.CodingManagement.Coding;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;

namespace FS.Cms.Posts
{

    public partial class PostsAppService : IPostImagesAppService
    {
        public async Task Save(CmsImageModel input, Guid postId)
        {
            var post = this.Repository.Where(x => x.Id == postId).FirstOrDefault();
            var newData = ObjectMapper.Map<List<Core.Dtos.CmsImageFieldDto>, List<Core.CmsImageField>>(input.ImgaeField);
            //var removeDeleteImage = post.Images.
            //     WhereIf(input.UploadImageInput.DeleteFiles.Count > 0, x => !input.UploadImageInput.DeleteFiles.Contains(x.Title)).ToList();

            //post.Images = removeDeleteImage;
            //post.Images.AddRange(newData);
            await this.Repository.UpdateAsync(post).ConfigureAwait(false);
        }
    }
}
