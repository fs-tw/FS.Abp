using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Blazorise;
using Blazorise.DataGrid;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.Extensions.Http.Logging;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;
using MimeTypes;
using Volo.Abp.Http.Client;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;
using Volo.FileManagement.Authorization;
using BreadcrumbItem = Volo.Abp.BlazoriseUI.BreadcrumbItem;

namespace Volo.FileManagement.Blazor.Pages.FileManagement
{
    public partial class FileManagement
    {
        protected const string DownloadEndpoint = "api/file-management/file-descriptor/download/";

        [Inject]
        protected IDirectoryDescriptorAppService DirectoryDescriptorAppService { get; set; }

        [Inject]
        protected IFileDescriptorAppService FileDescriptorAppService { get; set; }

        [Inject]
        protected IOptions<AbpRemoteServiceOptions> RemoteServiceOptions { get; set; }

        [Inject]
        protected IAccessTokenProvider AccessTokenProvider { get; set; }

        [Inject]
        protected IHttpClientFactory HttpClientFactory { get; set; }

        [Inject]
        protected IJSRuntime JsRuntime { get; set; }

        protected List<BreadcrumbItem> BreadcrumbItems;

        protected Modal CreateDirectoryModal;

        protected Validations CreateDirectoryValidationsRef;

        protected CreateDirectoryInput CreateDirectoryInput;

        protected Modal RenameDirectoryModal;

        protected Validations RenameDirectorValidationsRef;

        protected RenameDirectoryInput RenameDirectoryInput;

        protected Modal RenameFileModal;

        protected Validations RenameFileValidationsRef;

        protected RenameFileInput RenameFileInput;

        protected Guid RenameContentId;

        protected Modal UploadFilesModal;

        protected Modal MoveContentModal;

        protected List<DirectoryContentDto> MoveDirectoryContents;

        protected Guid MovingContentId;

        protected Guid? NewDirectoryId;

        protected bool MoveDirectory;

        protected bool ReBuildRoute;

        protected bool HasFileCreatePermission;

        protected bool HasFileUpdatePermission;

        protected bool HasFileDeletePermission;

        protected bool HasDirectoryCreatePermission;

        protected bool HasDirectoryUpdatePermission;

        protected bool HasDirectoryDeletePermission;

        protected IReadOnlyList<DirectoryContentDto> DirectoryContents;

        protected List<DirectoryDescriptorTreeModel> DirectoryDescriptorTree;

        protected DirectoryContentRequestInput DirectoryContentRequestInput;

        protected List<DirectoryContentDto> DirectoryRoutes;

        protected List<FileManagementUploadFileModel> FileManagementUploadFileModels;

        protected List<DirectoryContentDto> MoveFileDirectoryRoutes;

        public FileManagement()
        {
            BreadcrumbItems = new List<BreadcrumbItem>();
            CreateDirectoryInput = new CreateDirectoryInput();
            RenameDirectoryInput = new RenameDirectoryInput();
            DirectoryContentRequestInput = new DirectoryContentRequestInput();
            RenameFileInput = new RenameFileInput();
            DirectoryRoutes = new List<DirectoryContentDto>();
            FileManagementUploadFileModels = new List<FileManagementUploadFileModel>();
            MoveFileDirectoryRoutes = new List<DirectoryContentDto>();
        }

        protected override async Task OnInitializedAsync()
        {
            HasFileCreatePermission = await AuthorizationService.IsGrantedAsync(FileManagementPermissions.FileDescriptor.Create);
            HasFileUpdatePermission = await AuthorizationService.IsGrantedAsync(FileManagementPermissions.FileDescriptor.Update);
            HasFileDeletePermission = await AuthorizationService.IsGrantedAsync(FileManagementPermissions.FileDescriptor.Delete);

            HasDirectoryCreatePermission = await AuthorizationService.IsGrantedAsync(FileManagementPermissions.DirectoryDescriptor.Create);
            HasDirectoryUpdatePermission = await AuthorizationService.IsGrantedAsync(FileManagementPermissions.DirectoryDescriptor.Update);
            HasDirectoryDeletePermission = await AuthorizationService.IsGrantedAsync(FileManagementPermissions.DirectoryDescriptor.Delete);

            BreadcrumbItems.Add(new BreadcrumbItem(L["Menu:FileManagement"]));

            await InitDirectoryDescriptorTreeAsync();
            await GetDirectoryContentAsync();
        }

