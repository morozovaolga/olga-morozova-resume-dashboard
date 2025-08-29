/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_ADMIN_PASSWORD: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
