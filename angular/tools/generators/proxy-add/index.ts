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
  let runAngularLibrarySchematic = wrapAngularDevkitSchematic(
    '@abp/ng.schematics',
    'proxy-add'
  );

  await runAngularLibrarySchematic(host, {
    module: schema.module,
    source: schema.source,
    target: 'proxy',
  });

  console.log(`proxy add '${schema.module} success`);

  moveFilesToNewDirectory(
    host,
    'libs\\proxy\\src\\lib\\proxy',
    `libs\\proxy\\${schema.module}\\src`
  );

  generateFiles(
    host,
    joinPathFragments(__dirname, '.', './files'),
    `libs\\proxy\\${schema.module}`,
    {
      tmpl: '',
    }
  );

  return () => {
    console.log(`proxy add '${schema.module} success`);
  };
}
