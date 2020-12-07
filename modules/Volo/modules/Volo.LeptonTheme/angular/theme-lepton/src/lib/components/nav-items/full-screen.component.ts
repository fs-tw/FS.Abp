import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abp-full-screen',
  template: `
    <a
      href="javascript:void(0);"
      class="btn"
      id="btnFullscreen"
      (click)="toggleFullscreen()"
      [class.expanded]="fullscreen"
    >
      <i class="fas fa-expand"></i>
      <i class="fas fa-compress"></i>
    </a>
  `,
})
export class FullScreenComponent {
  get fullscreen(): boolean {
    return window.innerHeight === screen.height;
  }

  toggleFullscreen() {
    const elem: any = document.documentElement;
    if (
      !document.fullscreenElement &&
      !(document as any).mozFullScreenElement &&
      !(document as any).webkitFullscreenElement &&
      !(document as any).msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }
}
