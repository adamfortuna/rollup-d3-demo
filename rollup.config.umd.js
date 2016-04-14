import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/whiteboard-arrow.umd.js';
config.moduleName = 'whiteboardArrow';

export default config;
