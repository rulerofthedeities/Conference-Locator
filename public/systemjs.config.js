var isPublic = typeof window != "undefined";
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'client', // 'dist',
    '@angular':                   (isPublic) ? 'node/@angular' : 'node_modules/@angular',
    'rxjs':                       (isPublic) ? 'node/rxjs' : 'node_modules/rxjs',
    'angular2-google-maps':       (isPublic) ? 'node/angular2-google-maps' : 'node_modules/angular2-google-maps'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-google-maps/core':  { main: 'index.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
      'common',
      'forms',
      'compiler',
      'core',
      'router',
      'http',
      'platform-browser',
      'platform-browser-dynamic'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);