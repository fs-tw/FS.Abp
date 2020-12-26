import { OnInit } from '@angular/core';
import { ITokenService } from '@delon/auth';
export declare class LayoutPassportComponent implements OnInit {
    private tokenService;
    links: {
        title: string;
        href: string;
    }[];
    constructor(tokenService: ITokenService);
    ngOnInit(): void;
}
