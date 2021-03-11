import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
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
import * as mergeGen from '../merge-config';
const spinner = new Spinner();

function finished(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, _context: SchematicContext) => {
    spinner.succeed(`Congratulations, Config scaffold generation complete.`);
  };
}

function clearFiles(target: string): (host: Tree) => void {
  return (host: Tree) => {
    //Clear files
    host.visit(file => {
      if (file.startsWith(`/libs/${target}.config.json`)) {
        host.delete(file);
      }
    });
  };
}

function AddConfig(target: string): Rule {
  return chain([
    mergeWith(
      apply(url(`./files/${target}/config`), [
        template({
          name: target,
          tmpl: ''
        }),
        move(`config/libs/${target}`),
      ]),
    )
  ]);
}

function AddFiles(target: string): Rule {
  return chain([
    mergeWith(
      apply(url(`./files/${target}/sources`), [
        template({
          tmpl:'',
          name: target
        }),
        move(`libs/${target}`),
      ]),
    )
  ]);
}



export default function (options: ApplicationOptions): Rule {
  if(!options.name) return;
  spinner.start(`Generating theme-sources scaffold...`);
  return (host: Tree, context: SchematicContext) => {
    return chain([
      clearFiles(options.name),
      AddConfig(options.name),
      AddFiles(options.name),
      mergeGen.default(),
      finished()
    ])(host, context);
  };
}