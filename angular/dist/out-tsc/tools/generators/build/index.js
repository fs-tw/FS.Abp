"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var execa = require("execa");
var workspace_1 = require("@nrwl/workspace");
var log_1 = require("./utils/log");
var spinner;
function default_1(schema) {
    spinner = log_1.Log.spinner('Processing...');
    return schematics_1.chain([
        updateNx
    ]);
}
exports.default = default_1;
var updateNx = function (host, context) { return __awaiter(void 0, void 0, void 0, function () {
    var buildActions, i, job;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                buildActions = workspace_1.readJsonInTree(host, './build.json');
                log_1.Log.primary("Task Start.");
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < buildActions.length)) return [3 /*break*/, 4];
                job = buildActions[i];
                return [4 /*yield*/, doJob(job)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                log_1.Log.primary("Task Done.");
                spinner.stop();
                return [2 /*return*/, Promise.resolve()];
        }
    });
}); };
function doJob(buildAction) {
    return __awaiter(this, void 0, void 0, function () {
        var buildPackages, commands, i, command, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buildPackages = buildAction.packages.filter(function (x) { return !buildAction.ignore_packages || buildAction.ignore_packages.indexOf(x) == -1; });
                    commands = buildPackages.map(function (packName) {
                        return [
                            'ng',
                            'build',
                            packName,
                            '--prod'
                        ];
                    });
                    log_1.Log.info("\nBuilding packages(" + (buildAction.sync ? "sync" : "async") + "): " + buildPackages.join(','));
                    spinner.start();
                    if (!buildAction.sync) return [3 /*break*/, 7];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < commands.length)) return [3 /*break*/, 6];
                    command = commands[i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, execa('yarn', command)];
                case 3:
                    _a.sent();
                    log_1.Log.success(command[2] + " successfully built.");
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    log_1.Log.error("\"" + command[2] + "\" ERR!!!.Rebuild again in ng command");
                    process.exit(1);
                    return [2 /*return*/];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, Promise.all(commands.map(function (command) { return __awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, execa('yarn', command)];
                                case 1:
                                    _a.sent();
                                    log_1.Log.success(command[2] + " successfully built.");
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    log_1.Log.error("\"" + command[2] + "\" ERR!!!.Rebuild again in ng command");
                                    process.exit(1);
                                    return [2 /*return*/];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=index.js.map