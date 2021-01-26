import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  externalSchematic
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  getPackage,
  overwritePackage,
} from './utils/json';
//import { addFiles, overwriteFile } from 'ng-alain/utils/file';
import { SchemaOptions as ApplicationOptions } from './schema';
import * as mergeGenerators from '../merge-config/index';
import * as path from 'path';
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
const spinner = new Spinner();


/** 移除 config npm ,package.json 設定 */
function clearFiles(options: ApplicationOptions): (host: Tree) => void {
  let projectRoot = `apps/${options.name}`;
  let projectSourceRoot = `apps/${options.name}`;
  return (host: Tree) => {
    //Clear files
    [
      `config/${options.name}/apps.config.json`,
      `npm/${options.name}/package.json`,
      `apps/${options.name}/tslint.json`,
      `${projectRoot}/tsconfig.spec.json`,
      `${projectRoot}/tsconfig.json`,
      `${projectRoot}/tsconfig.editor.json`,
      `${projectRoot}/tsconfig.app.json`,
      `${projectRoot}/jest.json`,
      `${projectRoot}/.browserslistrc`,
      `${projectSourceRoot}/main.ts`,
      `${projectSourceRoot}/test-setup.ts`,
      `${projectSourceRoot}/styles.scss`,
      `${projectSourceRoot}/index.html`,
      `${projectSourceRoot}/environments/environment.prod.ts`,
      `${projectSourceRoot}/environments/environment.ts`,
      `${projectSourceRoot}/favicon.ico`,
      `${projectSourceRoot}/app/app.module.ts`,
      `${projectSourceRoot}/app/app.component.spec.ts`,
      `${projectSourceRoot}/app/app.component.ts`,
      `${projectSourceRoot}/app/app.component.html`,
      `${projectSourceRoot}/app/app.component.css`,
      `${projectSourceRoot}/app/app-routing.module.ts`,
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
      apply(url('./files'), [
        template({
          dot: '.',
          tmpl: '',
          name:options.name,
          title:options.title,
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
    //Example
    //addPackageToPackageJson(host, [`@npm/ng-alain-ms@file:npm/ng-alain-ms`],'devDependencies');
    return chain([
      // mergeWith(
      //   apply(url('./npm'), [
      //     template({
      //       name: options.name
      //     }),
      //     move(`npm`),
      //   ]),
      // )
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
    spinner.succeed(`Congratulations, unify scaffold generation complete.`);
  };
}

export default function (options: ApplicationOptions): Rule {
  return (host: Tree, context: SchematicContext) => {

    spinner.start(`Generating unify scaffold...`);
    options.title = options.title ? options.title : '豐碩資訊';
    return chain([


      generateApplication(options),
      clearFiles(options),
      addConfigFiles(options),
      
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
    style:'scss',
    routing:false
  });
}