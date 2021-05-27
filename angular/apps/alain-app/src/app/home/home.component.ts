import { AuthService } from '@abp/ng.core';
import { Component, ViewChild } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { QuillEditorComponent, QuillService } from 'ngx-quill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dangerousHtml = `<h1>YinChang </h1>`;
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  @ViewChild(QuillEditorComponent) xx: QuillEditorComponent;
  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService,
    private QuillService: QuillService
  ) {}

  created(editor) {
    const range = editor.getSelection(true);
    var toolbar = editor.getModule('toolbar');
    let old = toolbar.handlers['image'];
    toolbar.handlers['image'] = function (x) {
      // hook before call
      var ret = old.apply(this);
      // hook after call
      console.log(x);
      return ret;
    };
    // toolbar.handlers['image']=function(){
    //   o();
    // }
    // toolbar.handlers['image']=(x)=>{
    //   Function.call(o);
    //   console.log(x);
    // }
    //console.log(toolbar.handlers['image']);
    // toolbar.handlers['image']+=(x)=>{
    //   console.log(x);
    // }
    console.log(toolbar);
    //toolbar.addHandler('image', (x=>{console.log(x)}));
    editor.insertEmbed(
      range.index,
      'image',
      'https://cloud.githubusercontent.com/assets/2264672/20601381/a51753d4-b258-11e6-92c2-1d79efa5bede.png',
      'user'
    );
  }
  login() {
    this.authService.navigateToLogin();
  }

  ngAfterViewInit() {
    this.QuillService.getQuill().then((x) => {
      console.log(x);
    });

    this.xx.onContentChanged.subscribe((x) => {
      console.log(x);
    });
    //console.log(this.xx);
  }
}
export function createHook(obj, targetFunction, hookFunction) {
  let temp = obj[targetFunction];
  obj[targetFunction] = function (...args) {
    let ret = temp.apply(this, args);
    if (ret && typeof ret.then === 'function') {
      return ret.then((value) => {
        hookFunction([value, args]);
        return value;
      });
    } else {
      hookFunction([ret, args]);
      return ret;
    }
  };
}