        //TODO: Child nodes should be lazily loaded, but there is currently no tree component that supports lazy loading
        protected virtual async Task GetDirectoryDescriptorTreeAsync(IEnumerable<DirectoryDescriptorInfoDto> descriptorInfos, List<DirectoryDescriptorTreeModel> treeModels)
        {
            foreach (var descriptorInfo in descriptorInfos)
            {
                var treeModel = new DirectoryDescriptorTreeModel(descriptorInfo.Id, descriptorInfo.Name,
                    descriptorInfo.ParentId);

                if (descriptorInfo.HasChildren)
                {
                    var result = await DirectoryDescriptorAppService.GetListAsync(descriptorInfo.Id);
                    await GetDirectoryDescriptorTreeAsync(result.Items, treeModel.Children);
                }

                treeModels.Add(treeModel);
                DirectoryDescriptorTree.First().DirectoryDescriptorInfos.Add(treeModel);
            }
        }

        protected virtual async Task InitDirectoryDescriptorTreeAsync()
        {
            DirectoryDescriptorTree = new List<DirectoryDescriptorTreeModel>
            {
                new(null, L["AllFiles"].Value, null,false)
                {
                    Collapsed = false,
                    DirectoryDescriptorInfos = new List<DirectoryDescriptorTreeModel>()
                }
            };
            await GetDirectoryDescriptorTreeAsync((await DirectoryDescriptorAppService.GetListAsync(null)).Items, DirectoryDescriptorTree.First().Children);
            if (DirectoryContentRequestInput.Id.HasValue && DirectoryDescriptorTree.First().HasChildren)
            {
                CollapseOrExpandDirectoryNode(false, DirectoryContentRequestInput.Id);
            }
        }

        protected virtual async Task OnSelectedDirectoryNodeChangedAsync(DirectoryDescriptorTreeModel directoryNode)
        {
            DirectoryRoutes.Clear();
            DirectoryContentRequestInput.Id = directoryNode.Id;
            BuildDirectoryRoutesBySelectedDirectoryNode(directoryNode);
            await GetDirectoryContentAsync();
        }

        protected virtual void BuildDirectoryRoutesBySelectedDirectoryNode(DirectoryDescriptorTreeModel directoryNode)
        {
            if (!directoryNode.Id.HasValue)
            {
                return;
            }
            if (directoryNode.ParentId.HasValue)
            {
                BuildDirectoryRoutesBySelectedDirectoryNode(DirectoryDescriptorTree.First().DirectoryDescriptorInfos.First(x=>x.Id == directoryNode.ParentId));
            }
            DirectoryRoutes.Add(new DirectoryContentDto
            {
                Name = directoryNode.Name,
                Id = directoryNode.Id.Value,
                IsDirectory = true
            });
        }

        protected virtual async Task OnDirectoryContentDataGridReadAsync(DataGridReadDataEventArgs<DirectoryContentDto> e)
        {
            DirectoryContentRequestInput.Sorting = e.Columns
                .Where(c => c.Direction != SortDirection.None)
                .Select(c => c.Field + (c.Direction == SortDirection.Descending ? " DESC" : ""))
                .JoinAsString(",");

            await GetDirectoryContentAsync();
        }

        protected virtual async Task GetDirectoryContentAsync()
        {
            var result = await DirectoryDescriptorAppService.GetContentAsync(DirectoryContentRequestInput);
            DirectoryContents = result.Items;

            StateHasChanged();
        }

        protected virtual async Task OnDirectoryRoutingAsync(DirectoryContentDto content)
        {
            DirectoryContentRequestInput.Id = content?.Id;
            if (content != null)
            {
                var index = DirectoryRoutes.IndexOf(content) + 1;
                CollapseOrExpandDirectoryNode(true, content.Id);
                CollapseOrExpandDirectoryNode(false, content.Id);
                DirectoryRoutes.RemoveRange(index ,DirectoryRoutes.Count - index);
            }
            else
            {
                CollapseOrExpandDirectoryNode(true, null);
                DirectoryRoutes.Clear();
            }
            await GetDirectoryContentAsync();
        }

        protected virtual async Task DeleteEntityAsync(DirectoryContentDto content)
        {
            if (content.IsDirectory)
            {
                await DeleteDirectoryAsync(content.Id);
            }
            else
            {
                await DeleteFileAsync(content.Id);
            }
        }

