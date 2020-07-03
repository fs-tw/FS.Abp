import { PostModule } from './post/post.module';


export function loadPostModule() {
  return PostModule;
}


export function loadPostModuleRoute() {
  return {
    path: 'post',
    loadChildren: loadPostModule,
  };
}

