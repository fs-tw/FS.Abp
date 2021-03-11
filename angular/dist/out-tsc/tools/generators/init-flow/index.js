"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spinner_1 = require("@angular-devkit/build-angular/src/utils/spinner");
var json_1 = require("./utils/json");
var schematics_1 = require("@angular-devkit/schematics");
var spinner = new spinner_1.Spinner();
function clearFiles(target) {
    return function (host) {
        //Clear files
        [
            "npm/" + target + "/package.json",
            "npm/root/package.json",
            ".npmrc",
            "package-lock.json"
        ]
            .filter(function (p) { return host.exists(p); })
            .forEach(function (p) { return host.delete(p); });
        //Clear package.json node
        var json = json_1.getPackage(host);
        if (json.dependencies["@npm/fs-tw"]) {
            delete json.devDependencies["@npm/fs-tw"];
        }
        if (json.devDependencies["@npm/" + target]) {
            delete json.devDependencies["@npm/" + target];
        }
        json_1.overwritePackage(host, json);
    };
}
function clearConfigFiles() {
    return function (host) {
        //Clear files
        var result = ["config/angular.base.json",
            "config/nx.base.json",
            "config/schema.json",
            "config/tsconfig.base.json",
            "config/tsconfig.prod.json",
            "config/libs/lib.config.json",
            "config/apps/apps.config.json"];
        result.filter(function (p) { return host.exists(p); })
            .forEach(function (p) { return host.delete(p); });
    };
}
function addDependenciesToPackageJson(target) {
    return function (host) {
        json_1.addPackageToPackageJson(host, ["@npm/fs-tw@file:npm/fs-tw"]);
        json_1.addPackageToPackageJson(host, ["@npm/" + target + "@file:npm/" + target]);
        // addPackageToPackageJson(host, [`@fs-tw/account@410.0.1`]);
        // addPackageToPackageJson(host, [`@fs-tw/emailing@410.0.1`]);
    };
}
function addNpmFiles(target) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/root-path"), [
            schematics_1.template({
                tmpl: ''
            }),
            schematics_1.move('')
        ])),
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/npm/fs-tw"), [
            schematics_1.template({
                tmpl: '',
                name: target
            }),
            schematics_1.move("npm/fs-tw"),
        ])),
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/npm/" + target), [
            schematics_1.template({
                tmpl: '',
                name: target
            }),
            schematics_1.move("npm/" + target),
        ]))
    ]);
}
function addConfigFiles() {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/config"), [
            schematics_1.template({
                tmpl: '',
                name: ''
            }),
            schematics_1.move("config"),
        ]))
    ]);
}
function finished() {
    return function (_host, _context) {
        spinner.succeed("Congratulations, NPM scaffold generation complete.");
    };
}
function default_1(options) {
    spinner.start("Generating NPM scaffold...");
    return function (host, context) {
        return schematics_1.chain([
            clearFiles(options.name),
            addNpmFiles(options.name),
            clearConfigFiles(),
            addConfigFiles(),
            addDependenciesToPackageJson(options.name),
            finished()
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map