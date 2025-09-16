#!@GJS@ -m

import GLib from "gi://GLib";

// Initalize the package
imports.package.init({
  name: "@PACKAGE_NAME@",
  version: "@PACKAGE_VERSION@",
  prefix: '@PREFIX@',
  libdir: '@LIBDIR@'

});

// Import the main module ndrun the mainfunction
const loop = new GLib.MainLoop(null, false);
import("resource:///org/gtkjs/app/js/main.js")
  .then((main) => {
    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
      loop.quit();
      imports.package.run(main)
      return GLib.SOURCE_REMOVE;

    });
  })
  .catch(logError);
loop.run();
