import {
  Tree,
  formatFiles,
  installPackagesTask,
  moveFilesToNewDirectory,
  visitNotIgnoredFiles,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';

export default async function (host: Tree, schema: any) {
  let module=schema.module;
  let source=schema.application;
  let target=schema.library;
  let runAngularLibrarySchematic = wrapAngularDevkitSchematic(
    '@abp/ng.schematics',
    'proxy-add'
  );

  await runAngularLibrarySchematic(host, {
    module: module,
    source: source,
    target: target
  });

  console.log(`proxy add '${module} to ${target} success at ${source}`);

  moveFilesToNewDirectory(
    host,
    `libs\\${target}\\src\\lib\\proxy`,
    `libs\\${target}\\proxy\\${module}\\src`
  );

  generateFiles(
    host,
    joinPathFragments(__dirname, '.', './files'),
    `libs\\${target}\\proxy\\${module}`,
    {
      tmpl: '',
    }
  );

  return () => {
    console.log(`proxy add '${module} to ${target} success at ${source}`);
  };
}
