import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import {
  apply,
  chain,
  filter,
  MergeStrategy,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  externalSchematic
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addAllowedCommonJsDependencies,
  addPackageToPackageJson,
  getAngular,
  getJSON,
  getPackage,
  overwriteAngular,
  overwriteJSON,
  overwritePackage,
  scriptsToAngularJson,
} from './utils/json';
//import { addFiles, overwriteFile } from 'ng-alain/utils/file';
import { getProject, getProjectFromWorkspace, Project } from './utils/project';
import { SchemaOptions as ApplicationOptions } from './schema';
import * as mergeGenerators from '../merge-config/index';
import * as path from 'path';
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
const spinner = new Spinner();


/** 移除 config npm ,package.json 設定 */
function clearFiles(options: ApplicationOptions): (host: Tree) => void {
  let projectRoot = `apps/${options.name}`;
  let projectSourceRoot = `apps/${options.name}/src`;
  return (host: Tree) => {
    //Clear files
    host.visit(file => {
      if (file.startsWith(`/apps/${options.name}`)) {
        host.delete(file);
      }
    });
    [
      `npm/${options.themeName}/package.json`,
      `npm/${options.themeName}/package.json`,
      `config/${options.themeName}/${options.name}/apps.config.json`,
      `npm/${options.themeName}/${options.name}/package.json`,
    ]
      .filter(p => host.exists(p))
      .forEach(p => host.delete(p));

    //Clear package.json node
    const json = getPackage(host);
    if (json.devDependencies[`@npm/${options.name}`]) {
      delete json.devDependencies[`@npm/${options.name}`];
      overwritePackage(host, json);
    }
  };
}


function addFilesToRoot(host: any, options: ApplicationOptions): Rule {
  return chain([
    mergeWith(
      apply(url(`./files/${options.themeName}`), [
        template({
          dot: '.',
          tmpl: '',
          name: options.name,
          title: options.title,
          port: options.cshapBacknedPort,
          applicationName: options.abpApplicationName,
        }),
        move(`apps/${options.name}`),
      ]),
    )
  ]);
}

function addConfigFiles(options: ApplicationOptions): Rule {
  return chain([
    mergeWith(
      apply(url(`./config/${options.themeName}`), [
        template({
          tmpl: '',
          name: options.name
        }),
        move(`config/${options.name}`),
      ]),
    )
  ]);
}
function addDependenciesToPackageJson(options: ApplicationOptions): (host: Tree) => void {

  return (host: Tree) => {
    //"@fs-tw/theme-alain-ms": "410.0.1"
    if (options.themeName == 'ng-alain-ms') {
      addPackageToPackageJson(host, [`@fs-tw/theme-alain-ms@410.0.1`]);
      //add dependencies
      addPackageToPackageJson(host, [`@npm/ng-alain-ms@file:npm/ng-alain-ms`], 'devDependencies');
    }
    return chain([
      mergeWith(
        apply(url(`./npm/${options.themeName}`), [
          template({
            tmpl: '',
            name: options.name
          }),
          move(`npm/${options.themeName}`),
        ]),
      )
    ]);

  }
}






function install(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

function finished(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, _context: SchematicContext) => {
    spinner.succeed(`Congratulations ,scaffold generation complete.`);
  };
}

export default function (options: ApplicationOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    options.title = options.title ? options.title : '豐碩資訊';
    spinner.start(`Generating ${options.themeName} scaffold...`);
    return chain([
      generateApplication(options),
      clearFiles(options),
      addConfigFiles(options),
      addDependenciesToPackageJson(options),//
      // files
      addFilesToRoot(host, options),
      mergeGenerators.default(),
      install(),
      finished(),
    ])(host, context);
  };

}

function generateApplication(options: ApplicationOptions): Rule {
  return externalSchematic('@nrwl/angular', 'application', {
    name: options.name,
    e2eTestRunner: 'none',
    style: 'css',
    routing: false
  });
}