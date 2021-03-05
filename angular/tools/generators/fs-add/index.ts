import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import {
  addPackageToPackageJson,
  getPackage,
  overwritePackage,
} from './utils/json';
import {
  chain,
  apply,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { SchemaOptions as ApplicationOptions } from './schema';
import * as mergeGenrator from '../merge-config/index';

const spinner = new Spinner();

function clearFiles(options: ApplicationOptions): (host: Tree) => void {
  return (host: Tree) => {
    //Clear files
    host.visit(file => {
      if (file.startsWith(`/libs/${options.lowerDashCamel}`)) {
        host.delete(file);
      }
      if (file.startsWith(`/config/libs/${options.lowerDashCamel}.config.json`)) {
        host.delete(file);
      }
    });


    //Clear package.json node
    const json = getPackage(host);

    if (json.devDependencies[`@fs-tw/${options.name}`]) {
      delete json.devDependencies[`@fs-tw/${options.name}`];
    }
    if (json.dependencies[`@fs-tw/${options.name}`]) {
      delete json.dependencies[`@fs-tw/${options.name}`];
    }
    overwritePackage(host, json);
  };
}

function addDependenciesToPackageJson(options: ApplicationOptions): (host: Tree) => void {

  return (host: Tree) => {
    // addPackageToPackageJson(host, [`@npm/${options.name}@file:npm/${options.name}`]);
  };

}


function AddFiles(options: ApplicationOptions): Rule {
    return chain([
      mergeWith(
        apply(url(`./files/sources`), [
          template({
            camelize: options.camelize,
            lowerDashCamel :options.lowerDashCamel,
            AllUpper : options.allUpper,
            tmpl: ''
          }),
          move(`libs/${options.lowerDashCamel}`)
        ]),
      ),
      mergeWith(
        apply(url(`./files/config`), [
          template({
            camelize: options.camelize,
            lowerDashCamel :options.lowerDashCamel,
            AllUpper : options.allUpper,
            tmpl: ''
          }),
          move(`config/libs/`)
        ]),
      )

    ]);
}


function finished(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, _context: SchematicContext) => {
    spinner.succeed(`Congratulations, NPM scaffold generation complete.`);
  };
}


function install(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}
export default function (options: ApplicationOptions): Rule {


options.camelize =camelize(options.name);
options.lowerDashCamel = lowerDashCamel(options.name);
options.allUpper = AllUpper(options.name);
  spinner.start(`Generating empty lib scaffold...`);
  return (host: Tree, context: SchematicContext) => {
    return chain([
      clearFiles(options),
      AddFiles(options),
      //addDependenciesToPackageJson(options),
      //install(),
      finished()
    ])(host, context);
  };
}
///第一個字大寫  ex: themeCore-> ThemeCoreModule
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toUpperCase() : word;
  }).replace(/\s+/g, '');
}
///第一個字小寫 ,ex: ThemeCore -> theme-core.module.ts
function lowerDashCamel(str){
  return str.replace(/^[a-z]|[A-Z]/g, function(v, i) {
        return i === 0 ? v.toLowerCase() : "-" + v.toLowerCase();
    })
}
///全部大寫 ex:themeCore -> THEMECORE
function AllUpper(str){
  return str.toUpperCase();
}