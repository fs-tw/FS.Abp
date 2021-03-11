"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = exports.getProjectFromWorkspace = exports.getWorkspace = exports.ANGULAR_CLI_WORKSPACE_PATH = void 0;
var core_1 = require("@angular-devkit/core");
var schematics_1 = require("@angular-devkit/schematics");
exports.ANGULAR_CLI_WORKSPACE_PATH = '/angular.json';
/** Gets the Angular CLI workspace config (angular.json) */
function getWorkspace(host) {
    var configBuffer = host.read(exports.ANGULAR_CLI_WORKSPACE_PATH);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException('Could not find angular.json');
    }
    return core_1.parseJson(configBuffer.toString(), core_1.JsonParseMode.Json5);
}
exports.getWorkspace = getWorkspace;
/**
 * Gets a project from the Angular CLI workspace. If no project name is given, the first project
 * will be retrieved.
 */
function getProjectFromWorkspace(config, projectName) {
    if (config.projects) {
        if (projectName) {
            var project = config.projects[projectName];
            if (!project) {
                throw new schematics_1.SchematicsException("No project named \"" + projectName + "\" exists.");
            }
            Object.defineProperty(project, 'name', { enumerable: false, value: projectName });
            return project;
        }
        // If there is exactly one non-e2e project, use that. Otherwise, require that a specific
        // project be specified.
        var allProjectNames = Object.keys(config.projects).filter(function (p) { return !p.includes('e2e'); });
        if (allProjectNames.length === 1) {
            projectName = allProjectNames[0];
            var project = config.projects[projectName];
            Object.defineProperty(project, 'name', { enumerable: false, value: projectName });
            return project;
        }
        else {
            throw new schematics_1.SchematicsException('Multiple projects are defined; please specify a project name');
        }
    }
    throw new schematics_1.SchematicsException('No projects are defined');
}
exports.getProjectFromWorkspace = getProjectFromWorkspace;
/** 获取当前 Angular 项目 */
function getProject(host, projectName) {
    var workspace = getWorkspace(host);
    if (Object.keys(workspace.projects).length <= 0) {
        throw new schematics_1.SchematicsException('Could not find any project.');
    }
    if (!projectName) {
        projectName = workspace.defaultProject;
    }
    return getProjectFromWorkspace(workspace, projectName);
}
exports.getProject = getProject;
//# sourceMappingURL=project.js.map