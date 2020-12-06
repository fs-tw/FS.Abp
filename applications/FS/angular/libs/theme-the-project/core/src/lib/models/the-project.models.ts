import { CodesWithDetailsDto } from './codes-with-details-dto';
import { CodesSettingDto } from './codes-setting-dto';

export namespace TheProjectMenu {
    export interface State {
        codings: CodesWithDetailsDto;
        settings: Array<CodesSettingDto>;
    }
    
}

export namespace TheProjectThemes {
    export interface State {
        codings: CodesWithDetailsDto;
        settings: Array<CodesSettingDto>;
    }
    
}