using System;
using System.Linq;

namespace FS.Cms.Posts
{
    public interface IPostsManager
    {
        IOrderedQueryable<Post> CheckPublished_AtForPermission(Guid? blogCodeId, bool permission);
    }
}