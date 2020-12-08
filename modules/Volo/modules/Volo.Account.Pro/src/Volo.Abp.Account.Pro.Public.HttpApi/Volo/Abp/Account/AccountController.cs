using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Identity;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.Account
{
    [RemoteService(Name = AccountProPublicRemoteServiceConsts.RemoteServiceName)]
    [Area("account")]
    [Route("api/account")]
    public class AccountController : AbpController, IAccountAppService
    {
        protected static byte[] DefaultAvatarContent = null;
        
        protected IAccountAppService AccountAppService { get; }
        
        protected IVirtualFileProvider VirtualFileProvider { get; }

        public AccountController(IAccountAppService accountAppService, IVirtualFileProvider virtualFileProvider)
        {
            AccountAppService = accountAppService;
            VirtualFileProvider = virtualFileProvider;
        }

        [HttpPost]
        [Route("register")]
        public virtual Task<IdentityUserDto> RegisterAsync(RegisterDto input)
        {
            return AccountAppService.RegisterAsync(input);
        }

        [HttpPost]
        [Route("send-password-reset-code")]
        public virtual Task SendPasswordResetCodeAsync(SendPasswordResetCodeDto input)
        {
            return AccountAppService.SendPasswordResetCodeAsync(input);
        }

        [HttpPost]
        [Route("reset-password")]
        public virtual Task ResetPasswordAsync(ResetPasswordDto input)
        {
            return AccountAppService.ResetPasswordAsync(input);
        }

        [HttpPost]
        [Route("send-phone-number-confirmation-token")]
        public Task SendPhoneNumberConfirmationTokenAsync()
        {
            return AccountAppService.SendPhoneNumberConfirmationTokenAsync();
        }

        [HttpPost]
        [Route("send-email-confirmation-token")]
        public Task SendEmailConfirmationTokenAsync(SendEmailConfirmationTokenDto input)
        {
            return AccountAppService.SendEmailConfirmationTokenAsync(input);
        }

        [HttpPost]
        [Route("confirm-phone-number")]
        public Task ConfirmPhoneNumberAsync(ConfirmPhoneNumberInput input)
        {
            return AccountAppService.ConfirmPhoneNumberAsync(input);
        }

        [HttpPost]
        [Route("confirm-email")]
        public Task ConfirmEmailAsync(ConfirmEmailInput input)
        {
            return AccountAppService.ConfirmEmailAsync(input);
        }

        [Authorize]
        [HttpPost]
        [Route("profile-picture")]
        public virtual async Task SetProfilePictureAsync(ProfilePictureInput input)
        {
            await AccountAppService.SetProfilePictureAsync(input);
        }

        [HttpGet]
        [Route("profile-picture/{id}")]
        public virtual async Task<ProfilePictureSourceDto> GetProfilePictureAsync(Guid id)
        {
            var pictureSource = await AccountAppService.GetProfilePictureAsync(id);

            if (pictureSource.Type == ProfilePictureType.None)
            {
                pictureSource.FileContent = await GetDefaultAvatarAsync();
            }

            return pictureSource;
        }

        [Authorize]
        [HttpPost]
        [Route("profile-picture-file")]
        public virtual async Task<IActionResult> UploadProfilePictureFileAsync(IFormFile image)
        {
            if (image == null)
            {
                return BadRequest();
            }
            
            var input = new ProfilePictureInput
            {
                Type = ProfilePictureType.Image,
                ImageContent = await image.GetAllBytesAsync()
            };

            await AccountAppService.SetProfilePictureAsync(input);

            return Ok();
        }
        
        
        [HttpGet]
        [Route("profile-picture-file/{id}")]
        public virtual async Task<IActionResult> GetProfilePictureFileAsync(Guid id)
        {
            var pictureSource = await AccountAppService.GetProfilePictureAsync(id);

            if (pictureSource.Type == ProfilePictureType.Gravatar)
            {
                return Redirect(pictureSource.Source);
            }
            
            if (pictureSource.Type == ProfilePictureType.Image)
            {
                return File(pictureSource.FileContent, "image/jpeg");
            }

            return File(await GetDefaultAvatarAsync(), "image/jpeg");
        }
        
        protected virtual async Task<byte[]> GetDefaultAvatarAsync()
        {
            if (DefaultAvatarContent == null)
            {
                using (var stream = VirtualFileProvider.GetFileInfo("/Volo/Abp/Account/ProfilePictures/avatar.jpg")
                    .CreateReadStream())
                { 
                    DefaultAvatarContent = await stream.GetAllBytesAsync();   
                } 
            }
            
            return DefaultAvatarContent;
        }
    }
}
