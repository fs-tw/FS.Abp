$(function () {
    var l = abp.localization.getResource("FileManagement");

    var directoryDescriptorService = volo.fileManagement.directories.directoryDescriptor;
    var fileDescriptorService = volo.fileManagement.files.fileDescriptor;

    var UPPY_Dashboard = Uppy.Dashboard;
    var UPPY_XHRUpload  = Uppy.XHRUpload;

    var DOWNLOAD_ENDPOINT = '/api/file-management/file-descriptor/download';

    var UPLOAD_ENDPOINT = '/api/file-management/file-descriptor/upload';
    
    var directoryRenameModal = new abp.ModalManager({
        viewUrl: abp.appPath + "FileManagement/Directory/ChangeNameModal",
        scriptUrl: "/Pages/FileManagement/Directory/changeNameModal.js",
        modalClass: "directoryChangeNameModal"
    });

    var directoryCreateModal = new abp.ModalManager({
        viewUrl: abp.appPath + "FileManagement/Directory/CreateModal",
        scriptUrl: "/Pages/FileManagement/Directory/createModal.js",
        modalClass: "directoryCreateModal"
    });

    var fileRenameModal = new abp.ModalManager({
        viewUrl: abp.appPath + "FileManagement/File/ChangeNameModal",
        scriptUrl: "/Pages/FileManagement/File/changeNameModal.js",
        modalClass: "fileChangeNameModal"
    });

    var fileMoveModal = new abp.ModalManager({
        viewUrl: abp.appPath + "FileManagement/File/MoveModal",
        scriptUrl: "/Pages/FileManagement/File/moveModal.js",
        modalClass: "fileMoveModal"
    });
    
    var fileManagementPermissions = {
        Directory: abp.auth.isGranted("FileManagement.DirectoryDescriptor"),
        Directory_Create: abp.auth.isGranted("FileManagement.DirectoryDescriptor.Create"),
        Directory_Update: abp.auth.isGranted("FileManagement.DirectoryDescriptor.Update"),
        Directory_Delete: abp.auth.isGranted("FileManagement.DirectoryDescriptor.Delete"),
        
        File: abp.auth.isGranted("FileManagement.FileDescriptor"),
        File_Create: abp.auth.isGranted("FileManagement.FileDescriptor.Create"),
        File_Update: abp.auth.isGranted("FileManagement.FileDescriptor.Update"),
        File_Delete: abp.auth.isGranted("FileManagement.FileDescriptor.Delete")
    };
   
    function Get_UPPY_Headers(){
        var headers = {};
        headers[abp.security.antiForgery.tokenHeaderName] = abp.security.antiForgery.getToken();

        return headers;
    };
    
    var fileManagementPage = {
        // declarations
        
        $directoryContentTable: $('#DirectoryContentTable'),
        
        $tableSearchInput: $('form.page-search-form input.page-search-filter-text'),
        
        directoryId: {
            get: function(){
                var staticId = fileManagementPage.$directoryContentTable.attr('directory-id');

                return staticId === undefined || staticId === '' ? null : staticId;
            },

            set: function (id, byTree) {
                id = id === undefined || id === null ? '' : id;
                byTree = byTree !== undefined;

                fileManagementPage.$directoryContentTable.attr('directory-id', id);
                
                this.set_goUp_btn(id);
                this.set_uppy_xhr(id);
                
                if(byTree){
                    fileManagementPage.dataTable.ajax.reload();
                }else{
                    fileManagementPage.dataTable.ajax.reload();
                    fileManagementPage.tree.selectNode(this.get());
                }
                
                fileManagementPage.route.reDraw(id);
            },
            
            set_goUp_btn: function (selected_id) {
                var $btn = $('#GoBackBtn');
                
                if(selected_id === ''){
                    $btn.attr('disabled', true);
                }else{
                    directoryDescriptorService.get(selected_id).then(function(result){
                        $btn.attr('disabled', false);
                        $btn.attr('directory-id', result.parentId);
                    });
                }
            },
            
            set_uppy_xhr: function(selected_id){
                if(selected_id === ''){
                    fileManagementPage.uppy.XHR_Options.endpoint = UPLOAD_ENDPOINT;
                }else{
                    fileManagementPage.uppy.XHR_Options.endpoint = UPLOAD_ENDPOINT + '?directoryId=' + selected_id;
                }
                                
                var uppyXHR = fileManagementPage.uppy.uppy.getPlugin('XHRUpload');
                
                if(uppyXHR){
                    fileManagementPage.uppy.uppy.removePlugin(uppyXHR);
                }
                
                fileManagementPage.uppy.uppy.use(UPPY_XHRUpload, fileManagementPage.uppy.XHR_Options);
            }
        },
        
        uppy: {
            uppy: null,

            XHR_Options: {
                endpoint: UPLOAD_ENDPOINT,
                formData: true,
                fieldName: 'file',
                headers: Get_UPPY_Headers()
            },
            
            dashboard: {
                dashboard: null,
                
                get: function(){
                    if(this.dashboard === null){
                        fileManagementPage.uppy.dashboard.dashboard = fileManagementPage.uppy.uppy.getPlugin('Dashboard');
                        return this.dashboard;
                    }else{
                        return this.dashboard;
                    }
                }
            },
            
            openModal: function(){
                var dashboard = fileManagementPage.uppy.dashboard.get();
                if (!dashboard.isModalOpen()) {
                    dashboard.openModal();
                }
            },
            
            closeModal: function(){
                fileManagementPage.uppy.files = [];
                
                var dashboard = fileManagementPage.uppy.dashboard.get();
                if (dashboard.isModalOpen()) {
                    dashboard.closeModal();
                }
            },
            
            checkedBeforeUpload: false,
            // functions
            
            sliceByStatus: function(fileInfoResult){
                var result = { alreadyExists: [], notValidName: [] }
                
                fileInfoResult.forEach(function(item){
                    if(item.doesExist){
                        result.alreadyExists.push(item);
                    }

                    if(!item.hasValidName){
                        result.notValidName.push(item);
                    }
                });
                
                return result;
            },
            
            handle_FilePreInfo: function(file, result){
                if(!result.hasValidName){
                    this.invalidFileName(file);
                }else if(result.doesExist){
                    this.existFile(file);
                }
            },
            
            invalidFileName: function(file){
                this.uppy.info(l('FileManagement:0002').replace('{FileName}', file.data.name), 'error', 7000);
            },
            
            existFile: function(file){
                this.uppy.info(l('FilesAlreadyExist'), 'warning', 7000);
            },
            
            startUpload: function(){
                fileManagementPage.uppy.checkedBeforeUpload = true;
                this.uppy.upload();
                fileManagementPage.uppy.checkedBeforeUpload = false;
            },
            
            confirmOverride: function(result){
                if(result){
                    fileManagementPage.uppy.startUpload();
                }
            },
            
            // events
            on_before_upload: function(files){
                
                if(fileManagementPage.uppy.checkedBeforeUpload){
                    return true;
                }
                
                var requestPayload = [];
                var directoryId = fileManagementPage.directoryId.get();
                for (var fileId in files){
                    requestPayload.push({
                        directoryId: directoryId,
                        fileName: files[fileId].meta.name,
                        size: files[fileId].size
                    })
                }

                fileDescriptorService.getPreInfo(requestPayload).then(function(result){
                    var slicedInfo = fileManagementPage.uppy.sliceByStatus(result);
                    
                    if(slicedInfo.notValidName.length === 0 && slicedInfo.alreadyExists.length === 0){
                        // TODO: upgrade it by using promises etc. check startUpload!
                        
                        fileManagementPage.uppy.startUpload();
                    }
                    
                    if(slicedInfo.notValidName.length === 0 && slicedInfo.alreadyExists.length > 0){
                        var fileNames = slicedInfo.alreadyExists.map(x => "'" + x.fileName + "'");
                        abp.message.confirm(l('FilesWillBeOverrided', fileNames), fileManagementPage.uppy.confirmOverride);
                    }
                    
                    if(slicedInfo.notValidName.length > 0){
                        var fileNames = slicedInfo.notValidName.map(x => "'" + x.fileName + "'");
                        abp.message.error(l('NotValidFileNames', fileNames));
                    }
                });
                
                return false;
            },
            
            on_file_added: function (file) {
                fileDescriptorService.getPreInfo([{
                    directoryId: fileManagementPage.directoryId.get(),
                    fileName: file.data.name
                }]).then(function(result){
                    fileManagementPage.uppy.handle_FilePreInfo(file, result[0]);
                });
            },
            
            on_file_edited: function(){
                
            },
            
            on_complete: function(result){
                
            }
        },
        
        dataTable: null,
        
        tree: {
            $tree: $('#DirectoryTree'),

            $emptyInfo: $('#DirectoryTreeEmptyInfo'),
            
            show: function () {
                this.$emptyInfo.hide();
                this.$tree.show();
            },

            hide: function () {
                this.$emptyInfo.show();
                this.$tree.hide();
            },
            
            unitCount: 0,

            setUnitCount: function (unitCount) {
                this.unitCount = unitCount;
                if (unitCount) {
                    this.show();
                } else {
                    this.hide();
                }
            },
            
            addNode: function(parent, node){
                this.$tree.jstree('create_node', parent, node);
            },
            
            deleteNode: function(obj){
                this.$tree.jstree('delete_node', obj);
            },
            
            getNode: function(id){
                id = id === undefined || id === null ? 'root-node' : id;

                return this.$tree.jstree('get_node', id);
            },
            
            openNode: function(node){
                this.$tree.jstree('open_node', node);
            },
            
            moveNode: function(nodeId, parentId){
                this.$tree.jstree('move_node', nodeId, parentId);
            },
            
            openTo: function(node){
                this.$tree.jstree()._open_to(node.id);
            },
            
            deselect_all: function(){
                 this.$tree.jstree('deselect_all');
            },
                        
            addChildren: function(parentId, children, thenOpen){  
                var parentNode = this.getNode(parentId);
                this.deleteNode(parentNode.children);
                
                for(var i = 0; i < children.length; i++){
                    if(children[i].id === 'root-node'){
                        continue;
                    }
                    this.addNode(parentNode, children[i]);
                }

                this.$tree.jstree('redraw', true);
                
                if(thenOpen){
                    this.openNode(parentNode);
                }
            },
            
            selectNode: function(directoryId){
                this.deselect_all();
                
                this.getTreeDataFromServer(directoryId, function(data){
                    var deNormalizedId = fileManagementPage.tree.getDenormalizedId(directoryId);
                    
                    fileManagementPage.tree.addChildren(deNormalizedId, data, true);
                    
                    fileManagementPage.tree.highlightNode(deNormalizedId);
                });
            },
                        
            highlightNode: function(nodeId){
                $('li[id="' + nodeId + '"] > div:nth-child(1)').addClass('jstree-wholerow-clicked');
            },
            
            generateTextOnTree: function (directory) {
                var itemClass = ' pg-text-no-members';

                return '<span title="' + directory.name + '" class="pg-text text-muted' + itemClass + '" data-pg-id="' + directory.id + '">' + directory.name + '</span>';
            },

            generateTreeData: function(directories){
                var treeData = [];
                
                if(directories && directories.length > 0){
                    for(var i = 0; i < directories.length; i++){
                        var item = directories[i];
                        
                        treeData.push({
                            id: item.id,
                            parent: item.parentId ? item.parentId : 'root-node',
                            name: item.name,
                            text: fileManagementPage.tree.generateTextOnTree(item),
                            //children: item.hasChildren,
                            state: {
                                opened: (item.id === 'root-node')
                            }
                        });
                    }
                }
                
                return treeData;
            },

            getTreeDataFromServer: function (parentId, callback) {
                directoryDescriptorService.getList(parentId).then(function (result) {

                    if(parentId == null){
                        result.items = [{ id: 'root-node', name: l('AllFiles'), parentId: '#', hasChildDirectory: result.items.length > 0 }].concat(result.items);
                    }

                    var treeData = fileManagementPage.tree.generateTreeData(result.items);
                    
                    if(callback){
                        callback(treeData);
                    }
                });
            },
                        
            getNormalizedId: function(id){
                return id === '#' || id === 'root-node' ? null : id;
            },
            
            getDenormalizedId: function(id){
                return id === null ? 'root-node' : id;
            },
                    
            on_move: function (e, data) {
                if(data.parent === 'root-node' && (data.old_parent === '#' || data.old_parent === 'root-node')){
                    return;
                }
                
                if((!data.parent || data.parent === '#')){
                    fileManagementPage.tree.moveNode(data.node.id, 'root-node');
                    return;
                }
                
                var parentNodeName = (!data.parent || data.parent === '#' || data.parent === 'root-node')
                    ? l('AllFiles')
                    : fileManagementPage.tree.getNode(data.parent).original.name;

                abp.message.confirm(
                    l('DirectoryMoveConfirmMessage', data.node.original.name, parentNodeName),
                    l('AreYouSure'),
                    function (isConfirmed) {
                        if (isConfirmed) {
                            directoryDescriptorService.move({
                                id: data.node.id,
                                newParentId: data.parent === 'root-node' || data.parent === '#' ? null : data.parent
                            }).done(function () {
                                abp.notify.success(l('SuccessfullyMoved'));
                                fileManagementPage.dataTable.ajax.reload();
                            }).fail(function (err) {
                                fileManagementPage.tree.$tree.jstree('refresh'); //rollback
                                setTimeout(function () { abp.message.error(err.message); }, 500);
                            });
                        } else {
                            fileManagementPage.tree.$tree.jstree('refresh'); //rollback
                        }
                    }
                );
            },
            
            on_select: function (e, data) {
                var selectedId = fileManagementPage.tree.getNormalizedId(data.selected[0]);
                
                fileManagementPage.directoryId.set(selectedId, true);
                fileManagementPage.tree.selectNode(selectedId);
            },
            
            on_loaded: function(e, data){
                var directoryId = fileManagementPage.directoryId.get();
                var deNormalizedId = fileManagementPage.tree.getDenormalizedId(directoryId);
                
                fileManagementPage.tree.highlightNode(deNormalizedId);
            },
            
            getSettings: function(treeData){
                return {
                    'core': {
                        data: treeData,
                        multiple: false,
                        check_callback: true
                    },
                    "dnd" : {
                        "is_draggable" : function(node) {
                            return fileManagementPermissions.Directory_Update && node[0].id !== 'root-node';
                        }
                    },
                    types: {
                        "default": {
                            "icon": "fa fa-folder text-primary"
                        },
                        "file": {
                            "icon": "fa fa-file text-primary"
                        }
                    },
                    sort: function (node1, node2) {
                        if (this.get_node(node2).original.name < this.get_node(node1).original.name) {
                            return 1;
                        }

                        return -1;
                    },
                    plugins: [
                        'types',
                        'wholerow',
                        'sort',
                        'dnd'
                    ]
                }
            }
        },
        
        route: {
            $list: $('#DirectoryRouting'),
            
            reDraw: function(selectedNodeId){
                var selectedNode = fileManagementPage.tree.getNode(selectedNodeId);
                var parents = selectedNode.parents;
                this.$list.html('');

                this.$list.append('<li class="breadcrumb-item" directory-id=""><span>' + l('AllFiles') + '</span></li>');
                
                if(parents){
                    for(var i = 0; i < parents.length; i++){
                        var curId = parents[parents.length - 1 - i];
                        if(curId === 'root-node' || curId === '#' ){
                            continue;
                        }
                        this.$list.append('<li class="breadcrumb-item" directory-id="' + curId + '"><span>' + fileManagementPage.tree.getNode(curId).original.name + '</span></li>');
                    }

                    var selectedId = selectedNodeId === '#' ? '' : selectedNodeId;
                    this.$list.append('<li class="breadcrumb-item active" directory-id="' + selectedId + '"><span>' + selectedNode.original.name + '</span></li>');
                }
            }
        },
        
        // functions
        
        getDatatableFilter: function(){
            return {
                filter: $('#DirectoryContentFilter').val().trim(),
                id: fileManagementPage.directoryId.get()
            }
        },
        
        refresh: function(){
            this.directoryId.set(this.directoryId.get());
        },
        
        downloadFile: function(fileId){
            var downloadWindow = window.open(DOWNLOAD_ENDPOINT + '/' + fileId, '_blank');
            downloadWindow.focus();
        },
                
        formatSize: function(size, precision){
            if(!Number.isInteger(size)){
                size = size.toFixed(precision);
            }
            
            return size;
        },
                
        formatBytes: function(bytes, precision){
            if (bytes === 0 || bytes === 1) return bytes + ' Byte';

            var kilobyte = 1024;
            var megabyte = kilobyte * 1024;
            var gigabyte = megabyte * 1024;
            var terabyte = gigabyte * 1024;

            if (bytes >= terabyte) {
                return this.formatSize((bytes / terabyte), precision) + ' TB';

            } else if ((bytes >= gigabyte)) {
                return this.formatSize((bytes / gigabyte), precision) + ' GB';

            } else if ((bytes >= megabyte)) {
                return this.formatSize((bytes / megabyte), precision) + ' MB';

            } else if ((bytes >= kilobyte)) {
                return this.formatSize((bytes / kilobyte), precision) + ' KB';

            } else {
                return bytes + ' B';
            }
        },
        
        // inits
        
        initUppy: function(){
            fileManagementPage.uppy.uppy = Uppy.Core({
                onBeforeUpload: fileManagementPage.uppy.on_before_upload
            });
            
            fileManagementPage.uppy.uppy.use(UPPY_Dashboard, {
                inline: false,
                target: 'body',
                closeAfterFinish: true,
                showProgressDetails: true,
                height: 470,
                metaFields: [
                    { id: 'name', name: l('Name'), placeholder: l('FileName') }
                ],
                browserBackButtonClose: true,
                proudlyDisplayPoweredByUppy: false,
                onRequestCloseModal: fileManagementPage.uppy.closeModal,
                locale: {
                    strings: {
                        closeModal: l('CloseModal'),
                        addMoreFiles: l('AddMoreFiles'),
                        addingMoreFiles: l('AddingMoreFiles'),
                        importFrom: l('ImportFrom'),
                        dashboardWindowTitle: l('DashboardWindowTitle'),
                        dashboardTitle: l('DashboardTitle'),
                        copyLinkToClipboardSuccess: l('CopyLinkToClipboardSuccess'),
                        copyLinkToClipboardFallback: l('CopyLinkToClipboardFallback'),
                        copyLink: l('CopyLink'),
                        fileSource: l('FileSource'),
                        done: l('Done'),
                        back: l('Back'),
                        removeFile: l('RemoveFile'),
                        editFile: l('EditFile'),
                        editing: l('Editing'),
                        edit: l('Edit'),
                        finishEditingFile: l('FinishEditingFile'),
                        saveChanges: l('SaveChanges'),
                        myDevice: l('MyDevice'),
                        dropPasteImport: l('DropPasteImport'),
                        dropPaste: l('DropPaste'),
                        dropHint: l('DropHint'),
                        browse: l('Browse'),
                        uploadComplete: l('UploadComplete'),
                        uploadPaused: l('UploadPaused'),
                        resumeUpload: l('ResumeUpload'),
                        pauseUpload: l('PauseUpload'),
                        retryUpload: l('RetryUpload'),
                        cancelUpload: l('CancelUpload'),

                        xFilesSelected: {
                            0: l('FileSelected'),
                            1: l('NFileSelected')
                        },
                        uploadingXFiles: {
                            0: l('UploadingFile'),
                            1: l('NUploadingFile')
                        },
                        processingXFiles: {
                            0: l('ProcessingFile'),
                            1: l('NProcessingFile')
                        },

                        uploading: l('Uploading'),
                        complete: l('Complete'),

                        uploadFailed: l('UploadFailed'),
                        paused: l('Paused'),
                        retry: l('Retry'),
                        cancel: l('Cancel'),

                        filesUploadedOfTotal: {
                            0: l('FileUploadedOfTotal'),
                            1: l('NFileUploadedOfTotal')
                        },

                        dataUploadedOfTotal: l('DataUploadedOfTotal'),

                        xTimeLeft: l('XTimeLeft'),

                        uploadXFiles: {
                            0: l('UploadFile'),
                            1: l('UploadXFiles')
                        },

                        uploadXNewFiles: {
                            0: l('UploadNewFile'),
                            1: l('UploadXNewFile')
                        }
                    }
                }
            }).use(UPPY_XHRUpload, fileManagementPage.uppy.XHR_Options);
        },
        
        initDataTable: function(){
            var configuration = abp.libs.datatables.normalizeConfiguration({
                processing: true,
                serverSide: true,
                paging: false,
                searching: false,
                autoWidth: false,
                scrollCollapse: true,
                order: [1, "asc"],
                ajax: abp.libs.datatables.createAjax(directoryDescriptorService.getContent, fileManagementPage.getDatatableFilter),
                columnDefs: [
                    {
                        orderable: false,
                        title: l('Actions'),
                        width: "75px",
                        rowAction: {
                            items:
                                [
                                    {
                                        // This action for 
                                        text: l("Open"),
                                        visible: function(data){
                                            return data.isDirectory;
                                        },
                                        action: function (data) {
                                            fileManagementPage.directoryId.set(data.record.id);
                                        }
                                    },
                                    {
                                        text: l("Download"),
                                        visible: function(data){
                                            return !data.isDirectory && fileManagementPermissions.File;
                                        },
                                        action: function (data) {
                                            if(data.record.isDirectory){
                                                abp.message.error(l('CantDownloadFolderDescription'))
                                            }else{
                                                fileManagementPage.downloadFile(data.record.id);
                                            }
                                        }
                                    },
                                    {
                                        text: l("Rename"),
                                        visible: function(data){
                                            if(data.isDirectory){
                                                return fileManagementPermissions.Directory_Update;
                                            }else{
                                                return fileManagementPermissions.File_Update;
                                            }
                                        },
                                        action: function (data) {
                                            if(data.record.isDirectory){
                                                directoryRenameModal.open({ id: data.record.id });
                                            }else{
                                                fileRenameModal.open({ id: data.record.id });
                                            }
                                        }
                                    },
                                    {
                                        text: l("Move"),
                                        visible: function(data){
                                            return !data.isDirectory && fileManagementPermissions.File_Update;
                                        },
                                        action: function (data) {
                                            fileMoveModal.open({ id: data.record.id });
                                        }
                                    },
                                    {
                                        text: l("Delete"),
                                        visible: function(data){
                                            if(data.isDirectory){
                                                return fileManagementPermissions.Directory_Delete;
                                            }else{
                                                return fileManagementPermissions.File_Delete;
                                            }
                                        },
                                        confirmMessage: function (data) {
                                            if(data.record.isDirectory){
                                                return l("DirectoryDeleteConfirmationMessage");
                                            }else{
                                                return l("FileDeleteConfirmationMessage");
                                            }
                                        },
                                        action: function (data) {
                                            if(data.record.isDirectory){
                                                directoryDescriptorService.delete(data.record.id)
                                                    .then(function () {
                                                        abp.notify.info(l("SuccessfullyDeleted"));

                                                        fileManagementPage.refresh();
                                                    });
                                            }else{
                                                fileDescriptorService.delete(data.record.id)
                                                    .then(function () {
                                                        abp.notify.info(l("SuccessfullyDeleted"));

                                                        fileManagementPage.refresh();
                                                    });
                                            }
                                        }
                                    }
                                ]
                        }
                    },
                    {
                        type: "name",
                        title: l('Name'),
                        data: "name",
                        render: function(data, type, row){
                            if(row.isDirectory){
                                return '<span class="directoryName" directory-name="' + data + '" directory-id="' + row.id + '"><i class="directory-content-icon fa fa-folder text-primary text-center mr-1"></i>' + data + '</span>';
                            }else{
                                var fileIcon = "";
                                if(row.iconInfo.type === 0){
                                    // font-awesome
                                    fileIcon = '<i class="directory-content-icon ' + row.iconInfo.icon + ' text-muted text-center mr-1"></i>';
                                }else{
                                    // url
                                    fileIcon = '<span class="directory-content-icon mr-1" style="background-image: url(' + row.iconInfo.icon + ')"></span>';
                                }

                                return '<span class="fileName" file-name="' + data + '" file-id="' + row.id + '">' + fileIcon + data + '</span>';
                            }
                        }
                    },
                    {
                        type: "size",
                        title: l('Size'),
                        data: 'size',
                        width: "100px",
                        visible: fileManagementPermissions.File,
                        render: function(data, type, row){
                            if(row.isDirectory){
                                return '';
                            }

                            return '<span real-size="' + data + '">' + fileManagementPage.formatBytes(data, 2) + '</span>';
                        }
                    }
                ]
            });

            configuration.language.infoEmpty = l('FileManagement:Datatable:InfoEmpty');
            configuration.language.info = l('FileManagement:Datatable:Info');
            
            fileManagementPage.dataTable = fileManagementPage.$directoryContentTable.DataTable(configuration);
        },
        
        initTree: function(){
            this.tree.getTreeDataFromServer(fileManagementPage.directoryId.get(), function (treeData) {
                fileManagementPage.tree.setUnitCount(treeData.length);

                fileManagementPage.tree.$tree
                    .on('select_node.jstree', fileManagementPage.tree.on_select)
                    .on('move_node.jstree', fileManagementPage.tree.on_move)
                    .on('loaded.jstree', fileManagementPage.tree.on_loaded)
                    .jstree(fileManagementPage.tree.getSettings(treeData));
            });
        },
        
        initListeners: function(){
            var dataTableListeners = function(){
                fileManagementPage.$directoryContentTable.on('click', 'span.directoryName', function(){
                    fileManagementPage.directoryId.set($(this).attr('directory-id'));
                });

                if(fileManagementPermissions.File){
                    fileManagementPage.$directoryContentTable.on('click', 'span.fileName', function(){
                        fileManagementPage.downloadFile($(this).attr('file-id'));
                    });
                }

                $('form.page-search-form').submit(function (e) {
                    e.preventDefault();
                    fileManagementPage.dataTable.ajax.reload();
                });
            }
            
            var modalListeners = function(){
                directoryRenameModal.onResult(function () {
                    fileManagementPage.refresh();
                });

                directoryCreateModal.onResult(function () {
                    fileManagementPage.refresh();
                });

                fileRenameModal.onResult(function () {
                    fileManagementPage.dataTable.ajax.reload();
                });

                fileMoveModal.onResult(function () {
                    fileManagementPage.dataTable.ajax.reload();
                });
            }

            var pageListeners = function(){
                var $header_ButtonArea = $('#header-button-area');
                var $header_ButtonArea_2 = $('#header-button-area-2');

                if(fileManagementPermissions.Directory_Create){
                    $header_ButtonArea.on('click', 'button#CreateFolderBtn', function(){
                        directoryCreateModal.open({ parentId: fileManagementPage.directoryId.get() });
                    });
                }

                if(fileManagementPermissions.File_Create){
                    $header_ButtonArea.on('click', 'button#UploadFilesBtn', function(){
                        fileManagementPage.uppy.openModal();
                    });
                }

                $header_ButtonArea_2.on('click', 'button#GoBackBtn', function(){
                    fileManagementPage.directoryId.set($(this).attr('directory-id'));
                });
            }
            
            var uppyListeners = function(){
                if(!fileManagementPermissions.File_Create){
                    return;
                }
                
                fileManagementPage.uppy.uppy.on('dashboard:modal-closed', function () {
                    fileManagementPage.dataTable.ajax.reload();
                    fileManagementPage.uppy.uppy.reset();
                });

                fileManagementPage.uppy.uppy.on('file-added', fileManagementPage.uppy.on_file_added);
                fileManagementPage.uppy.uppy.on('dashboard:file-edit-complete', fileManagementPage.uppy.on_file_edited);
                fileManagementPage.uppy.uppy.on('complete', fileManagementPage.uppy.on_complete);
            }
            
            var routeListeners = function(){
                $('#DirectoryRouting').on('click', 'li:not(.active)', function () {
                    fileManagementPage.directoryId.set($(this).attr('directory-id'));
                })
            }
            
            dataTableListeners();
            modalListeners();
            pageListeners();
            uppyListeners();
            routeListeners();
        },
        
        init: function(){
            // order may be important

            fileManagementPage.initUppy();
            fileManagementPage.initDataTable();
            fileManagementPage.initTree();
            fileManagementPage.initListeners();
        }
    }
        
    fileManagementPage.init();
});