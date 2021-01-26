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
let project: Project;
const spinner = new Spinner();


/** 移除 config npm ,package.json 設定 */
function clearFiles(options: ApplicationOptions): (host: Tree) => void {
  return (host: Tree) => {
    //Clear files
    [
      `config/${options.name}/apps.config.json`,
      `npm/${options.name}/package.json`,
      `${project.root}/tslint.json`,
      `${project.root}/tsconfig.spec.json`,
      `${project.root}/tsconfig.json`,
      `${project.root}/tsconfig.editor.json`,
      `${project.root}/tsconfig.app.json`,
      `${project.root}/jest.json`,
      `${project.root}/.browserslistrc`,
      `${project.sourceRoot}/main.ts`,
      `${project.sourceRoot}/test-setup.ts`,
      `${project.sourceRoot}/styles.css`,
      `${project.sourceRoot}/index.html`,
      `${project.sourceRoot}/environments/environment.prod.ts`,
      `${project.sourceRoot}/environments/environment.ts`,
      `${project.sourceRoot}/favicon.ico`,
      `${project.sourceRoot}/app/app.module.ts`,
      `${project.sourceRoot}/app/app.component.spec.ts`,
      `${project.sourceRoot}/app/app.component.ts`,
      `${project.sourceRoot}/app/app.component.html`,
      `${project.sourceRoot}/app/app.component.css`,
      `${project.sourceRoot}/app/app-routing.module.ts`,
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
function getCurrentProject(options: ApplicationOptions): (host: Tree) => void {
  return (host: Tree) => {
    project = getProject(host, options.name);
  };

}

// function addRunScriptToPackageJson(): (host: Tree) => void {
//   return (host: Tree) => {
//     const json = getPackage(host, 'scripts');
//     if (json == null) return host;
//     json.scripts['ng-high-memory'] = `node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng`;
//     json.scripts.start = `ng s -o`;
//     json.scripts.hmr = `ng s -o --hmr`;
//     json.scripts.build = `npm run ng-high-memory build -- --prod`;
//     json.scripts.analyze = `npm run ng-high-memory build -- --prod --source-map`;
//     json.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
//     json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
//     json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
//     json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
//     json.scripts.icon = `ng g ng-alain:plugin icon`;
//     overwritePackage(host, json);
//     return host;
//   };
// }

function addFilesToRoot(host: any, options: ApplicationOptions): Rule {

  return chain([
    mergeWith(
      apply(url('./files'), [
        template({
          dot: '.',
          tmpl: '',
          port:options.cshapBacknedPort,
          applicationName:options.abpApplicationName,
        }),
        move(`apps/${options.name}`),
      ]),
    )
  ]);
}

function addConfigFiles(options: ApplicationOptions): Rule {
  return chain([
    mergeWith(
      apply(url('./config'), [
        template({
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
    addPackageToPackageJson(host, [`@fs-tw/theme-alain-ms@410.0.1`]);
    addPackageToPackageJson(host, [`@npm/ng-alain-ms@file:npm/ng-alain-ms`],'devDependencies');
    return chain([
      mergeWith(
        apply(url('./npm'), [
          template({
            name: options.name
          }),
          move(`npm`),
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
    spinner.succeed(`Congratulations, NG-ALAIN scaffold generation complete.`);
  };
}

export default function (options: ApplicationOptions): Rule {
  return (host: Tree, context: SchematicContext) => {

    spinner.start(`Generating NG-ALAIN scaffold...`);
    return chain([


      generateApplication(options),
      getCurrentProject(options),
      clearFiles(options),
      addConfigFiles(options),
      addDependenciesToPackageJson(options),//
      // ci
      //addRunScriptToPackageJson()
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
    style:'css',
    routing:false
  });
}