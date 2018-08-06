// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  serverURL: 'http://localhost:8080/restController/',
  production: false,
  firebase: {
    apiKey: "AIzaSyBtDOpvWeayILFzswffTmBRfSz17ai1sig",
    authDomain: "approachangular5.firebaseapp.com",
    databaseURL: "https://approachangular5.firebaseio.com",
    projectId: "approachangular5",
    storageBucket: "",
    messagingSenderId: "674072710505"
  }
};
