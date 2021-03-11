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
            if (file.startsWith("/libs/" + options.name)) {
                host.delete(file);
            }
            if (file.startsWith("/config/" + options.name)) {
                host.delete(file);
            }
            if (file.startsWith("/npm/" + options.name)) {
                host.delete(file);
            }
        });
        //Clear package.json node
        var json = json_1.getPackage(host);
        console.log(json.dependencies["@npm/" + options.name]);
        if (json.devDependencies["@npm/" + options.name]) {
            delete json.devDependencies["@npm/" + options.name];
        }
        if (json.dependencies["@npm/" + options.name]) {
            delete json.dependencies["@npm/" + options.name];
        }
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
        if (options.includeSourceCode == 'false')
            json_1.addPackageToPackageJson(host, ["@npm/" + options.name + "@file:npm/" + options.name]);
    };
}
function AddFiles(options) {
    if (options.includeSourceCode == 'false') {
        return schematics_1.chain([
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + options.name + "/npm"), [
                schematics_1.template({
                    versionNo: options.abpVersion,
                    tmpl: ''
                }),
                schematics_1.move("npm/" + options.name)
            ])),
        ]);
    }
    else {
        return schematics_1.chain([
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + options.name + "/sources"), [
                schematics_1.template({
                    versionNo: options.abpVersion,
                    tmpl: ''
                }),
                schematics_1.move("libs/" + options.name)
            ])),
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + options.name + "/config"), [
                schematics_1.template({
                    versionNo: options.abpVersion,
                    tmpl: ''
                }),
                schematics_1.move("config/" + options.name),
            ]))
        ]);
    }
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
    spinner.start("Generating NPM scaffold...");
    return function (host, context) {
        return schematics_1.chain([
            clearFiles(options),
            AddFiles(options),
            addDependenciesToPackageJson(options),
            finished()
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map