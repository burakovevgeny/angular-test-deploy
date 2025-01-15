declare interface Env {
  readonly TEST: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

declare namespace NodeJS {
  export interface ProcessEnv extends Env {}
}
