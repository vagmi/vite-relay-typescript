/// <reference types="vite/client" />

declare module 'babel-plugin-relay/macro' {
	export { graphql } from 'react-relay'
}


interface ImportMetaEnv {
  readonly VITE_GRAPHQL_TOKEN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}