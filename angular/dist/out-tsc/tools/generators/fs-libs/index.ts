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

const spinner = new Spinner();

function clearFiles(options: ApplicationOptions): (host: Tree) => void {
  return (host: Tree) => {
    //Clear files
    host.visit(file => {
      if (file.startsWith(`/libs/${options.name}`)) {
        host.delete(file);
      }
      if (file.startsWith(`/config/${options.name}`)) {
        host.delete(file);
      }
      if (file.startsWith(`/npm/${options.name}`)) {
        host.delete(file);
      }
    });


    //Clear package.json node
    const json = getPackage(host);
    console.log(json.dependencies[`@npm/${options.name}`]);

    if (json.devDependencies[`@npm/${options.name}`]) {
      delete json.devDependencies[`@npm/${options.name}`];
    }
    if (json.dependencies[`@npm/${options.name}`]) {
      delete json.dependencies[`@npm/${options.name}`];
    }
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
    if(options.includeSourceCode == 'false')
    addPackageToPackageJson(host, [`@npm/${options.name}@file:npm/${options.name}`]);
  };

}


function AddFiles(options: ApplicationOptions): Rule {
  if (options.includeSourceCode == 'false') {
    return chain([
      mergeWith(
        apply(url(`./files/${options.name}/npm`), [
          template({
            versionNo: options.abpVersion,
            tmpl: ''
          }),
          move(`npm/${options.name}`)
        ]),
      ),
    ]);
  } else {
    return chain([
      mergeWith(
        apply(url(`./files/${options.name}/sources`), [
          template({
            versionNo: options.abpVersion,
            tmpl: ''
          }),
          move(`libs/${options.name}`)
        ]),
      ),
      mergeWith(
        apply(url(`./files/${options.name}/config`), [
          template({
            versionNo: options.abpVersion,
            tmpl: ''
          }),
          move(`config/${options.name}`),
        ]),
      )

    ]);
  }

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

  spinner.start(`Generating NPM scaffold...`);
  return (host: Tree, context: SchematicContext) => {
    return chain([
      clearFiles(options),
      AddFiles(options),
      addDependenciesToPackageJson(options),
      finished()
    ])(host, context);
  };
}