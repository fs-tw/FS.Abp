(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@abp/ng.theme.shared/extensions'), require('rxjs/operators'), require('rxjs'), require('@fs-tw/cms/proxy'), require('date-fns')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/config', ['exports', '@angular/core', '@abp/ng.core', '@abp/ng.theme.shared/extensions', 'rxjs/operators', 'rxjs', '@fs-tw/cms/proxy', 'date-fns'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.config = {}), global.ng.core, global.ng_core, global.extensions, global.rxjs.operators, global.rxjs, global['fs-tw'].cms.proxy, global.fns));
}(this, (function (exports, i0, ng_core, extensions, operators, rxjs, proxy, fns) { 'use strict';

    var ɵ0 = function (data) {
        return data.record.no == "CmsBlogNotClassified";
    };
    var DEFAULT_BLOG_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "number" /* Number */,
            name: 'sequence',
            displayName: 'Cms::FS.Blog.sequence',
            id: 'sequence',
            defaultValue: "",
        },
        //  {
        //   type: ePropType.String,
        //   name: 'no',
        //   displayName: 'Cms::FS.Blog.No',
        //   id: 'no',
        //   defaultValue: ""
        // },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Cms::FS.Blog.DisplayName',
            id: 'displayName',
            defaultValue: "",
            disabled: ɵ0
        },
        {
            type: "text" /* Text */,
            name: 'description',
            displayName: 'Cms::FS.Blog.Description',
            id: 'description',
            defaultValue: "",
        },
        {
            type: "boolean" /* Boolean */,
            name: 'disable',
            displayName: 'Cms::FS.Blog.Disable',
            id: 'disable',
            defaultValue: false,
        },
        {
            type: "string" /* String */,
            name: 'url',
            displayName: 'Cms::FS.Blog.url',
            id: 'url',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'listStyle',
            displayName: 'Cms::FS.Blog.listStyle',
            id: 'listStyle',
            defaultValue: "",
        },
    ]);

    var DEFAULT_BLOG_EDIT_FORM_PROPS = DEFAULT_BLOG_CREATE_FORM_PROPS;

    var ɵ0$1 = function (data) {
        var text = "";
        if (data.record.disable)
            text = "是";
        else
            text = "否";
        return rxjs.of(text);
    };
    var DEFAULT_BLOG_ENTITY_PROPS = extensions.EntityProp.createMany([
        // {
        //     type: ePropType.String,
        //     name: 'no',
        //     displayName: 'Cms::FS.Blog.No',
        //     sortable: true,
        //     columnWidth: 100,
        // },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Cms::FS.Blog.DisplayName',
            sortable: true,
            columnWidth: 50,
        },
        // {
        //     type: ePropType.String,
        //     name: 'description',
        //     displayName: 'Cms::FS.Blog.Description',
        //     sortable: true,
        //     columnWidth: 150,
        // },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Cms::FS.Blog.Disable',
            sortable: true,
            columnWidth: 50,
            valueResolver: ɵ0$1,
        },
    ]);

    var ActionItem = /** @class */ (function () {
        function ActionItem() {
        }
        return ActionItem;
    }());
    var ExtensionsService = /** @class */ (function () {
        function ExtensionsService() {
            var _a;
            this.Actions$ = (_a = {},
                _a["Cms::FS.Cms.Blogs" /* Blog */] = new rxjs.Subject(),
                _a["Cms::FS.Cms.PostManagement" /* Post */] = new rxjs.Subject(),
                _a["\u6A19\u7C64\u7DAD\u8B77" /* Tag */] = new rxjs.Subject(),
                _a);
        }
        ExtensionsService.prototype.action = function (type, data) {
            this.Actions$[type].next(data);
        };
        return ExtensionsService;
    }());
    ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
    ExtensionsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ExtensionsService.ctorParameters = function () { return []; };

    var ɵ0$2 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Cms::FS.Cms.Blogs" /* Blog */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Cms::FS.Cms.Blogs" /* Blog */, {
            name: 'Delete',
            record: data.record,
        });
    }, ɵ2 = function (data) {
        return data.record.no != "CmsBlogNotClassified";
    };
    var DEFAULT_BLOG_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$2,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1,
            visible: ɵ2
            //permission: 'AbpIdentity.Users.Delete',
        },
    ]);

    var ɵ0$3 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Cms::FS.Cms.Blogs" /* Blog */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_BLOG_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$3,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_POST_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'blogid',
            displayName: 'Cms::FS.Post.BlogId',
            id: 'blogid',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'title',
            displayName: 'Cms::FS.Post.Title',
            id: 'title',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'subtitle',
            displayName: 'Cms::FS.Post.Subtitle',
            id: 'subtitle',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'url',
            displayName: 'Cms::FS.Post.Url',
            id: 'url',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'content',
            displayName: 'Cms::FS.Post.Content',
            id: 'content',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Cms::FS.Post.Disable',
            id: 'disable',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'startTime',
            displayName: 'Cms::FS.Post.StartTime',
            id: 'startTime',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'endTime',
            displayName: 'Cms::FS.Post.EndTime',
            id: 'endTime',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'displaymode',
            displayName: 'Cms::FS.Post.DisplayMode',
            id: 'displaymode',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'sequence',
            displayName: 'Cms::FS.Post.Sequence',
            id: 'sequence',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'attachmentfileurls',
            displayName: 'Cms::FS.Post.AttachmentFileUrls',
            id: 'attachmentfileurls',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'postimages',
            displayName: 'Cms::FS.Post.PostImages',
            id: 'postimages',
            defaultValue: "",
        },
    ]);

    var DEFAULT_POST_EDIT_FORM_PROPS = DEFAULT_POST_CREATE_FORM_PROPS;

    var ɵ0$4 = function (data) {
        var text = "";
        if (data.record.disable)
            text = "是";
        else
            text = "否";
        return rxjs.of(text);
    }, ɵ1$1 = function (data) {
        var text = "";
        if (data.record.displayMode == proxy.Fs.Cms.Posts.DisplayMode.內文)
            text = "內文";
        else
            text = "連結";
        return rxjs.of(text);
    }, ɵ2$1 = function (data) {
        var date = "";
        if (data.record.startTime)
            date = fns.format(new Date(data.record.startTime), 'yyyy-MM-dd');
        return rxjs.of(date);
    }, ɵ3 = function (data) {
        var date = "";
        if (data.record.endTime)
            date = fns.format(new Date(data.record.endTime), 'yyyy-MM-dd');
        return rxjs.of(date);
    };
    var DEFAULT_POST_ENTITY_PROPS = extensions.EntityProp.createMany([
        // {
        //     type: ePropType.String,
        //     name: 'blogid',
        //     displayName: 'Cms::FS.Post.BlogId',
        //     sortable: true,
        //     columnWidth: 100,
        // },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Cms::FS.Post.Disable',
            sortable: true,
            columnWidth: 50,
            valueResolver: ɵ0$4,
        },
        {
            type: "string" /* String */,
            name: 'title',
            displayName: 'Cms::FS.Post.Title',
            sortable: true,
            columnWidth: 100,
        },
        // {
        //     type: ePropType.String,
        //     name: 'subtitle',
        //     displayName: 'Cms::FS.Post.Subtitle',
        //     sortable: true,
        //     columnWidth: 150,
        // },
        // {
        //     type: ePropType.String,
        //     name: 'url',
        //     displayName: 'Cms::FS.Post.Url',
        //     sortable: true,
        //     columnWidth: 150,
        // },
        // {
        //     type: ePropType.String,
        //     name: 'content',
        //     displayName: 'Cms::FS.Post.Content',
        //     sortable: true,
        //     columnWidth: 150,
        // },
        {
            type: "string" /* String */,
            name: 'displaymode',
            displayName: 'Cms::FS.Post.DisplayMode',
            sortable: true,
            columnWidth: 50,
            valueResolver: ɵ1$1,
        },
        {
            type: "string" /* String */,
            name: 'starttime',
            displayName: 'Cms::FS.Post.StartTime',
            sortable: true,
            columnWidth: 50,
            valueResolver: ɵ2$1,
        },
        {
            type: "string" /* String */,
            name: 'endtime',
            displayName: 'Cms::FS.Post.EndTime',
            sortable: true,
            columnWidth: 50,
            valueResolver: ɵ3,
        },
    ]);

    var ɵ0$5 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Cms::FS.Cms.PostManagement" /* Post */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$2 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Cms::FS.Cms.PostManagement" /* Post */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_POST_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$5,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$2,
        },
    ]);

    var ɵ0$6 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Cms::FS.Cms.PostManagement" /* Post */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_POST_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$6,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_TAG_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Cms::FS.Tag.No',
            id: 'no',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Cms::FS.Tag.DisplayName',
            id: 'displayName',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Cms::FS.Tag.Description',
            id: 'description',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Cms::FS.Tag.Disable',
            id: 'disable',
            defaultValue: "",
        },
    ]);

    var DEFAULT_TAG_EDIT_FORM_PROPS = DEFAULT_TAG_CREATE_FORM_PROPS;

    var DEFAULT_TAG_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Cms::FS.Tag.No',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Cms::FS.Blog.DisplayName',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Cms::FS.Blog.Description',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Cms::FS.Blog.Disable',
            sortable: true,
            columnWidth: 150,
        }
    ]);

    var ɵ0$7 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$3 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_TAG_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$7,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$3,
        },
    ]);

    var ɵ0$8 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_TAG_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$8,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var EXTENSIONS_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configure,
            deps: [i0.Injector],
            multi: true,
        },
    ];
    function configure(injector) {
        return function () {
            var extensions$1 = injector.get(extensions.ExtensionsService);
            var configState = injector.get(ng_core.ConfigStateService);
            return extensions.getObjectExtensionEntitiesFromStore(configState, 'Cms')
                .pipe(operators.map(function (entities) { return ({}); }), extensions.mapEntitiesToContributors(configState, 'Cms'), operators.tap(function (objectExtensionContributors) {
                var _a, _b, _c, _d, _e;
                extensions.mergeWithDefaultActions(extensions$1.toolbarActions, (_a = {},
                    _a["Cms::FS.Cms.Blogs" /* Blog */] = DEFAULT_BLOG_TOOLBAR_ACTIONS,
                    _a["Cms::FS.Cms.PostManagement" /* Post */] = DEFAULT_POST_TOOLBAR_ACTIONS,
                    _a["\u6A19\u7C64\u7DAD\u8B77" /* Tag */] = DEFAULT_TAG_TOOLBAR_ACTIONS,
                    _a));
                extensions.mergeWithDefaultActions(extensions$1.entityActions, (_b = {},
                    _b["Cms::FS.Cms.Blogs" /* Blog */] = DEFAULT_BLOG_ENTITY_ACTIONS,
                    _b["Cms::FS.Cms.PostManagement" /* Post */] = DEFAULT_POST_ENTITY_ACTIONS,
                    _b["\u6A19\u7C64\u7DAD\u8B77" /* Tag */] = DEFAULT_TAG_ENTITY_ACTIONS,
                    _b));
                extensions.mergeWithDefaultProps(extensions$1.entityProps, (_c = {},
                    _c["Cms::FS.Cms.Blogs" /* Blog */] = DEFAULT_BLOG_ENTITY_PROPS,
                    _c["Cms::FS.Cms.PostManagement" /* Post */] = DEFAULT_POST_ENTITY_PROPS,
                    _c["\u6A19\u7C64\u7DAD\u8B77" /* Tag */] = DEFAULT_TAG_ENTITY_PROPS,
                    _c));
                extensions.mergeWithDefaultProps(extensions$1.createFormProps, (_d = {},
                    _d["Cms::FS.Cms.Blogs" /* Blog */] = DEFAULT_BLOG_CREATE_FORM_PROPS,
                    _d["Cms::FS.Cms.PostManagement" /* Post */] = DEFAULT_POST_CREATE_FORM_PROPS,
                    _d["\u6A19\u7C64\u7DAD\u8B77" /* Tag */] = DEFAULT_TAG_CREATE_FORM_PROPS,
                    _d));
                extensions.mergeWithDefaultProps(extensions$1.editFormProps, (_e = {},
                    _e["Cms::FS.Cms.Blogs" /* Blog */] = DEFAULT_BLOG_EDIT_FORM_PROPS,
                    _e["Cms::FS.Cms.PostManagement" /* Post */] = DEFAULT_POST_EDIT_FORM_PROPS,
                    _e["\u6A19\u7C64\u7DAD\u8B77" /* Tag */] = DEFAULT_TAG_EDIT_FORM_PROPS,
                    _e));
            }), operators.mapTo(true))
                .toPromise();
        };
    }

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

    var CMS_ROUTE_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routes) {
        // let shortcut = {
        //   path: '/cms',
        //   name: eCmsRouteNames.Cms,
        //   layout: eLayoutType.application,
        //   parentName: eThemeSharedRouteNames.Administration,
        //   iconClass: 'fa fa-folder-open',
        //   order: 6,
        //   //requiredPolicy: eCmsPolicyNames.DirectoryDescriptor,
        // };
        var cmsRoute = [
            {
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                path: '/cms',
                name: "Cms::FS.Cms.Core" /* Cms */,
                iconClass: 'fa fa-bookmark',
                layout: "application" /* application */,
                order: 2,
                // requiredPolicy: 'FS.Cms.Menu.前台內容管理',
                navConfig: {
                    name: "Cms::FS.Cms.Core" /* Cms */,
                    title: "Cms::FS.Cms.Core" /* Cms */,
                    doc: "Cms::FS.Cms.Core" /* Cms */
                }
            }
        ];
        var cmsBasicRoute = [
            {
                path: '/cms',
                name: "Cms::FS.Cms.Basic" /* Basic */,
                parentName: "Cms::FS.Cms.Core" /* Cms */,
                iconClass: 'fa fa-id-card-o',
                layout: "application" /* application */,
                order: 1
            },
            {
                path: '/cms/post',
                name: "Cms::FS.Cms.PostManagement" /* Post */,
                parentName: "Cms::FS.Cms.Basic" /* Basic */,
                // requiredPolicy: 'FS.Cms.Menu.前台內容管理.最新消息管理',
                iconClass: 'fa fa-university',
                order: 1,
            },
            {
                path: '/cms/post/detail',
                name: "Cms::FS.Cms.PostDetail" /* Post_Detail */,
                parentName: "Cms::FS.Cms.PostManagement" /* Post */,
                iconClass: 'fa fa-university',
                order: 1
            },
            {
                path: '/cms/post/detail/:postId',
                name: "Cms::FS.Cms.PostDetail.Id" /* Post_Detail_Id */,
                parentName: "Cms::FS.Cms.PostManagement" /* Post */,
                iconClass: 'fa fa-university',
                order: 1
            },
        ];
        return function () {
            routes.add(__spread(cmsRoute, cmsBasicRoute));
        };
    }

    var CmsConfigModule = /** @class */ (function () {
        function CmsConfigModule() {
        }
        CmsConfigModule.forRoot = function () {
            return {
                ngModule: CmsConfigModule,
                providers: [CMS_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS,],
            };
        };
        return CmsConfigModule;
    }());
    CmsConfigModule.decorators = [
        { type: i0.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActionItem = ActionItem;
    exports.CMS_ROUTE_PROVIDERS = CMS_ROUTE_PROVIDERS;
    exports.CmsConfigModule = CmsConfigModule;
    exports.ExtensionsService = ExtensionsService;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = CMS_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;
    exports.ɵc = EXTENSIONS_PROVIDERS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-config.umd.js.map
