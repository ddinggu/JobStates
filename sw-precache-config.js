module.exports = {
  staticFileGlobs: [
    'build/**/*.{js,html,css,png,jpg,gif}',
    'index.html',
    'manifest.json',
    'favicon.ico',
  ],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  importScripts: ['./service-worker-push.js'],
  handleFetch: false,
};
