export interface BaseDtoWithSettings<T> {
    item: object;
    setting: T;
    settingsPropertyName: string[];
}
export interface CodesDtoWithSettings<T> extends BaseDtoWithSettings<T> {
    displayName: string;
    no: string;
    id: string;
}
export interface CodesDtoWithSettingsForCreate<T> extends BaseDtoWithSettings<T> {
    displayName: string;
    no: string;
}