        protected virtual async Task DeleteDirectoryAsync(Guid directoryId, bool confirm = false)
        {
            if (confirm)
            {
                if (!(await Message.Confirm(L["DirectoryDeleteConfirmationMessage"])))
                {
                    return;
                }
            }

            await CheckPolicyAsync(FileManagementPermissions.DirectoryDescriptor.Delete);
            await DirectoryDescriptorAppService.DeleteAsync(directoryId);

            var routedDirectory = DirectoryRoutes.FindIndex(x => x.Id == directoryId);
            if (routedDirectory >= 0)
            {
                DirectoryRoutes.RemoveRange(routedDirectory ,DirectoryRoutes.Count - routedDirectory);
            }

            DirectoryContentRequestInput.Id = DirectoryRoutes.LastOrDefault()?.Id;
            await InitDirectoryDescriptorTreeAsync();
            await GetDirectoryContentAsync();

        }

        protected virtual async Task DeleteFileAsync(Guid fileId, bool confirm = false)
        {
            if (confirm)
            {
                if (!(await Message.Confirm(L["FileDeleteConfirmationMessage"])))
                {
                    return;
                }
            }

            await CheckPolicyAsync(FileManagementPermissions.FileDescriptor.Delete);
            await FileDescriptorAppService.DeleteAsync(fileId);

            await GetDirectoryContentAsync();
        }

        protected virtual string GetDeleteConfirmationMessage(DirectoryContentDto content)
        {
            return string.Format(content.IsDirectory ? L["DirectoryDeleteConfirmationMessage"] : L["FileDeleteConfirmationMessage"]);
        }

        protected virtual Task OpenCreateDirectoryModalAsync()
        {
            CreateDirectoryValidationsRef?.ClearAll();

            CreateDirectoryInput = new CreateDirectoryInput();

            StateHasChanged();

            CreateDirectoryModal.Show();

            return Task.CompletedTask;
        }

        protected virtual Task CloseCreateDirectoryModalAsync()
        {
            CreateDirectoryModal.Hide();
            return Task.CompletedTask;
        }

        protected virtual async Task CreateDirectoryAsync()
        {
            await CheckPolicyAsync(FileManagementPermissions.DirectoryDescriptor.Create);

            if (CreateDirectoryValidationsRef?.ValidateAll() ?? true)
            {
                CreateDirectoryInput.ParentId = DirectoryRoutes.LastOrDefault()?.Id;
                await DirectoryDescriptorAppService.CreateAsync(CreateDirectoryInput);

                await InitDirectoryDescriptorTreeAsync();
                await GetDirectoryContentAsync();

                CreateDirectoryModal.Hide();
            }
        }

        protected virtual async Task OpenRenameModalAsync(DirectoryContentDto content)
        {
            RenameContentId = content.Id;

            if (content.IsDirectory)
            {
                await OpenRenameDirectoryModalAsync(RenameContentId, content.Name);
            }
            else
            {
                RenameFileValidationsRef?.ClearAll();

                RenameFileInput = new RenameFileInput
                {
                    Name = content.Name
                };

                StateHasChanged();

                RenameFileModal.Show();
            }
        }

        protected virtual async Task OpenRenameDirectoryModalAsync(Guid directoryId, string directoryName)
        {
            RenameContentId = directoryId;

            RenameDirectorValidationsRef?.ClearAll();

            RenameDirectoryInput = new RenameDirectoryInput
            {
                Name = directoryName
            };

            StateHasChanged();

            RenameDirectoryModal.Show();
        }

        protected virtual Task CloseRenameModalAsync(bool isDirectory)
        {
            if (isDirectory)
            {
                RenameDirectoryModal.Hide();
            }
            else
            {
                RenameFileModal.Hide();
            }

            return Task.CompletedTask;
        }

        protected virtual async Task RenameDirectoryAsync()
        {
            await CheckPolicyAsync(FileManagementPermissions.DirectoryDescriptor.Update);

            if (RenameDirectorValidationsRef?.ValidateAll() ?? true)
            {
                CreateDirectoryInput.ParentId = DirectoryContentRequestInput.Id;
                await DirectoryDescriptorAppService.RenameAsync(RenameContentId, RenameDirectoryInput);

                ChangeDirectoryRouteName(RenameContentId, RenameDirectoryInput.Name);
                await InitDirectoryDescriptorTreeAsync();
                await GetDirectoryContentAsync();
                RenameDirectoryModal.Hide();
            }
        }

        protected virtual void ChangeDirectoryRouteName(Guid routeId, string name)
        {
            var route = DirectoryRoutes.FirstOrDefault(x => x.Id == RenameContentId);
            if (route != null)
            {
                route.Name = name;
            }
        }

