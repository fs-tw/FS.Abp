using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FS.Abp.CodingManagement.Coding;
using FS.Cms.Posts;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace FS.Cms.EventBus
{
    public class CodeDeleteEventHandler : ILocalEventHandler<EntityDeletedEventData<FS.Abp.CodingManagement.Coding.Codes>>, ITransientDependency
    {
        
        private readonly IPostRepository postRepository;

        public CodeDeleteEventHandler(
            IPostRepository postRepository
            ) {            
            this.postRepository = postRepository;
        }
        public async Task HandleEventAsync(EntityDeletedEventData<Codes> eventData)
        {
            if (!eventData.Entity.Parent.No.Equals("Blog")) return;
            var posts = this.postRepository.Where(x => x.BlogCodeId == eventData.Entity.Id).ToList();

            foreach (var post in posts) 
            {
                post.BlogCodeId = eventData.Entity.ParentId.Value;
                await this.postRepository.UpdateAsync(post).ConfigureAwait(false);
            } 
        
        }
    }
}
