export class GetTheme {
    static readonly type = '[the theme definition api] get theme';
    constructor(public no: string) { }
}


export class GetDefaultThemeNo{
    static readonly type = '[get default theme no] get theme';
    constructor() { }
}

export class SetDefaultThemeNo {
    static readonly type = '[set default theme no] get theme';
    constructor(public no: string) { }
}
