import PerfectScrollbar from 'perfect-scrollbar';

export interface ScrollbarOptions extends PerfectScrollbar.Options {
  /**
   * 延迟初始化
   */
  delay?: number;
}

export type PerfectScrollbarEvent =
  | 'psScrollY'
  | 'psScrollX'
  | 'psScrollUp'
  | 'psScrollDown'
  | 'psScrollLeft'
  | 'psScrollRight'
  | 'psYReachEnd'
  | 'psYReachStart'
  | 'psXReachEnd'
  | 'psXReachStart';

export const PerfectScrollbarEvents: PerfectScrollbarEvent[] = [
  'psScrollY',
  'psScrollX',

  'psScrollUp',
  'psScrollDown',
  'psScrollLeft',
  'psScrollRight',

  'psYReachEnd',
  'psYReachStart',
  'psXReachEnd',
  'psXReachStart',
];
