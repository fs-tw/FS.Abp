"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spinner_1 = require("@angular-devkit/build-angular/src/utils/spinner");
var schematics_1 = require("@angular-devkit/schematics");
var mergeGen = require("../merge-config");
var spinner = new spinner_1.Spinner();
function finished() {
    return function (_host, _context) {
        spinner.succeed("Congratulations, Config scaffold generation complete.");
    };
}
function clearFiles(target) {
    return function (host) {
        //Clear files
        host.visit(function (file) {
            if (file.startsWith("/libs/" + target + ".config.json")) {
                host.delete(file);
            }
        });
    };
}
function AddConfig(target) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + target + "/config"), [
            schematics_1.template({
                name: target,
                tmpl: ''
            }),
            schematics_1.move("config/libs/" + target),
        ]))
    ]);
}
function AddFiles(target) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + target + "/sources"), [
            schematics_1.template({
                tmpl: '',
                name: target
            }),
            schematics_1.move("libs/" + target),
        ]))
    ]);
}
function default_1(options) {
    if (!options.name)
        return;
    spinner.start("Generating theme-sources scaffold...");
    return function (host, context) {
        return schematics_1.chain([
            clearFiles(options.name),
            AddConfig(options.name),
            AddFiles(options.name),
            mergeGen.default(),
            finished()
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map