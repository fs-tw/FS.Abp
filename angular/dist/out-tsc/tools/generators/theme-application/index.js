"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spinner_1 = require("@angular-devkit/build-angular/src/utils/spinner");
var schematics_1 = require("@angular-devkit/schematics");
var tasks_1 = require("@angular-devkit/schematics/tasks");
var json_1 = require("./utils/json");
var mergeGenerators = require("../merge-config/index");
var path = require("path");
var overwriteDataFileRoot = path.join(__dirname, 'overwrites');
var spinner = new spinner_1.Spinner();
/** 移除 config npm ,package.json 設定 */
function clearFiles(options) {
    var projectRoot = "apps/" + options.name;
    var projectSourceRoot = "apps/" + options.name + "/src";
    return function (host) {
        //Clear files
        host.visit(function (file) {
            if (file.startsWith("/apps/" + options.name)) {
                host.delete(file);
            }
        });
        [
            "npm/" + options.themeName + "/package.json",
            "npm/" + options.themeName + "/package.json",
            "config/" + options.themeName + "/" + options.name + "/apps.config.json",
            "npm/" + options.themeName + "/" + options.name + "/package.json",
        ]
            .filter(function (p) { return host.exists(p); })
            .forEach(function (p) { return host.delete(p); });
        //Clear package.json node
        var json = json_1.getPackage(host);
        if (json.devDependencies["@npm/" + options.name]) {
            delete json.devDependencies["@npm/" + options.name];
            json_1.overwritePackage(host, json);
        }
    };
}
function addFilesToRoot(host, options) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + options.themeName), [
            schematics_1.template({
                dot: '.',
                tmpl: '',
                name: options.name,
                title: options.title,
                port: options.cshapBacknedPort,
                applicationName: options.abpApplicationName,
            }),
            schematics_1.move("apps/" + options.name),
        ]))
    ]);
}
function addConfigFiles(options) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./config/" + options.themeName), [
            schematics_1.template({
                tmpl: '',
                name: options.name
            }),
            schematics_1.move("config/" + options.name),
        ]))
    ]);
}
function addDependenciesToPackageJson(options) {
    return function (host) {
        //"@fs-tw/theme-alain-ms": "410.0.1"
        if (options.themeName == 'ng-alain-ms') {
            json_1.addPackageToPackageJson(host, ["@fs-tw/theme-alain-ms@410.0.1"]);
            //add dependencies
            json_1.addPackageToPackageJson(host, ["@npm/ng-alain-ms@file:npm/ng-alain-ms"], 'devDependencies');
        }
        return schematics_1.chain([
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./npm/" + options.themeName), [
                schematics_1.template({
                    tmpl: '',
                    name: options.name
                }),
                schematics_1.move("npm/" + options.themeName),
            ]))
        ]);
    };
}
function install() {
    return function (_host, context) {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function finished() {
    return function (_host, _context) {
        spinner.succeed("Congratulations, NG-ALAIN scaffold generation complete.");
    };
}
function default_1(options) {
    return function (host, context) {
        options.title = options.title ? options.title : '豐碩資訊';
        spinner.start("Generating NG-ALAIN scaffold...");
        return schematics_1.chain([
            generateApplication(options),
            clearFiles(options),
            addConfigFiles(options),
            addDependenciesToPackageJson(options),
            // files
            addFilesToRoot(host, options),
            mergeGenerators.default(),
            install(),
            finished(),
        ])(host, context);
    };
}
exports.default = default_1;
function generateApplication(options) {
    return schematics_1.externalSchematic('@nrwl/angular', 'application', {
        name: options.name,
        e2eTestRunner: 'none',
        style: 'css',
        routing: false
    });
}
//# sourceMappingURL=index.js.map