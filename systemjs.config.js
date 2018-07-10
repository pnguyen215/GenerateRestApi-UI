(function (global) {

    var ngVer = '@2.0.0'; // lock in the angular package version; do not let it float to current!
    var formsVer = '@2.0.0'; // lock forms version

    //map tells the System loader where to look for things
    var map = {
        'app': 'app',

        '@angular': 'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://npmcdn.com/typescript@2.0.0/lib/typescript.js',
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.ts', defaultExtension: 'ts' },
        'rxjs': { defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'upgrade'
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {

        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);

})(this);


  /*
  Copyright 2016 thoughtram GmbH. All Rights Reserved.
  Use of this source code is governed by an TTML-style license that
  can be found in the license.txt file at http://thoughtram.io/license.txt
  */