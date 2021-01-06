import { ThemeDto } from '@fs-tw/theme-core/proxy';
export namespace Theme {
    export interface State {
        data: ThemeDto;
        defaultNo: string;
    }
}