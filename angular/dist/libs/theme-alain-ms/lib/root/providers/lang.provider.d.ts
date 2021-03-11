export declare const LANG: {
    abbr: string;
    ng: (string | number | number[] | string[] | ((n: number) => number) | string[][] | {
        AUD: string[];
        CNY: string[];
        ILR: string[];
        JPY: string[];
        KRW: string[];
        TWD: string[];
        USD: string[];
        XXX: never[];
    })[];
    zorro: {
        locale: string;
        Pagination: {
            items_per_page: string;
            jump_to: string;
            jump_to_confirm: string;
            page: string;
            prev_page: string;
            next_page: string;
            prev_5: string;
            next_5: string;
            prev_3: string;
            next_3: string;
        };
        DatePicker: {
            lang: {
                placeholder: string;
                rangePlaceholder: string[];
                locale: string;
                today: string;
                now: string;
                backToToday: string;
                ok: string;
                timeSelect: string;
                dateSelect: string;
                weekSelect: string;
                clear: string;
                month: string;
                year: string;
                previousMonth: string;
                nextMonth: string;
                monthSelect: string;
                yearSelect: string;
                decadeSelect: string;
                yearFormat: string;
                dayFormat: string;
                dateFormat: string;
                dateTimeFormat: string;
                previousYear: string;
                nextYear: string;
                previousDecade: string;
                nextDecade: string;
                previousCentury: string;
                nextCentury: string;
            };
            timePickerLocale: {
                placeholder: string;
            };
        };
        TimePicker: {
            placeholder: string;
        };
        Calendar: {
            lang: {
                placeholder: string;
                rangePlaceholder: string[];
                locale: string;
                today: string;
                now: string;
                backToToday: string;
                ok: string;
                timeSelect: string;
                dateSelect: string;
                weekSelect: string;
                clear: string;
                month: string;
                year: string;
                previousMonth: string;
                nextMonth: string;
                monthSelect: string;
                yearSelect: string;
                decadeSelect: string;
                yearFormat: string;
                dayFormat: string;
                dateFormat: string;
                dateTimeFormat: string;
                previousYear: string;
                nextYear: string;
                previousDecade: string;
                nextDecade: string;
                previousCentury: string;
                nextCentury: string;
            };
            timePickerLocale: {
                placeholder: string;
            };
        };
        global: {
            placeholder: string;
        };
        Table: {
            filterTitle: string;
            filterConfirm: string;
            filterReset: string;
            filterEmptyText: string;
            selectAll: string;
            selectInvert: string;
            selectionAll: string;
            sortTitle: string;
            expand: string;
            collapse: string;
            triggerDesc: string;
            triggerAsc: string;
            cancelSort: string;
        };
        Modal: {
            okText: string;
            cancelText: string;
            justOkText: string;
        };
        Popconfirm: {
            okText: string;
            cancelText: string;
        };
        Transfer: {
            searchPlaceholder: string;
            itemUnit: string;
            itemsUnit: string;
        };
        Upload: {
            uploading: string;
            removeFile: string;
            uploadError: string;
            previewFile: string;
            downloadFile: string;
        };
        Empty: {
            description: string;
        };
        Icon: {
            icon: string;
        };
        Text: {
            edit: string;
            copy: string;
            copied: string;
            expand: string;
        };
        PageHeader: {
            back: string;
        };
    };
    date: Locale;
    delon: import("@delon/theme").FullLocaleData;
};
export declare const LANG_PROVIDES: ({
    provide: import("@angular/core").InjectionToken<string>;
    useValue: string;
} | {
    provide: import("@angular/core").InjectionToken<import("ng-zorro-antd/i18n").NzI18nInterface>;
    useValue: {
        locale: string;
        Pagination: {
            items_per_page: string;
            jump_to: string;
            jump_to_confirm: string;
            page: string;
            prev_page: string;
            next_page: string;
            prev_5: string;
            next_5: string;
            prev_3: string;
            next_3: string;
        };
        DatePicker: {
            lang: {
                placeholder: string;
                rangePlaceholder: string[];
                locale: string;
                today: string;
                now: string;
                backToToday: string;
                ok: string;
                timeSelect: string;
                dateSelect: string;
                weekSelect: string;
                clear: string;
                month: string;
                year: string;
                previousMonth: string;
                nextMonth: string;
                monthSelect: string;
                yearSelect: string;
                decadeSelect: string;
                yearFormat: string;
                dayFormat: string;
                dateFormat: string;
                dateTimeFormat: string;
                previousYear: string;
                nextYear: string;
                previousDecade: string;
                nextDecade: string;
                previousCentury: string;
                nextCentury: string;
            };
            timePickerLocale: {
                placeholder: string;
            };
        };
        TimePicker: {
            placeholder: string;
        };
        Calendar: {
            lang: {
                placeholder: string;
                rangePlaceholder: string[];
                locale: string;
                today: string;
                now: string;
                backToToday: string;
                ok: string;
                timeSelect: string;
                dateSelect: string;
                weekSelect: string;
                clear: string;
                month: string;
                year: string;
                previousMonth: string;
                nextMonth: string;
                monthSelect: string;
                yearSelect: string;
                decadeSelect: string;
                yearFormat: string;
                dayFormat: string;
                dateFormat: string;
                dateTimeFormat: string;
                previousYear: string;
                nextYear: string;
                previousDecade: string;
                nextDecade: string;
                previousCentury: string;
                nextCentury: string;
            };
            timePickerLocale: {
                placeholder: string;
            };
        };
        global: {
            placeholder: string;
        };
        Table: {
            filterTitle: string;
            filterConfirm: string;
            filterReset: string;
            filterEmptyText: string;
            selectAll: string;
            selectInvert: string;
            selectionAll: string;
            sortTitle: string;
            expand: string;
            collapse: string;
            triggerDesc: string;
            triggerAsc: string;
            cancelSort: string;
        };
        Modal: {
            okText: string;
            cancelText: string;
            justOkText: string;
        };
        Popconfirm: {
            okText: string;
            cancelText: string;
        };
        Transfer: {
            searchPlaceholder: string;
            itemUnit: string;
            itemsUnit: string;
        };
        Upload: {
            uploading: string;
            removeFile: string;
            uploadError: string;
            previewFile: string;
            downloadFile: string;
        };
        Empty: {
            description: string;
        };
        Icon: {
            icon: string;
        };
        Text: {
            edit: string;
            copy: string;
            copied: string;
            expand: string;
        };
        PageHeader: {
            back: string;
        };
    };
} | {
    provide: import("@angular/core").InjectionToken<Locale>;
    useValue: Locale;
} | {
    provide: import("@angular/core").InjectionToken<string>;
    useValue: import("@delon/theme").FullLocaleData;
})[];
//# sourceMappingURL=lang.provider.d.ts.map