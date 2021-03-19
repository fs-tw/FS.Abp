(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs-tw/theme-alain-ms/shared'), require('@fs-tw/theme-alain-ms/shared/extensions'), require('@abp/ng.core'), require('@abp/ng.theme.shared')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/admin/shared', ['exports', '@angular/core', '@fs-tw/theme-alain-ms/shared', '@fs-tw/theme-alain-ms/shared/extensions', '@abp/ng.core', '@abp/ng.theme.shared'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.admin = global['fs-tw'].cms.admin || {}, global['fs-tw'].cms.admin.shared = {}), global.ng.core, global.shared, global.extensions, global.i1, global.ng_theme_shared));
}(this, (function (exports, i0, shared, extensions, i1, ng_theme_shared) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var FileService = /** @class */ (function () {
        function FileService(restService, environmentService) {
            this.restService = restService;
            this.environmentService = environmentService;
        }
        FileService.prototype.getFileUrl = function (id) {
            if (!id)
                return "";
            return this.environmentService.getApiUrl() + ("/api/file/files/file-content" /* FileContentPath */ + "?id=" + id);
        };
        FileService.prototype.uploadFile = function (file, directoryId) {
            var formData = new FormData();
            formData.append("relativePath", null);
            formData.append("file", file);
            formData.append("name", file.name);
            formData.append("type", file.type);
            return this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/upload",
                body: formData,
                params: { directoryId: directoryId }
            });
        };
        FileService.prototype.getFileBlobById = function (id) {
            return this.restService.request({
                method: 'GET',
                url: "" + "/api/file/files/file-content" /* FileContentPath */,
                params: { id: id },
                responseType: 'blob'
            });
        };
        return FileService;
    }());
    FileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i1.EnvironmentService)); }, token: FileService, providedIn: "root" });
    FileService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    FileService.ctorParameters = function () { return [
        { type: i1.RestService },
        { type: i1.EnvironmentService }
    ]; };

    var ImageFile = /** @class */ (function () {
        function ImageFile(fileName, fileUrl) {
            if (fileName === void 0) { fileName = ''; }
            if (fileUrl === void 0) { fileUrl = ''; }
            this.fileName = fileName;
            this.fileUrl = fileUrl;
        }
        return ImageFile;
    }());
    var SaveFile = /** @class */ (function () {
        function SaveFile(fileName, fileUrl, file) {
            this.fileName = fileName;
            this.fileUrl = fileUrl;
            this.file = file;
            this.isUpload = this.file != null;
        }
        return SaveFile;
    }());
    var ViewImage = /** @class */ (function () {
        function ViewImage() {
            this.image = new ImageFile();
            this.isVisabled = false;
        }
        return ViewImage;
    }());
    var ImagePickerComponent = /** @class */ (function () {
        function ImagePickerComponent(toasterService, fileService) {
            var _this = this;
            this.toasterService = toasterService;
            this.fileService = fileService;
            /** 縮圖寬度，單位 px，預設 104px */
            this.imageWidth = '104px';
            /** 縮圖高度，單位 px ，預設 104px */
            this.imageHeight = '104px';
            /** 外框寬度，單位 px ，預設 104px */
            this.borderWidth = '104px';
            /** 外框高度，單位 px ，預設 104px */
            this.borderHeight = '104px';
            /** 上傳最大數量 */
            this.maxImageCount = null;
            /** 是否可同時選多張圖片 */
            this.isMultiple = true;
            /** 是否排列在同一行，同一行時行寬同 imageWidth */
            this.inLine = true;
            /** 上傳按鈕顯示於前面 */
            this.showFrontButton = true;
            /** 原已上傳圖片 */
            this.existFiles = [];
            /** 原已上傳圖片被刪除的檔名 */
            this.deleteFiles = [];
            /** 本次上傳所顯示圖片 */
            this.showFiles = [];
            /** 本次上傳圖片 */
            this.uploadFiles = [];
            /** 顯示預覽圖 modal */
            this.viewImage = new ViewImage();
            this.beforeUpload = function (file) {
                var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    _this.toasterService.error("圖片格式須為 jpg 或 png");
                    return false;
                }
                var fileName = file.name;
                var hasExistImage = _this.existFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
                var hasShowImage = _this.showFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
                if (hasExistImage || hasShowImage)
                    return false;
                var imgFile = file;
                _this.getBase64(imgFile, function (img) {
                    if (!_this.canUpload) {
                        _this.toasterService.error("圖片數已達上限");
                        return;
                    }
                    _this.uploadFiles.push(imgFile);
                    _this.showFiles.push(new ImageFile(fileName, img));
                });
                return false;
            };
        }
        Object.defineProperty(ImagePickerComponent.prototype, "canUpload", {
            get: function () {
                var imageNumber = this.existFiles.length + this.uploadFiles.length;
                return this.maxImageCount == null || imageNumber < this.maxImageCount;
            },
            enumerable: false,
            configurable: true
        });
        ImagePickerComponent.prototype.ngOnInit = function () {
        };
        ImagePickerComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.existFiles = this.existFiles
                .filter(function (x) { return x.fileUrl; })
                .map(function (x) { return new ImageFile(x.fileName, _this.fileService.getFileUrl(x.fileUrl)); });
            this.uploadFiles = [];
            this.showFiles = [];
            this.deleteFiles = [];
        };
        ImagePickerComponent.prototype.clear = function () {
            this.existFiles = [];
            this.deleteFiles = [];
            this.uploadFiles = [];
            this.showFiles = [];
        };
        ImagePickerComponent.prototype.getBase64 = function (img, callback) {
            var reader = new FileReader();
            reader.addEventListener('load', function () { return callback(reader.result.toString()); });
            reader.readAsDataURL(img);
        };
        ImagePickerComponent.prototype.deleteFile = function (fileName) {
            var inExistImage = this.existFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
            var inShowImage = this.showFiles.findIndex(function (x) { return x.fileName == fileName; }) > -1;
            // 現有圖片刪除
            if (inExistImage) {
                this.existFiles = this.existFiles.filter(function (x) { return x.fileName != fileName; });
                this.deleteFiles.push(fileName);
                return;
            }
            // 上傳圖片刪除
            if (inShowImage) {
                this.showFiles = this.showFiles.filter(function (x) { return x.fileName != fileName; });
                this.uploadFiles = this.uploadFiles.filter(function (x) { return x.name != fileName; });
            }
        };
        ImagePickerComponent.prototype.controllModal = function (state, image) {
            if (image === void 0) { image = new ImageFile(); }
            this.viewImage.image = image;
            this.viewImage.isVisabled = state;
        };
        ImagePickerComponent.prototype.getDeleteFileNames = function () {
            return this.deleteFiles;
        };
        ImagePickerComponent.prototype.getNewUploadFiles = function () {
            var updateFiles = this.uploadFiles.map(function (x) { return new SaveFile(x.name, '', x); });
            return updateFiles;
        };
        ImagePickerComponent.prototype.getUploadFiles = function () {
            var _this = this;
            var existFiles = this.existFiles.filter(function (x) { return !_this.deleteFiles.includes(x.fileName); }).map(function (x) { return new SaveFile(x.fileName, x.fileUrl, null); });
            var updateFiles = this.uploadFiles.map(function (x) { return new SaveFile(x.name, '', x); });
            return existFiles.concat(updateFiles);
        };
        return ImagePickerComponent;
    }());
    ImagePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'image-picker',
                    template: "<ng-template #Upload>\r\n    <nz-upload\r\n        class=\"avatar-uploader\" style=\"display: grid;\"\r\n        [nzListType]=\"uploadTemplate ? 'text' : 'picture'\"\r\n        [nzBeforeUpload]=\"beforeUpload\" \r\n        [nzMultiple]=\"isMultiple\"\r\n        >\r\n\r\n        <div *ngTemplateOutlet=\"uploadTemplate || UploadImage\"></div>\r\n        <ng-template #UploadImage>\r\n            <div class=\"divBorder divGridCenter\" [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\">\r\n                <div *ngTemplateOutlet=\"uploadTextTemplate || UploadText\"></div>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template #UploadText>\r\n            <div style=\"font-size: 16px; text-align: center;\">\r\n                <div class=\"ant-upload-text\">{{'Cms::FS.Message:Upload'|abpLocalization}}</div>\r\n            </div>\r\n        </ng-template>\r\n    </nz-upload>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n    <div class=\"divBorder imgGrid divGridCenter\" \r\n        [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\"\r\n        (click)=\"controllModal(true, item.file)\">\r\n\r\n        <div class=\"imgGridClose\">\r\n            <i (click)=\"deleteFile(item.file.fileName)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n        </div>\r\n\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-width: 100%;\" [ngStyle]=\"{ 'max-height': imageHeight }\" />\r\n    </div>\r\n</ng-template>\r\n\r\n<div [ngClass]=\"{ 'divGrid': inLine }\" [ngStyle]=\"{ 'grid-template-columns': inLine ? 'repeat(auto-fit, ' + borderWidth + ')' : 'unset' }\">\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u524D) -->\r\n    <ng-container *ngIf=\"canUpload && showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u50B3\u5165\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of existFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of showFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u5F8C) -->\r\n    <ng-container *ngIf=\"canUpload && !showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n    \r\n</div>\r\n\r\n<nz-modal [nzOkText]=\"null\" nzCancelText=\"{{'AbpUi::Cancel'|abpLocalization}}\" [nzWidth]=\"1000\"\r\n        nzTitle=\"{{'Cms::FS.Message:Preview'|abpLocalization}}\" \r\n        [(nzVisible)]=\"viewImage.isVisabled\" \r\n        (nzOnCancel)=\"controllModal(false, viewImage.image)\">\r\n    <div class=\"divGridCenter\">\r\n        <img [src]=\"viewImage.image.fileUrl\" style=\"max-width: 100%; max-height: 500px;\" />\r\n    </div>\r\n</nz-modal>",
                    styles: [".divBorder{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter{display:grid!important;place-items:center}.divGrid{display:grid;grid-gap:1rem}.imgGrid{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose i{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}::ng-deep .ant-upload.ant-upload-select-picture-card{margin:unset!important}::ng-deep .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"]
                },] }
    ];
    ImagePickerComponent.ctorParameters = function () { return [
        { type: ng_theme_shared.ToasterService },
        { type: FileService }
    ]; };
    ImagePickerComponent.propDecorators = {
        imageWidth: [{ type: i0.Input }],
        imageHeight: [{ type: i0.Input }],
        borderWidth: [{ type: i0.Input }],
        borderHeight: [{ type: i0.Input }],
        maxImageCount: [{ type: i0.Input }],
        isMultiple: [{ type: i0.Input }],
        imageTemplate: [{ type: i0.Input }],
        uploadTemplate: [{ type: i0.Input }],
        uploadTextTemplate: [{ type: i0.Input }],
        inLine: [{ type: i0.Input }],
        showFrontButton: [{ type: i0.Input }],
        existFiles: [{ type: i0.Input }]
    };

    var GetFileByIdPipe = /** @class */ (function () {
        function GetFileByIdPipe(environmentService) {
            this.environmentService = environmentService;
        }
        //TODO:if api route  this will broke;
        GetFileByIdPipe.prototype.transform = function (value) {
            return this.environmentService.getApiUrl() + ("/api/file/files/file-content" /* FileContentPath */ + "?id=" + value);
        };
        return GetFileByIdPipe;
    }());
    GetFileByIdPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'getFileById'
                },] }
    ];
    GetFileByIdPipe.ctorParameters = function () { return [
        { type: i1.EnvironmentService }
    ]; };

    var COMPONENT = [
        GetFileByIdPipe,
        ImagePickerComponent
    ];
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: __spread(COMPONENT),
                    imports: [
                        shared.ThemeAlainMsSharedModule,
                        extensions.UiExtensionsModule
                    ],
                    exports: __spread(COMPONENT, [
                        shared.ThemeAlainMsSharedModule,
                        extensions.UiExtensionsModule
                    ])
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FileService = FileService;
    exports.GetFileByIdPipe = GetFileByIdPipe;
    exports.ImageFile = ImageFile;
    exports.ImagePickerComponent = ImagePickerComponent;
    exports.SaveFile = SaveFile;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-admin-shared.umd.js.map
