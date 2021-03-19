import { LOCALE_ID } from '@angular/core';
import { default as ngLang } from '@angular/common/locales/zh-Hant';
import { registerLocaleData } from '@angular/common';
export const LANG = {
  abbr: 'zh-Hant',
  ng: ngLang
};
export const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr }
];
// register angular
registerLocaleData(LANG.ng, LANG.abbr);
// #endregion