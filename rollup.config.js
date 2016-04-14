import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'lib/index.js',
  sourceMap: true,
  plugins: [nodeResolve({ jsnext: true, main: true }), babel()]
};
