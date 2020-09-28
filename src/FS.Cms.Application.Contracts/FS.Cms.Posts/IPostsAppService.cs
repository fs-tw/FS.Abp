using System;
using System.Threading.Tasks;
using FS.Abp.Application;
using FS.Cms.Posts.Dtos;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public interface IPostsAppService : IPostCrudAppService, IPostImagesAppService
    {
    }

    public partial interface IPostImagesAppService
    {
        Task Save(CmsImageModel input, Guid postId);
    }

}