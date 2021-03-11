"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllowedCommonJsDependencies = exports.addAllowedCommonJsDependencies = exports.scriptsToAngularJson = exports.overwriteAngular = exports.getAngular = exports.removePackageFromPackageJson = exports.addPackageToPackageJson = exports.overwritePackage = exports.getPackage = exports.overwriteJSON = exports.getJSON = void 0;
var json_1 = require("@angular-devkit/core/src/json");
var project_1 = require("./project");
function getJSON(host, jsonFile, type) {
    if (!host.exists(jsonFile))
        return null;
    var sourceText = host.read(jsonFile).toString('utf-8');
    try {
        var json = json_1.parseJson(sourceText, json_1.JsonParseMode.Loose);
        if (type && !json[type]) {
            json[type] = {};
        }
        return json;
    }
    catch (ex) {
        console.log("Can't parse json file (" + jsonFile + "), pls check for comments or trailing commas, or validate json via https://jsonlint.com/");
        throw ex;
    }
}
exports.getJSON = getJSON;
function overwriteJSON(host, jsonFile, json) {
    host.overwrite(jsonFile, JSON.stringify(json, null, 2));
}
exports.overwriteJSON = overwriteJSON;
function getPackage(host, type) {
    return getJSON(host, 'package.json', type);
}
exports.getPackage = getPackage;
function overwritePackage(host, json) {
    return overwriteJSON(host, 'package.json', json);
}
exports.overwritePackage = overwritePackage;
/**
 * Adds a package to the package.json
 *
 * ```
 * addPackageToPackageJson(host, [ '＠delon/abc＠^1.0.0' ])
 * addPackageToPackageJson(host, [ '＠delon/abc＠^1.0.0' ], 'devDependencies')
 * ```
 */
function addPackageToPackageJson(host, pkg, type) {
    if (type === void 0) { type = 'dependencies'; }
    var json = getJSON(host, 'package.json', type);
    if (json == null)
        return host;
    if (!Array.isArray(pkg))
        pkg = [pkg];
    pkg.forEach(function (p) {
        if (!json[type][p]) {
            var pos = p.lastIndexOf('@');
            json[type][p.substr(0, pos)] = p.substr(pos + 1);
        }
    });
    overwritePackage(host, json);
    return host;
}
exports.addPackageToPackageJson = addPackageToPackageJson;
/**
 * Removes a package to the package.json
 *
 * ```
 * addPackageToPackageJson(host, [ '＠delon/abc' ])
 * addPackageToPackageJson(host, [ '＠delon/abc' ], 'devDependencies')
 * ```
 */
function removePackageFromPackageJson(host, pkg, type) {
    if (type === void 0) { type = 'dependencies'; }
    var json = getJSON(host, 'package.json', type);
    if (json == null)
        return host;
    if (!Array.isArray(pkg))
        pkg = [pkg];
    pkg.forEach(function (p) { return delete json[type][p.indexOf('@') !== -1 ? p.substr(0, p.lastIndexOf('@')) : p]; });
    overwritePackage(host, json);
    return host;
}
exports.removePackageFromPackageJson = removePackageFromPackageJson;
function getAngular(host, type) {
    return getJSON(host, 'angular.json', type);
}
exports.getAngular = getAngular;
function overwriteAngular(host, json) {
    return overwriteJSON(host, 'angular.json', json);
}
exports.overwriteAngular = overwriteAngular;
function scriptsToAngularJson(host, resources, behavior, types, projectName, clean) {
    if (types === void 0) { types = ['build', 'test']; }
    if (clean === void 0) { clean = false; }
    var json = getAngular(host);
    var project = project_1.getProjectFromWorkspace(json, projectName);
    types.forEach(function (type) {
        var scriptsNode = (project.targets || project.architect)[type].options.scripts;
        var stylesNode = (project.targets || project.architect)[type].options.styles;
        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
            var path = resources_1[_i];
            var list = path.endsWith('.js') ? scriptsNode : stylesNode;
            if (clean === true)
                list.length = 0;
            if (behavior === 'add') {
                list.push(path);
            }
            else {
                var idx = list.indexOf(path);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
            }
        }
    });
    overwriteAngular(host, json);
    return host;
}
exports.scriptsToAngularJson = scriptsToAngularJson;
function addAllowedCommonJsDependencies(host, items) {
    var json = getAngular(host);
    var project = project_1.getProjectFromWorkspace(json);
    var list = project.architect.build.options.allowedCommonJsDependencies;
    if (!Array.isArray(list)) {
        list = [];
    }
    if (Array.isArray(items)) {
        list = __spreadArrays(list, items);
    }
    var result = new (Set.bind.apply(Set, __spreadArrays([void 0], list)))();
    // in angular.json
    [
        // 'codesandbox/lib/api/define',
        'hammerjs',
        'file-saver',
        '@ant-design/colors',
        '@antv/path-util',
        '@antv/g-canvas',
        '@antv/g-base',
        '@antv/g-svg',
        '@antv/g-math',
        '@antv/attr',
        '@antv/adjust',
        '@antv/component',
        '@antv/util',
    ].forEach(function (key) { return result.add(key); });
    project.architect.build.options.allowedCommonJsDependencies = Array.from(result).sort();
    overwriteAngular(host, json);
}
exports.addAllowedCommonJsDependencies = addAllowedCommonJsDependencies;
function removeAllowedCommonJsDependencies(host, key) {
    var json = getAngular(host);
    var project = project_1.getProjectFromWorkspace(json);
    var list = project.architect.build.options.allowedCommonJsDependencies;
    if (!Array.isArray(list)) {
        return;
    }
    var pos = list.indexOf(key);
    if (pos === -1)
        return;
    list.splice(pos, 1);
    project.architect.build.options.allowedCommonJsDependencies = list.sort();
    overwriteAngular(host, json);
}
exports.removeAllowedCommonJsDependencies = removeAllowedCommonJsDependencies;
//# sourceMappingURL=json.js.map