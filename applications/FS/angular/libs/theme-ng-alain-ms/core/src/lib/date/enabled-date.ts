import { getTimeDistance } from '@delon/util';

export function enabledLastYear(current: Date) {
  return !(+current >= +getTimeDistance(-364)[0] && +current <= +new Date());
}
