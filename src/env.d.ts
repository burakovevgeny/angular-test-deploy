declare interface Env {
  readonly NG_APP_TEST: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

declare const _NGX_ENV_: Env;
