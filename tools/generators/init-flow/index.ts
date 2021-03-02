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
import { SchemaOptions as ApplicationOptions } from './schema';

const spinner = new Spinner();

function clearFiles(target: string): (host: Tree) => void {
  return (host: Tree) => {
    //Clear files
    [
      `npm/${target}/package.json`,
      `npm/root/package.json`,
      `.npmrc`,
      `package-lock.json`
    ]
      .filter(p => host.exists(p))
      .forEach(p => host.delete(p));

    //Clear package.json node
    const json = getPackage(host);
    if(json.dependencies[`@npm/fs-tw`]){
      delete json.devDependencies[`@npm/fs-tw`];
    }
    if (json.devDependencies[`@npm/${target}`]) {
      delete json.devDependencies[`@npm/${target}`];
    }
    overwritePackage(host, json);
  };
}

function addDependenciesToPackageJson(target:string):(host: Tree) => void {
  return (host: Tree) => {
    addPackageToPackageJson(host, [`@npm/fs-tw@file:npm/fs-tw`]);
    addPackageToPackageJson(host, [`@npm/${target}@file:npm/${target}`]);
    // addPackageToPackageJson(host, [`@fs-tw/account@410.0.1`]);
    // addPackageToPackageJson(host, [`@fs-tw/emailing@410.0.1`]);
  };
}


function AddFiles(target:string):Rule{
  return chain([
    mergeWith(
      apply(url(`./files/root-path`), [
        template({
          tmpl: ''
        }),
        move('')
      ]),
    ),
    mergeWith(
      apply(url(`./files/npm/fs-tw`), [
        template({
          tmpl: '',
          name: target
        }),
        move(`npm/fs-tw`),
      ]),
    ),
    mergeWith(
      apply(url(`./files/npm/${target}`), [
        template({
          tmpl: '',
          name: target
        }),
        move(`npm/${target}`),
      ]),
    )

  ]);

}


function finished(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, _context: SchematicContext) => {
    spinner.succeed(`Congratulations, NPM scaffold generation complete.`);
  };
}


export default  function (options:ApplicationOptions):Rule {
  spinner.start(`Generating NPM scaffold...`);
  return (host: Tree, context: SchematicContext) => {
    return chain([
      clearFiles(options.name),
      AddFiles(options.name),
      addDependenciesToPackageJson(options.name),
      
      finished()
    ])(host,context);
  };
}