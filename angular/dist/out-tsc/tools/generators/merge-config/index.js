"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var workspace_1 = require("@nrwl/workspace");
var configs = [];
function default_1() {
    return function (host, context) {
        var files = [];
        host.getDir('./config').visit(function (f) { return files.push(f); });
        configs = files
            .filter(function (p) { return p.endsWith('config.json'); })
            .map(function (p) { return workspace_1.readJsonInTree(host, p); })
            .sort(function (a, b) { return a.order - b.order; });
        return schematics_1.chain([
            updateNx,
            updateNg,
            updateTs,
            updateTsProd,
        ])(host, context);
    };
}
exports.default = default_1;
var updateNx = function (host, context) {
    var nxs = configs
        .map(function (j) { return j.nx; })
        .reduce(function (a, b) { return __assign(__assign({}, a), b); });
    var nxJson = workspace_1.readJsonInTree(host, 'config/nx.base.json');
    nxJson.projects = __assign(__assign({}, nxJson.projects), nxs);
    return workspace_1.updateJsonInTree('/nx.json', function (json) { return nxJson; });
};
var updateNg = function (host, context) {
    var ngs = configs
        .map(function (j) { return j.angular; })
        .reduce(function (a, b) { return __assign(__assign({}, a), b); });
    var ngJson = workspace_1.readJsonInTree(host, 'config/angular.base.json');
    ngJson.projects = __assign(__assign({}, ngJson.projects), ngs);
    return workspace_1.updateJsonInTree('/angular.json', function (json) { return ngJson; });
};
var updateTs = function (host, context) {
    var tss = configs
        .map(function (j) { return j.tsconfig; })
        .reduce(function (a, b) { return __assign(__assign({}, a), b); });
    var tsJson = workspace_1.readJsonInTree(host, 'config/tsconfig.base.json');
    tsJson.compilerOptions.paths = __assign(__assign({}, tsJson.compilerOptions.paths), tss);
    return workspace_1.updateJsonInTree('/tsconfig.base.json', function (json) { return tsJson; });
};
var updateTsProd = function (host, context) {
    var tsProds = configs
        .map(function (j) { return j.tsconfigProd; })
        .reduce(function (a, b) { return __assign(__assign({}, a), b); });
    var tsProdJson = workspace_1.readJsonInTree(host, 'config/tsconfig.prod.base.json');
    tsProdJson.compilerOptions.paths = __assign(__assign({}, tsProdJson.compilerOptions.paths), tsProds);
    return workspace_1.updateJsonInTree('/tsconfig.prod.json', function (json) { return tsProdJson; });
};
var updateSymLink = function (host, context) {
    var symLinks = configs
        .map(function (j) { return j.symlink; })
        .reduce(function (a, b) { return !b ? a : a.concat(b); });
    return workspace_1.updateJsonInTree('/symlink.json', function (json) { return symLinks; });
};
//# sourceMappingURL=index.js.map