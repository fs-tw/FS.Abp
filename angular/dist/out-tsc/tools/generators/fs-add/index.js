"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spinner_1 = require("@angular-devkit/build-angular/src/utils/spinner");
var json_1 = require("./utils/json");
var schematics_1 = require("@angular-devkit/schematics");
var tasks_1 = require("@angular-devkit/schematics/tasks");
var spinner = new spinner_1.Spinner();
function clearFiles(options) {
    return function (host) {
        //Clear files
        host.visit(function (file) {
            if (file.startsWith("/libs/" + options.lowerDashCamel)) {
                host.delete(file);
            }
            if (file.startsWith("/config/libs/" + options.lowerDashCamel + ".config.json")) {
                host.delete(file);
            }
        });
        //Clear package.json node
        var json = json_1.getPackage(host);
        if (json.devDependencies["@fs-tw/" + options.name]) {
            delete json.devDependencies["@fs-tw/" + options.name];
        }
        if (json.dependencies["@fs-tw/" + options.name]) {
            delete json.dependencies["@fs-tw/" + options.name];
        }
        json_1.overwritePackage(host, json);
    };
}
function addDependenciesToPackageJson(options) {
    return function (host) {
        // addPackageToPackageJson(host, [`@npm/${options.name}@file:npm/${options.name}`]);
    };
}
function AddFiles(options) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/sources"), [
            schematics_1.template({
                camelize: options.camelize,
                lowerDashCamel: options.lowerDashCamel,
                AllUpper: options.allUpper,
                tmpl: ''
            }),
            schematics_1.move("libs/" + options.lowerDashCamel)
        ])),
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/config"), [
            schematics_1.template({
                camelize: options.camelize,
                lowerDashCamel: options.lowerDashCamel,
                AllUpper: options.allUpper,
                tmpl: ''
            }),
            schematics_1.move("config/libs/")
        ]))
    ]);
}
function finished() {
    return function (_host, _context) {
        spinner.succeed("Congratulations, NPM scaffold generation complete.");
    };
}
function install() {
    return function (_host, context) {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function default_1(options) {
    options.camelize = camelize(options.name);
    options.lowerDashCamel = lowerDashCamel(options.name);
    options.allUpper = AllUpper(options.name);
    spinner.start("Generating empty lib scaffold...");
    return function (host, context) {
        return schematics_1.chain([
            clearFiles(options),
            AddFiles(options),
            //addDependenciesToPackageJson(options),
            //install(),
            finished()
        ])(host, context);
    };
}
exports.default = default_1;
///第一個字大寫  ex: themeCore-> ThemeCoreModule
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toUpperCase() : word;
    }).replace(/\s+/g, '');
}
///第一個字小寫 ,ex: ThemeCore -> theme-core.module.ts
function lowerDashCamel(str) {
    return str.replace(/^[a-z]|[A-Z]/g, function (v, i) {
        return i === 0 ? v.toLowerCase() : "-" + v.toLowerCase();
    });
}
///全部大寫 ex:themeCore -> THEMECORE
function AllUpper(str) {
    return str.toUpperCase();
}
//# sourceMappingURL=index.js.map