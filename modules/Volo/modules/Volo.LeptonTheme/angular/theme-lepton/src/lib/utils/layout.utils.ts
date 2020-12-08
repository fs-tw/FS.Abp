import { Layout } from '../models';
import { Renderer2 } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const addMenuPlacementClasses = (
  menuPlacement: Layout.MenuPlacement,
  renderer: Renderer2,
) => {
  if (menuPlacement === Layout.MenuPlacement.Top) {
    renderer.removeClass(document.body, 'lp-opened-sidebar');
    renderer.removeClass(document.body, 'lp-body-fixed');
    renderer.removeClass(document.body, 'lp-closed');
    renderer.addClass(document.body, 'lp-topmenu');
  } else {
    renderer.removeClass(document.body, 'lp-topmenu');
    renderer.addClass(document.body, 'lp-opened-sidebar');
  }
};

export const addMenuStatusClasses = (menuStatus: Layout.MenuStatus, renderer: Renderer2) => {
  if (menuStatus) {
    renderer.removeClass(document.body, 'lp-body-fixed');
    renderer.removeClass(document.body, 'lp-opened-sidebar');
    renderer.addClass(document.body, 'lp-closed');
  } else {
    renderer.addClass(document.body, 'lp-body-fixed');
    renderer.addClass(document.body, 'lp-opened-sidebar');
    renderer.removeClass(document.body, 'lp-closed');
  }
};

export const getLeptonStyle = (type: number): Observable<string> => {
  let leptonJs: Promise<{ default: string }>;

  switch (type) {
    case 1:
      leptonJs = import(
        /* webpackChunkName: "theme.lepton1" */
        /* webpackMode: "lazy" */
        '@volo/abp.ng.theme.lepton/dist/global/styles/lepton1'
      );
      break;
    case 2:
      leptonJs = import(
        /* webpackChunkName: "theme.lepton2" */
        /* webpackMode: "lazy" */
        '@volo/abp.ng.theme.lepton/dist/global/styles/lepton2'
      );
      break;
    case 3:
      leptonJs = import(
        /* webpackChunkName: "theme.lepton3" */
        /* webpackMode: "lazy" */
        '@volo/abp.ng.theme.lepton/dist/global/styles/lepton3'
      );
      break;
    case 4:
      leptonJs = import(
        /* webpackChunkName: "theme.lepton4" */
        /* webpackMode: "lazy" */
        '@volo/abp.ng.theme.lepton/dist/global/styles/lepton4'
      );
      break;
    case 5:
      leptonJs = import(
        /* webpackChunkName: "theme.lepton5" */
        /* webpackMode: "lazy" */
        '@volo/abp.ng.theme.lepton/dist/global/styles/lepton5'
      );
      break;
    case 6:
      leptonJs = import(
        /* webpackChunkName: "theme.lepton6" */
        /* webpackMode: "lazy" */
        '@volo/abp.ng.theme.lepton/dist/global/styles/lepton6'
      );
      break;
    default:
      return;
  }

  return from(leptonJs).pipe(map(m => m.default));
};
