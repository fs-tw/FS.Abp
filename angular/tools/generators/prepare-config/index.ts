import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import {
  addPackageToPackageJson,
  getPackage,
  overwritePackage,
} from './utils/json';
import { SchemaOptions as ApplicationOptions } from './schema';
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
const spinner = new Spinner();

function finished(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, _context: SchematicContext) => {
    spinner.succeed(`Congratulations, Config scaffold generation complete.`);
  };
}

function clearFiles(target: string): (host: Tree) => void {
  return (host: Tree) => {
    //Clear files
    clearbyProject(target, host);
  };

  function clearbyProject(configType: string, host) {
    let result = [];
    switch (configType) {
      case 'base':
        result = [`config/angular.base.json`,
          `config/nx.base.json`,
          `config/schema.json`,
          `config/lib/lib.config.json`]
        break;
      case 'account':
        result =  [`config/account/libs.config.json`]
        break;
      case 'emailing':
        result = [`config/emailing/libs.config.json`]
        break;
    }
    result.filter(p => host.exists(p))
      .forEach(p => host.delete(p));
  }
}

function AddFiles(target: string): Rule {
  return chain([
    mergeWith(
      apply(url(`./files/${target}`), [
        template({
          name: target
        }),
        move(`config`),
      ]),
    )
  ]);

}



export default function (options: ApplicationOptions): Rule {
  spinner.start(`Generating Config scaffold...`);
  return (host: Tree, context: SchematicContext) => {
    return chain([
      clearFiles(options.configName),
      AddFiles(options.configName),
      finished()
    ])(host, context);
  };
}