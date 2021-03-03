import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import { SchemaOptions as ApplicationOptions } from './schema';
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
import * as npmGenerators from '../prepare-npm/index';
import * as configGenerators from '../prepare-config/index';
import * as mergeGenerators from '../merge-config/index';


function finished(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, _context: SchematicContext) => {
    spinner.succeed(`Congratulations, init-flow scaffold generation complete.`);
  };
}

const spinner = new Spinner();
export default function (options: ApplicationOptions): Rule {
  return (host: Tree, context: SchematicContext) => {

    spinner.start(`Generating init-flow scaffold...`);
    return chain([
      npmGenerators.default(options),
      configGenerators.default(options),
      mergeGenerators.default(),
      finished()
    ])(host, context);
  };

}