        protected virtual async Task RenameFileAsync()
        {
            await CheckPolicyAsync(FileManagementPermissions.FileDescriptor.Update);

            if (RenameFileValidationsRef?.ValidateAll() ?? true)
            {
                CreateDirectoryInput.ParentId = DirectoryContentRequestInput.Id;
                await FileDescriptorAppService.RenameAsync(RenameContentId, RenameFileInput);

                await GetDirectoryContentAsync();

                RenameFileModal.Hide();
            }
        }

        protected virtual async Task OpenFolderAsync(DirectoryContentDto content)
        {
            DirectoryContentRequestInput.Id = content.Id;
            DirectoryRoutes.Add(content);
            CollapseOrExpandDirectoryNode(false, content.Id);
            await GetDirectoryContentAsync();
        }

        protected virtual void CollapseOrExpandDirectoryNode(bool collapsed, Guid? id)
        {
            if (!id.HasValue)
            {
                DirectoryDescriptorTree.First().DirectoryDescriptorInfos.ForEach(x=> x.ChangeCollapsed(true));
                DirectoryDescriptorTree.First().ChangeCollapsed(false);
                return;
            }

            var directoryNode = DirectoryDescriptorTree.First().DirectoryDescriptorInfos.First(x => x.Id == id);
            if (collapsed)
            {
                directoryNode.ChangeCollapsed(true);
                foreach (var child in directoryNode.Children)
                {
                    CollapseOrExpandDirectoryNode(true, child.Id);
                }
            }
            else
            {
                directoryNode.ChangeCollapsed(false);
                if (directoryNode.ParentId.HasValue)
                {
                    CollapseOrExpandDirectoryNode(false, directoryNode.ParentId);
                }
            }
        }

        protected virtual async Task GoUpFolderAsync()
        {
            var parentRoute = DirectoryRoutes.ElementAtOrDefault(DirectoryRoutes.Count - 2);
            DirectoryContentRequestInput.Id = parentRoute?.Id;
            CollapseOrExpandDirectoryNode(true, DirectoryRoutes.Last().Id);
            DirectoryRoutes.RemoveAt(DirectoryRoutes.Count-1);
            await GetDirectoryContentAsync();
        }

        protected virtual Task OpenUploadFilesModalAsync()
        {
            FileManagementUploadFileModels.Clear();
            UploadFilesModal.Show();
            StateHasChanged();
            return Task.CompletedTask;
        }

        protected virtual Task CloseUploadFilesModalAsync()
        {
            UploadFilesModal.Hide();
            return Task.CompletedTask;
        }

        protected virtual async Task UploadFilesAsync()
        {
            await CheckPolicyAsync(FileManagementPermissions.FileDescriptor.Create);

            var preFilesInfo= await FileDescriptorAppService.GetPreInfoAsync(FileManagementUploadFileModels
                .Select(file => new FileUploadPreInfoRequest {FileName = file.Name}).ToList());

            if (preFilesInfo.Any(x => x.DoesExist))
            {
                var message = L["FilesWillBeOverrided", string.Join(',', preFilesInfo.Where(x => x.DoesExist).Select(x => x.FileName))];

                if (!await Message.Confirm(message))
                {
                    return;
                }
            }

            foreach (var fileModel in FileManagementUploadFileModels)
            {
                await FileDescriptorAppService.CreateAsync(new CreateFileInput
                {
                    Content = fileModel.Stream.ToArray(),
                    DirectoryId = DirectoryRoutes.LastOrDefault()?.Id,
                    Name = fileModel.Name,
                    MimeType = MimeTypeMap.GetMimeType(fileModel.Name.Split('.').Last().ToLower())
                });
            }

            await  GetDirectoryContentAsync();

            await CloseUploadFilesModalAsync();
        }

        protected virtual async Task SelectedFilesAsync(InputFileChangeEventArgs files)
        {
            var multipleFiles = files.GetMultipleFiles();

            var preFilesInfo = await FileDescriptorAppService.GetPreInfoAsync(multipleFiles
                .Select(file => new FileUploadPreInfoRequest {FileName = file.Name}).ToList());

            if (preFilesInfo.Any(x => x.DoesExist))
            {
                await Message.Info(L["FilesAlreadyExist"]);
            }

            foreach (var file in multipleFiles)
            {
                if (FileManagementUploadFileModels.Any(x => x.Name == file.Name))
                {
                    continue;
                }

                var fileModel = new FileManagementUploadFileModel
                {
                    ContentType = file.ContentType,
                    Name = file.Name,
                    Stream = new MemoryStream()
                };

                await file.OpenReadStream(file.Size).CopyToAsync(fileModel.Stream);

                if (fileModel.IsImages())
                {
                    fileModel.Url = $"data:{file.ContentType};base64,{Convert.ToBase64String(fileModel.Stream.ToArray())}";
                }

                FileManagementUploadFileModels.Add(fileModel);
            }

            StateHasChanged();
        }

