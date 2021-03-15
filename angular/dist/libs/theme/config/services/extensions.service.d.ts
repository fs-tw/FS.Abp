import { Fs } from '@fs-tw/theme/proxy';
import { eThemeRouteNames } from '../enums/route-names';
import { Subject } from 'rxjs';
export declare class ActionItem<T> {
    name: 'Edit' | 'Delete' | 'Add';
    record?: T;
}
export declare class ExtensionsService {
    Actions$: {
        "Theme::FS.Theme.Banner": Subject<ActionItem<Fs.Theme.Banners.Dtos.BannerDto>>;
        "Theme::FS.Theme.BannerDefinition": Subject<ActionItem<Fs.Theme.Banners.Dtos.BannerDefinitionDto>>;
        "Theme::FS.Theme.Route": Subject<ActionItem<Fs.Theme.Routes.Dtos.RouteDto>>;
        "Theme::FS.Theme.RouteDefinition": Subject<ActionItem<Fs.Theme.Routes.Dtos.RouteDefinitionDto>>;
        "Theme::FS.Theme.WebSiteDefinition": Subject<ActionItem<Fs.Theme.WebSites.Dtos.WebSiteDefinitionDto>>;
    };
    constructor();
    action<T>(type: eThemeRouteNames, data?: ActionItem<T>): void;
}
