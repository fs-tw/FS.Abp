(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{"MM+m":function(t,e,n){"use strict";n.r(e),n.d(e,"SettingManagementComponent",function(){return v}),n.d(e,"SettingManagementModule",function(){return y}),n.d(e,"\u0275a",function(){return S}),n.d(e,"\u0275c",function(){return f}),n.d(e,"\u0275d",function(){return m});var c=n("HmNo"),i=n("1REP"),a=n("AcyG"),o=n("quSY"),r=n("mrSG"),s=n("tyNb"),b=n("fXoL"),l=n("ofXK");function d(t,e){if(1&t){const t=b.bc();b.ac(0,"li",16),b.kc("click",function(){b.Ic(t);const e=b.oc().$implicit;return b.oc().selected=e}),b.ac(1,"a",17),b.Sc(2),b.pc(3,"abpLocalization"),b.Zb(),b.Zb()}if(2&t){const t=b.oc().$implicit,e=b.oc();b.Gb(1),b.Mb("active",t.name===e.selected.name),b.vc("id",t.name+"-tab"),b.Gb(1),b.Tc(b.qc(3,4,t.name))}}function p(t,e){if(1&t&&(b.Yb(0),b.Qc(1,d,4,6,"li",15),b.Xb()),2&t){const t=e.$implicit;b.Gb(1),b.vc("abpPermission",t.requiredPolicy)}}function u(t,e){1&t&&b.Wb(0)}function g(t,e){if(1&t&&(b.ac(0,"div",18),b.ac(1,"div",19),b.Qc(2,u,1,0,"ng-container",20),b.Zb(),b.Zb()),2&t){const t=b.oc();b.Gb(1),b.vc("id",t.selected.name+"-tab"),b.Gb(1),b.vc("ngComponentOutlet",t.selected.component)}}let m=(()=>{class t{constructor(t){this.payload=t}}return t.type="[SettingManagement] Set Selected Tab",t})(),f=(()=>{let t=class{static getSelectedTab({selectedTab:t}){return t}settingManagementAction({patchState:t},{payload:e}){t({selectedTab:e})}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=b.Qb({token:t,factory:function(e){return t.\u0275fac(e)}}),Object(r.b)([Object(a.a)(m)],t.prototype,"settingManagementAction",null),Object(r.b)([Object(a.e)()],t,"getSelectedTab",null),t=Object(r.b)([Object(a.f)({name:"SettingManagementState",defaults:{}})],t),t})(),v=(()=>{class t{constructor(t,e){this.store=t,this.settingTabsService=e,this.subscription=new o.a,this.settings=[],this.trackByFn=(t,e)=>e.name}set selected(t){this.store.dispatch(new m(t))}get selected(){const t=this.store.selectSnapshot(f.getSelectedTab);return(null==t?void 0:t.component)?t:this.settings[0]||{}}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){this.subscription.add(this.settingTabsService.visible$.subscribe(t=>{this.settings=t,this.selected||(this.selected=this.settings[0])}))}}return t.\u0275fac=function(e){return new(e||t)(b.Ub(a.g),b.Ub(c.Z))},t.\u0275cmp=b.Ob({type:t,selectors:[["abp-setting-management"]],decls:18,vars:6,consts:[[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],["id","breadcrumb",1,"col-lg-auto","pl-lg-0"],[1,"col"],["id","AbpContentToolbar",1,"text-lg-right","pt-2"],["id","SettingManagementWrapper"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-12","col-md-3"],["id","nav-tab","role","tablist",1,"nav","flex-column","nav-pills"],[4,"abpFor","abpForOf","abpForTrackBy"],[1,"col-12","col-md-9"],["class","tab-content",4,"ngIf"],["class","nav-item pointer",3,"click",4,"abpPermission"],[1,"nav-item","pointer",3,"click"],["role","tab",1,"nav-link",3,"id"],[1,"tab-content"],["role","tabpanel",1,"tab-pane","fade","show","active",3,"id"],[4,"ngComponentOutlet"]],template:function(t,e){1&t&&(b.ac(0,"div",0),b.ac(1,"div",1),b.ac(2,"h1",2),b.Sc(3),b.pc(4,"abpLocalization"),b.Zb(),b.Zb(),b.ac(5,"div",3),b.Vb(6,"abp-breadcrumb"),b.Zb(),b.ac(7,"div",4),b.Vb(8,"div",5),b.Zb(),b.Zb(),b.ac(9,"div",6),b.ac(10,"div",7),b.ac(11,"div",8),b.ac(12,"div",9),b.ac(13,"div",10),b.ac(14,"ul",11),b.Qc(15,p,2,1,"ng-container",12),b.Zb(),b.Zb(),b.ac(16,"div",13),b.Qc(17,g,3,2,"div",14),b.Zb(),b.Zb(),b.Zb(),b.Zb(),b.Zb()),2&t&&(b.Gb(3),b.Tc(b.qc(4,4,"AbpSettingManagement::Settings")),b.Gb(12),b.vc("abpForOf",e.settings)("abpForTrackBy",e.trackByFn),b.Gb(2),b.vc("ngIf",e.settings.length))},directives:[i.a,c.v,l.q,c.M,l.o],pipes:[c.H],encapsulation:2}),t})();const h=[{path:"",component:c.r,canActivate:[c.g],children:[{path:"",component:c.R,data:{requiredPolicy:"AbpAccount.SettingManagement",replaceableComponent:{key:"SettingManagement.SettingManagementComponent",defaultComponent:v}}}]}];let S=(()=>{class t{}return t.\u0275mod=b.Sb({type:t}),t.\u0275inj=b.Rb({factory:function(e){return new(e||t)},imports:[[s.n.forChild(h)],s.n]}),t})(),y=(()=>{class t{static forChild(){return{ngModule:t,providers:[]}}static forLazy(){return new c.E(t.forChild())}}return t.\u0275mod=b.Sb({type:t}),t.\u0275inj=b.Rb({factory:function(e){return new(e||t)},imports:[[S,c.o,i.n,a.c.forFeature([f])]]}),t})()}}]);