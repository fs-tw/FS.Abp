import { CodesWithDetailsDto } from '@fs/coding-management/core';

export namespace Blog {
    export interface State {
        codings: CodesWithDetailsDto;        
    }    
}