        protected virtual void RemoveSelectedFile(FileManagementUploadFileModel file)
        {
            FileManagementUploadFileModels.Remove(file);
            StateHasChanged();
        }

        protected virtual async Task DownloadFile(DirectoryContentDto content)
        {
            var fileDescriptor = await FileDescriptorAppService.GetAsync(content.Id);
            var result = await AccessTokenProvider.RequestAccessToken();
            result.TryGetToken(out var token);

            var url = RemoteServiceOptions.Value.RemoteServices
                .GetConfigurationOrDefault(FileManagementHttpApiClientModule.RemoteServiceName).BaseUrl
                .EnsureEndsWith('/') + DownloadEndpoint + content.Id;

            using (var httpClient = HttpClientFactory.CreateClient())
            {
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token.Value);
                var fileSteam = await httpClient.GetStreamAsync(url);
                var memoryStream = new MemoryStream();
                await fileSteam.CopyToAsync(memoryStream);

                await JsRuntime.InvokeVoidAsync("fileManagementPage.downloadFile", content.Name, memoryStream.ToArray(), fileDescriptor.MimeType);
            }
        }

        protected virtual async Task OpenMoveContentModalAsync(Guid contentId, bool isDirectory = false, bool reBuildRoute = false)
        {
            MoveDirectory = isDirectory;
            MovingContentId = contentId;
            ReBuildRoute = reBuildRoute;

            MoveFileDirectoryRoutes.Clear();
            await GetMoveDirectoryContents(null);

            MoveContentModal.Show();
        }

        protected virtual Task CloseMoveContentModalAsync()
        {
            MoveContentModal.Hide();
            return Task.CompletedTask;
        }

        protected virtual async Task GetMoveDirectoryContents(DirectoryContentDto content)
        {
            if (content != null)
            {
                MoveFileDirectoryRoutes.Add(content);
            }

            NewDirectoryId = content?.Id;
            var result = await DirectoryDescriptorAppService.GetContentAsync(new DirectoryContentRequestInput {Id = content?.Id});

            var filter = result.Items.Where(x => x.IsDirectory);

            if (MoveDirectory)
            {
                filter = filter.Where(x => x.Id != MovingContentId);
            }

            MoveDirectoryContents = filter.ToList();

            StateHasChanged();
        }

        protected virtual async Task MoveContentAsync()
        {
            if (MoveDirectory)
            {
                await CheckPolicyAsync(FileManagementPermissions.DirectoryDescriptor.Update);

                await DirectoryDescriptorAppService.MoveAsync(new MoveDirectoryInput
                {
                    Id = MovingContentId,
                    NewParentId = NewDirectoryId
                });

                await InitDirectoryDescriptorTreeAsync();

                if (ReBuildRoute)
                {
                    await OnSelectedDirectoryNodeChangedAsync(DirectoryDescriptorTree.First().DirectoryDescriptorInfos.First(x=>x.Id == MovingContentId));
                }
            }
            else
            {
                await CheckPolicyAsync(FileManagementPermissions.FileDescriptor.Update);

                await FileDescriptorAppService.MoveAsync(new MoveFileInput
                {
                    Id = MovingContentId,
                    NewDirectoryId = NewDirectoryId
                });
            }

            await GetDirectoryContentAsync();
            MoveFileDirectoryRoutes.Clear();
            await CloseMoveContentModalAsync();
        }

        protected virtual async Task OnMoveContentDirectoryRoutingAsync(DirectoryContentDto content)
        {
            if (content != null)
            {
                var index = MoveFileDirectoryRoutes.IndexOf(content);
                MoveFileDirectoryRoutes.RemoveRange(index ,MoveFileDirectoryRoutes.Count - index);
            }
            else
            {
                MoveFileDirectoryRoutes.Clear();
            }
            await GetMoveDirectoryContents(content);
        }

        protected virtual async Task CheckPolicyAsync(string policyName)
        {
            await AuthorizationService.CheckAsync(policyName);
        }

        protected virtual string FormatBytes(int bytes)
        {
            var unit = 1024;
            if (bytes < unit) { return $"{bytes} B"; }

            var exp = (int)(Math.Log(bytes) / Math.Log(unit));
            return $"{bytes / Math.Pow(unit, exp):F2} {("KMGTPE")[exp - 1]}B";
        }
    }
}
