declare interface Env {
  readonly NG_APP_PUBLIC_TEST: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

declare namespace NodeJS {
  export interface ProcessEnv extends Env {}
}
