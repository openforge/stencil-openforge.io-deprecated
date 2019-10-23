import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

import rollupPluginNodeBuiltins from 'rollup-plugin-node-builtins';
import rollupPluginNodeGlobals from 'rollup-plugin-node-globals';

export const config: Config = {
  nodeResolve: { browser: true, preferBuiltins: false },
  enableCache: false,
  plugins: [
    rollupPluginNodeBuiltins(),
    rollupPluginNodeGlobals(),
    sass({
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss',
        'src/styles/main.scss',
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://www.openforge.io',
      copy: [
        { src: 'robots.txt' }
      ]
    }
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }
};