!function(){function e(t,n,c){return(e=r()?Reflect.construct:function(e,t,n){var c=[null];c.push.apply(c,t);var o=new(Function.bind.apply(e,c));return n&&a(o,n.prototype),o}).apply(null,arguments)}function t(e,n,a){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(a){var c=Object.getOwnPropertyDescriptor(a,t);return c.get?c.get.call(n):c.value}})(e,n,a||e)}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=r();return function(){var n,a=i(e);if(t){var c=i(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{geDm:function(a,o,r){"use strict";r.r(o),r.d(o,"AbstractTemplateContentComponent",function(){return j}),r.d(o,"DEFAULT_TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTIONS",function(){return V}),r.d(o,"DEFAULT_TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROPS",function(){return F}),r.d(o,"DEFAULT_TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTIONS",function(){return B}),r.d(o,"GetTemplateDefinitions",function(){return A}),r.d(o,"InlineTemplateContentComponent",function(){return w}),r.d(o,"TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS",function(){return X}),r.d(o,"TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS",function(){return W}),r.d(o,"TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS",function(){return Q}),r.d(o,"TemplateContentService",function(){return G}),r.d(o,"TemplateContentsComponent",function(){return _}),r.d(o,"TemplateDefinitionService",function(){return L}),r.d(o,"TextTemplateManagementExtensionsGuard",function(){return Y}),r.d(o,"TextTemplateManagementModule",function(){return K}),r.d(o,"TextTemplateManagementState",function(){return D}),r.d(o,"TextTemplateManagementStateModel",function(){return R}),r.d(o,"TextTemplateManagementStateService",function(){return H}),r.d(o,"TextTemplatesComponent",function(){return q}),r.d(o,"\u02750",function(){return I}),r.d(o,"\u0275a",function(){return q}),r.d(o,"\u0275c",function(){return D}),r.d(o,"\u0275d",function(){return L}),r.d(o,"\u0275e",function(){return A}),r.d(o,"\u0275g",function(){return _}),r.d(o,"\u0275h",function(){return j}),r.d(o,"\u0275i",function(){return w}),r.d(o,"\u0275j",function(){return $}),r.d(o,"\u0275k",function(){return Y}),r.d(o,"\u0275l",function(){return X}),r.d(o,"\u0275m",function(){return Q}),r.d(o,"\u0275n",function(){return W});var u=r("fXoL"),s=r("3Pt+"),m=r("tyNb"),b=r("1REP"),f=r("vkgz"),d=r("nYR2"),T=r("eIep"),v=r("lJxs"),g=r("CqXF"),h=r("HmNo"),y=r("mrSG"),C=r("J7bl"),M=r("AcyG"),N=r("1kSV"),x=r("iWZL"),Z=r("rBLV"),O=r("ofXK");function S(e,t){if(1&e&&(u.ac(0,"option",26),u.Sc(1),u.Zb()),2&e){var n=t.$implicit;u.vc("ngValue",n.cultureName),u.Gb(1),u.Tc(n.displayName)}}function E(e,t){if(1&e&&(u.ac(0,"option",26),u.Sc(1),u.Zb()),2&e){var n=t.$implicit;u.vc("ngValue",n.cultureName),u.Gb(1),u.Tc(n.displayName)}}function k(e,t){if(1&e){var n=u.bc();u.Yb(0),u.ac(1,"div",1),u.ac(2,"div",2),u.ac(3,"h1",3),u.Sc(4),u.pc(5,"abpLocalization"),u.Zb(),u.Zb(),u.ac(6,"div",4),u.Vb(7,"abp-breadcrumb"),u.Zb(),u.ac(8,"div",5),u.Vb(9,"abp-page-toolbar",6),u.Zb(),u.Zb(),u.ac(10,"div",7),u.ac(11,"div",8),u.ac(12,"div",9),u.ac(13,"div",10),u.ac(14,"div",5),u.ac(15,"div",11),u.ac(16,"input",12),u.kc("ngModelChange",function(e){return u.Ic(n),u.oc().list.filter=e}),u.pc(17,"abpLocalization"),u.Zb(),u.ac(18,"div",13),u.ac(19,"button",14),u.kc("click",function(){return u.Ic(n),u.oc().list.get()}),u.Vb(20,"i",15),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(21,"div",8),u.Vb(22,"abp-extensible-table",16),u.Zb(),u.Zb(),u.Xb()}if(2&e){var a=t.ngIf,c=u.oc();u.Gb(4),u.Uc(" ",u.qc(5,8,"TextTemplateManagement::Menu:TextTemplates")," "),u.Gb(5),u.vc("record",a.items),u.Gb(7),u.vc("placeholder",u.qc(17,10,"AbpUi::PagerSearch"))("ngModel",c.list.filter),u.Gb(6),u.vc("actionsColumnWidth",170)("data",a.items)("recordsTotal",a.totalCount)("list",c.list)}}var G=function(){var e=function e(t){var n=this;p(this,e),this.restService=t,this.apiName="TextTemplateManagement",this.get=function(e){return n.restService.request({method:"GET",url:"/api/text-template-management/template-contents",params:{templateName:e.templateName,cultureName:e.cultureName}},{apiName:n.apiName})},this.restoreToDefault=function(e){return n.restService.request({method:"PUT",url:"/api/text-template-management/template-contents/restore-to-default",body:e},{apiName:n.apiName})},this.update=function(e){return n.restService.request({method:"PUT",url:"/api/text-template-management/template-contents",body:e},{apiName:n.apiName})}};return e.\u0275fac=function(t){return new(t||e)(u.hc(h.U))},e.\u0275prov=Object(u.Qb)({factory:function(){return new e(Object(u.hc)(h.U))},token:e,providedIn:"root"}),e}(),j=function(){var e=function(){function e(t){p(this,e),this.injector=t,this.templateContent={},this.fb=t.get(s.f),this.templateContentService=t.get(G),this.route=t.get(m.a),this.toaster=t.get(b.o)}return l(e,[{key:"ngOnInit",value:function(){this.form=this.fb.group({content:["",[s.A.required]]}),this.getData().subscribe()}},{key:"getData",value:function(){var e=this;return this.templateContentService.get({templateName:this.route.snapshot.params.name,cultureName:this.selectedCultureName}).pipe(Object(f.a)(function(t){e.templateContent=t,e.form.get("content").setValue(e.templateContent.content)}))}},{key:"save",value:function(e){var t=this;if(!this.form.invalid){this.busy=!0;var n=this.form.value.content;this.templateContentService.update({templateName:this.templateContent.name,cultureName:this.selectedCultureName,content:n}).pipe(Object(d.a)(function(){return t.busy=!1})).subscribe(function(){t.toaster.success("TextTemplateManagement::Success"),e&&e()})}}},{key:"restoreToDefault",value:function(){var e=this;this.busy=!0,this.templateContentService.restoreToDefault({templateName:this.templateContent.name,cultureName:this.selectedCultureName}).pipe(Object(T.a)(function(){return e.getData()}),Object(d.a)(function(){return e.busy=!1})).subscribe(function(){e.toaster.success("TextTemplateManagement::Success")})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Ub(u.w))},e.\u0275cmp=u.Ob({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e}(),w=function(){var e=function(e){n(o,e);var a=c(o);function o(e,t){var n;return p(this,o),(n=a.call(this,e)).injector=e,n.router=t,n}return l(o,[{key:"customizePerCulture",value:function(){this.router.navigateByUrl("/text-template-management/text-templates/contents/"+this.templateContent.name)}},{key:"save",value:function(){var e=this;t(i(o.prototype),"save",this).call(this,function(){e.router.navigateByUrl("/text-template-management/text-templates")})}}]),o}(j);return e.\u0275fac=function(t){return new(t||e)(u.Ub(u.w),u.Ub(m.j))},e.\u0275cmp=u.Ob({type:e,selectors:[["abp-inline-template-content"]],features:[u.Db],decls:49,vars:30,consts:[[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],[1,"col-lg-auto","pl-lg-0"],["role","alert",1,"alert","alert-danger",3,"innerHTML"],[1,"card"],[1,"card-header"],[1,"card-body"],["id","template-inline-content-form",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group"],["for","TemplateContent"],["id","TemplateContent","name","TemplateContent","rows","10","formControlName","content",1,"form-control",3,"disabled"],[1,"col","col-md-4"],["routerLink","/text-template-management/text-templates","role","button",1,"btn","btn-primary"],[1,"fa","fa-arrow-left","mr-1"],[1,"col","col-md-8"],[1,"float-right"],["id","save-content","type","button",1,"btn","btn-primary",3,"disabled","click"],["id","restore-to-default","type","button",1,"btn","btn-danger","ml-1",3,"disabled","click"],["id","edit-unique-localization","type","button",1,"btn","btn-link","ml-1",3,"disabled","click"]],template:function(e,t){1&e&&(u.ac(0,"div",0),u.ac(1,"div",1),u.ac(2,"h1",2),u.Sc(3),u.pc(4,"abpLocalization"),u.Zb(),u.Zb(),u.ac(5,"div",3),u.Vb(6,"abp-breadcrumb"),u.Zb(),u.Zb(),u.Vb(7,"div",4),u.pc(8,"abpLocalization"),u.ac(9,"div",5),u.ac(10,"div",6),u.ac(11,"label"),u.Sc(12),u.pc(13,"abpLocalization"),u.ac(14,"strong"),u.Sc(15),u.Zb(),u.Zb(),u.Zb(),u.ac(16,"div",7),u.ac(17,"form",8),u.ac(18,"div",9),u.ac(19,"div",10),u.ac(20,"div",11),u.ac(21,"label",12),u.Sc(22),u.pc(23,"abpLocalization"),u.Zb(),u.ac(24,"span"),u.Sc(25," * "),u.Zb(),u.ac(26,"textarea",13),u.Sc(27,"            "),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(28,"div",9),u.ac(29,"div",14),u.ac(30,"a",15),u.Vb(31,"i",16),u.ac(32,"span"),u.Sc(33),u.pc(34,"abpLocalization"),u.Zb(),u.Zb(),u.Zb(),u.ac(35,"div",17),u.ac(36,"div",18),u.ac(37,"button",19),u.kc("click",function(){return t.save()}),u.ac(38,"span"),u.Sc(39),u.pc(40,"abpLocalization"),u.Zb(),u.Zb(),u.ac(41,"button",20),u.kc("click",function(){return t.restoreToDefault()}),u.ac(42,"span"),u.Sc(43),u.pc(44,"abpLocalization"),u.Zb(),u.Zb(),u.ac(45,"button",21),u.kc("click",function(){return t.customizePerCulture()}),u.ac(46,"span"),u.Sc(47),u.pc(48,"abpLocalization"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&e&&(u.Gb(3),u.Uc(" ",u.qc(4,14,"TextTemplateManagement::Contents")," "),u.Gb(4),u.vc("innerHTML",u.qc(8,16,"TextTemplateManagement::InlineContentDescription"),u.Jc),u.Gb(5),u.Uc("",u.qc(13,18,"TextTemplateManagement::Name"),": "),u.Gb(3),u.Tc(t.templateContent.name),u.Gb(2),u.vc("formGroup",t.form),u.Gb(5),u.Tc(u.qc(23,20,"TextTemplateManagement::TemplateContent")),u.Gb(4),u.vc("disabled",t.busy),u.Gb(7),u.Tc(u.qc(34,22,"TextTemplateManagement::ReturnToTemplates")),u.Gb(4),u.vc("disabled",t.busy),u.Gb(2),u.Tc(u.qc(40,24,"TextTemplateManagement::SaveContent")),u.Gb(2),u.vc("disabled",t.busy),u.Gb(2),u.Tc(u.qc(44,26,"TextTemplateManagement::RestoreToDefault")),u.Gb(2),u.vc("disabled",t.busy),u.Gb(2),u.Tc(u.qc(48,28,"TextTemplateManagement::CustomizePerCulture")))},directives:[b.a,s.B,s.r,x.j,s.k,s.e,x.h,s.q,s.i,m.m],pipes:[h.H],encapsulation:2}),e}(),_=function(){var e=function(e){n(o,e);var a=c(o);function o(e,t){var n;return p(this,o),(n=a.call(this,e)).injector=e,n.configStateService=t,n.languages=[],n.referenceTemplateContent={content:""},n}return l(o,[{key:"ngOnInit",value:function(){this.languages=this.configStateService.getDeep("localization.languages"),this.selectedCultureName=this.languages[0].cultureName,this.referenceTemplateContent.cultureName=this.configStateService.getDeep("localization.currentCulture.cultureName"),t(i(o.prototype),"ngOnInit",this).call(this),this.getReferenceTemplateContent()}},{key:"getReferenceTemplateContent",value:function(){var e=this;this.templateContentService.get({templateName:this.route.snapshot.params.name,cultureName:this.referenceTemplateContent.cultureName}).subscribe(function(t){e.referenceTemplateContent=t})}},{key:"onChangeSelectedCultureName",value:function(){this.getData().subscribe()}}]),o}(j);return e.\u0275fac=function(t){return new(t||e)(u.Ub(u.w),u.Ub(h.m))},e.\u0275cmp=u.Ob({type:e,selectors:[["abp-template-contents"]],features:[u.Db],decls:66,vars:37,consts:[[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],[1,"col-lg-auto","pl-lg-0"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","target-culture-name"],["id","target-culture-name","name","target-culture-name",1,"culture-selector","custom-select","form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col"],["for","reference-content"],["id","reference-content","name","reference-content","rows","10","readonly","",1,"form-control",3,"value"],["id","template-inline-content-form",3,"formGroup"],["for","TemplateContent"],["id","TemplateContent","name","TemplateContent","rows","10","formControlName","content",1,"form-control",3,"disabled"],[1,"col","col-md-4"],["routerLink","/text-template-management/text-templates","role","button",1,"btn","btn-primary"],[1,"fa","fa-arrow-left","mr-1"],[1,"col","col-md-8"],[1,"float-right"],["id","save-content","type","button",1,"btn","btn-primary",3,"disabled","click"],["id","restore-to-default","type","button",1,"btn","btn-danger","ml-1",3,"disabled","click"],[3,"ngValue"]],template:function(e,t){1&e&&(u.ac(0,"div",0),u.ac(1,"div",1),u.ac(2,"h1",2),u.Sc(3),u.pc(4,"abpLocalization"),u.Zb(),u.Zb(),u.ac(5,"div",3),u.Vb(6,"abp-breadcrumb"),u.Zb(),u.Zb(),u.ac(7,"div",4),u.ac(8,"div",5),u.ac(9,"label"),u.Sc(10),u.pc(11,"abpLocalization"),u.ac(12,"strong"),u.Sc(13),u.Zb(),u.Zb(),u.Zb(),u.ac(14,"div",6),u.ac(15,"div",7),u.ac(16,"div",8),u.ac(17,"div",9),u.ac(18,"label",10),u.Sc(19),u.pc(20,"abpLocalization"),u.Zb(),u.ac(21,"select",11),u.kc("ngModelChange",function(e){return t.referenceTemplateContent.cultureName=e})("ngModelChange",function(){return t.getReferenceTemplateContent()}),u.Qc(22,S,2,2,"option",12),u.Zb(),u.Zb(),u.ac(23,"div",7),u.ac(24,"div",13),u.ac(25,"div",9),u.ac(26,"label",14),u.Sc(27),u.pc(28,"abpLocalization"),u.Zb(),u.ac(29,"textarea",15),u.Sc(30,"              "),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(31,"div",8),u.ac(32,"div",9),u.ac(33,"label",10),u.Sc(34),u.pc(35,"abpLocalization"),u.Zb(),u.ac(36,"select",11),u.kc("ngModelChange",function(e){return t.selectedCultureName=e})("ngModelChange",function(){return t.onChangeSelectedCultureName()}),u.Qc(37,E,2,2,"option",12),u.Zb(),u.Zb(),u.ac(38,"form",16),u.ac(39,"div",7),u.ac(40,"div",13),u.ac(41,"div",9),u.ac(42,"label",17),u.Sc(43),u.pc(44,"abpLocalization"),u.Zb(),u.ac(45,"span"),u.Sc(46," * "),u.Zb(),u.ac(47,"textarea",18),u.Sc(48,"                "),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(49,"div",7),u.ac(50,"div",19),u.ac(51,"a",20),u.Vb(52,"i",21),u.ac(53,"span"),u.Sc(54),u.pc(55,"abpLocalization"),u.Zb(),u.Zb(),u.Zb(),u.ac(56,"div",22),u.ac(57,"div",23),u.ac(58,"button",24),u.kc("click",function(){return t.save()}),u.ac(59,"span"),u.Sc(60),u.pc(61,"abpLocalization"),u.Zb(),u.Zb(),u.ac(62,"button",25),u.kc("click",function(){return t.restoreToDefault()}),u.ac(63,"span"),u.Sc(64),u.pc(65,"abpLocalization"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&e&&(u.Gb(3),u.Uc(" ",u.qc(4,19,"TextTemplateManagement::Contents")," "),u.Gb(7),u.Uc("",u.qc(11,21,"TextTemplateManagement::Name"),": "),u.Gb(3),u.Tc(t.templateContent.name),u.Gb(6),u.Tc(u.qc(20,23,"TextTemplateManagement::BaseCultureName")),u.Gb(2),u.vc("ngModel",t.referenceTemplateContent.cultureName),u.Gb(1),u.vc("ngForOf",t.languages),u.Gb(5),u.Tc(u.qc(28,25,"TextTemplateManagement::BaseContent")),u.Gb(2),u.vc("value",t.referenceTemplateContent.content),u.Gb(5),u.Tc(u.qc(35,27,"TextTemplateManagement::TargetCultureName")),u.Gb(2),u.vc("ngModel",t.selectedCultureName),u.Gb(1),u.vc("ngForOf",t.languages),u.Gb(1),u.vc("formGroup",t.form),u.Gb(5),u.Tc(u.qc(44,29,"TextTemplateManagement::TemplateContent")),u.Gb(4),u.vc("disabled",t.busy),u.Gb(7),u.Tc(u.qc(55,31,"TextTemplateManagement::ReturnToTemplates")),u.Gb(4),u.vc("disabled",t.busy),u.Gb(2),u.Tc(u.qc(61,33,"TextTemplateManagement::SaveContent")),u.Gb(2),u.vc("disabled",t.busy),u.Gb(2),u.Tc(u.qc(65,35,"TextTemplateManagement::RestoreToDefault")))},directives:[b.a,s.y,s.q,s.t,O.p,s.B,s.r,x.j,s.k,s.e,x.h,s.i,m.m,s.u,s.C],pipes:[h.H],encapsulation:2}),e}(),A=function(){var e=function e(t){p(this,e),this.payload=t};return e.type="[TextTemplateManagement] Get template definitions",e}(),L=function(){var e=function e(t){var n=this;p(this,e),this.restService=t,this.apiName="TextTemplateManagement",this.get=function(e){return n.restService.request({method:"GET",url:"/api/text-template-management/template-definitions/"+e},{apiName:n.apiName})},this.getList=function(e){return n.restService.request({method:"GET",url:"/api/text-template-management/template-definitions",params:{filterText:e.filterText,sorting:e.sorting,skipCount:e.skipCount,maxResultCount:e.maxResultCount}},{apiName:n.apiName})}};return e.\u0275fac=function(t){return new(t||e)(u.hc(h.U))},e.\u0275prov=Object(u.Qb)({factory:function(){return new e(Object(u.hc)(h.U))},token:e,providedIn:"root"}),e}(),R=function e(){p(this,e)},D=function(){var e=function(){function e(t){p(this,e),this.templateDefinitionService=t}return l(e,[{key:"fetchTemplateDefinitions",value:function(e,t){var n=e.patchState,a=t.payload;return this.templateDefinitionService.getList(a).pipe(Object(f.a)(function(e){return n({templateDefinitions:e})}))}}],[{key:"getTemplateDefinitions",value:function(e){return e.templateDefinitions}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.hc(L))},e.\u0275prov=u.Qb({token:e,factory:function(t){return e.\u0275fac(t)}}),Object(y.b)([Object(M.a)(A)],e.prototype,"fetchTemplateDefinitions",null),Object(y.b)([Object(M.e)()],e,"getTemplateDefinitions",null),e=Object(y.b)([Object(M.f)({name:"textTemplateManagement",defaults:{templateDefinitions:{items:[],totalCount:0}}})],e)}(),I="TextTemplateManagement.TextTemplates",q=function(){var e=function(){function e(t,n,a){p(this,e),this.list=t,this.store=n,this.router=a}return l(e,[{key:"ngOnInit",value:function(){this.hookToQuery()}},{key:"hookToQuery",value:function(){var e=this;this.list.hookToQuery(function(t){var n=t.filter,a=Object(y.e)(t,["filter"]);return e.store.dispatch(new A(Object.assign(Object.assign({},a),{filterText:n})))}).subscribe()}},{key:"editContents",value:function(e){this.router.navigate(["/text-template-management/text-templates/contents".concat(e.isInlineLocalized?"/inline":"","/").concat(e.name)])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Ub(h.F),u.Ub(M.g),u.Ub(m.j))},e.\u0275cmp=u.Ob({type:e,selectors:[["abp-text-templates"]],features:[u.Fb([h.F,{provide:C.d,useValue:I}])],decls:2,vars:3,consts:[[4,"ngIf"],[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],[1,"col-lg-auto","pl-lg-0"],[1,"col"],[3,"record"],["id","wrapper"],[1,"card"],[1,"card-body"],["id","data-tables-table-filter",1,"row"],[1,"input-group"],["type","search",1,"form-control",3,"placeholder","ngModel","ngModelChange"],[1,"input-group-append"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-search"],[3,"actionsColumnWidth","data","recordsTotal","list"]],template:function(e,t){1&e&&(u.Qc(0,k,23,12,"ng-container",0),u.pc(1,"async")),2&e&&u.vc("ngIf",u.qc(1,1,t.pagedData$))},directives:[O.q,b.a,C.m,s.e,s.q,s.t,C.h],pipes:[O.b,h.H],encapsulation:2}),Object(y.b)([Object(M.d)(D.getTemplateDefinitions)],e.prototype,"pagedData$",void 0),e}(),P=C.f.createMany([{type:"string",name:"displayName",displayName:"TextTemplateManagement::Name",columnWidth:300},{type:"boolean",name:"isInlineLocalized",displayName:"TextTemplateManagement::IsInlineLocalized",columnWidth:150},{type:"boolean",name:"isLayout",displayName:"TextTemplateManagement::IsLayout",columnWidth:150},{type:"string",name:"layout",displayName:"TextTemplateManagement::Layout",columnWidth:300},{type:"string",name:"defaultCultureName",displayName:"TextTemplateManagement::DefaultCultureName",columnWidth:150}]),U=C.e.createMany([{text:"TextTemplateManagement::EditContents",action:function(e){e.getInjected(q).editContents(e.record)},permission:"TextTemplateManagement.TextTemplates.EditContents"}]),z=C.n.createMany([]),V={"TextTemplateManagement.TextTemplates":U},B={"TextTemplateManagement.TextTemplates":z},F={"TextTemplateManagement.TextTemplates":P},X=new u.v("TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS"),Q=new u.v("TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS"),W=new u.v("TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS"),Y=function(){var e=function(){function e(t){p(this,e),this.injector=t}return l(e,[{key:"canActivate",value:function(){var e=this.injector.get(C.i),t=this.injector.get(X,null)||{},n=this.injector.get(Q,null)||{},a=this.injector.get(W,null)||{},c=this.injector.get(h.m);return Object(C.q)(c,"TextTemplateManagement").pipe(Object(v.a)(function(e){return{"TextTemplateManagement.TextTemplates":e.TextDefinition}}),Object(C.r)(c,"TextTemplateManagement"),Object(f.a)(function(c){Object(C.s)(e.entityActions,V,t),Object(C.s)(e.toolbarActions,B,n),Object(C.t)(e.entityProps,F,c.prop,a)}),Object(g.a)(!0))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.hc(u.w))},e.\u0275prov=u.Qb({token:e,factory:e.\u0275fac}),e}(),H=function(){var t=function(){function t(e){p(this,t),this.store=e}return l(t,[{key:"getTemplateDefinitions",value:function(){return this.store.selectSnapshot(D.getTemplateDefinitions)}},{key:"dispatchGetTemplateDefinitions",value:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.store.dispatch(e(A,n))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.hc(M.g))},t.\u0275prov=Object(u.Qb)({factory:function(){return new t(Object(u.hc)(M.g))},token:t,providedIn:"root"}),t}(),J=[{path:"",redirectTo:"text-templates",pathMatch:"full"},{path:"text-templates",component:h.r,canActivate:[h.g,h.N,Y],children:[{path:"",component:h.R,data:{requiredPolicy:"TextTemplateManagement.TextTemplates",replaceableComponent:{key:"TextTemplateManagement.TextTemplates",defaultComponent:q}}},{path:"contents",component:h.V,canActivate:[h.N],data:{requiredPolicy:"TextTemplateManagement.TextTemplates.EditContents"},children:[{path:"inline/:name",component:w,data:{replaceableComponent:{key:"TextTemplateManagement.InlineTemplateContent",defaultComponent:w}}},{path:":name",component:_,data:{replaceableComponent:{key:"TextTemplateManagement.TemplateContents",defaultComponent:_}}}]}]}],$=function(){var e=function e(){p(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Sb({type:e}),e.\u0275inj=u.Rb({imports:[[m.n.forChild(J)],m.n]}),e}(),K=function(){var e=function(){function e(){p(this,e)}return l(e,null,[{key:"forChild",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[{provide:X,useValue:t.entityActionContributors},{provide:Q,useValue:t.toolbarActionContributors},{provide:W,useValue:t.entityPropContributors},Y]}}},{key:"forLazy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new h.E(e.forChild(t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Sb({type:e}),e.\u0275inj=u.Rb({imports:[[$,M.c.forFeature([D]),x.a,h.o,Z.a,b.n,N.h]]}),e}()}}])}();