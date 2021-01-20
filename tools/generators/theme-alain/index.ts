import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import { strings } from '@angular-devkit/core';
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
} from 'ng-alain/utils/json';
import { addHeadStyle, addHtmlToBody } from 'ng-alain/utils/html';
import { VERSION, ZORROVERSION } from 'ng-alain/utils/lib-versions';
import { addFiles, overwriteFile } from 'ng-alain/utils/file';
import { getProject, getProjectFromWorkspace, Project } from 'ng-alain/utils/project';
import { SchemaOptions as ApplicationOptions } from './options';
import * as path from 'path';
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project: Project;
const spinner = new Spinner();

import { getProjectConfig } from '@nrwl/workspace';

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

function addRunScriptToPackageJson(): (host: Tree) => void {
  return (host: Tree) => {
    const json = getPackage(host, 'scripts');
    if (json == null) return host;
    json.scripts['ng-high-memory'] = `node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng`;
    json.scripts.start = `ng s -o`;
    json.scripts.hmr = `ng s -o --hmr`;
    json.scripts.build = `npm run ng-high-memory build -- --prod`;
    json.scripts.analyze = `npm run ng-high-memory build -- --prod --source-map`;
    json.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
    json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
    json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
    json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
    json.scripts.icon = `ng g ng-alain:plugin icon`;
    overwritePackage(host, json);
    return host;
  };
}




function addSchematics(): (host: Tree) => Tree {
  return (host: Tree) => {
    const angularJsonFile = 'angular.json';
    const json = getJSON(host, angularJsonFile, 'schematics');
    if (json == null) return host;
    json.schematics['ng-alain:module'] = {
      routing: true,
      spec: false,
    };
    json.schematics['ng-alain:list'] = {
      spec: false,
    };
    json.schematics['ng-alain:edit'] = {
      spec: false,
      modal: true,
    };
    json.schematics['ng-alain:view'] = {
      spec: false,
      modal: true,
    };
    json.schematics['ng-alain:curd'] = {
      spec: false,
    };
    json.schematics['@schematics/angular:module'] = {
      routing: true,
      spec: false,
    };
    json.schematics['@schematics/angular:component'] = {
      spec: false,
      flat: false,
      inlineStyle: true,
      inlineTemplate: false,
    };
    json.schematics['@schematics/angular:directive'] = {
      spec: false,
    };
    json.schematics['@schematics/angular:service'] = {
      spec: false,
    };
    overwriteJSON(host, angularJsonFile, json);
  };
}



function addStyle(): (host: Tree) => Tree {
  return (host: Tree) => {
    addHeadStyle(
      host,
      project,
      `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`,
    );
    addHtmlToBody(
      host,
      project,
      `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div></div>\n`,
    );
    // add styles
    //addFiles(host, [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`], overwriteDataFileRoot);

    return host;
  };
}

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
    addPackageToPackageJson(host, [`@npm/${options.name}@file:npm/${options.name}`], 'devDependencies');
    return chain([
      mergeWith(
        apply(url('./npm'), [
          template({
            name: options.name
          }),
          move(`npm/${options.name}`),
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
      addDependenciesToPackageJson(options),// @delon/* dependencies modfy by alex done
      // ci
      addRunScriptToPackageJson(),//TODO:package.json 新增指令
      // files
      addFilesToRoot(host, options),
      // addStyle(),
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