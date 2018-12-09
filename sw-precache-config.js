module.exports = {
  staticFileGlobs: ['build/**/*.{js,html,css,png,jpg}'],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  importScripts: ['./service-worker-push.js'],
  handleFetch: false,
};
