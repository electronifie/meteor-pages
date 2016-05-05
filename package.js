Package.describe({
  "name": "electronifiejs:pages",
  "summary": "State of the art, out of the box Meteor pagination",
  "version": "1.8.8",
  "git": "https://github.com/alethes/meteor-pages"
});

Package.onUse(function(api){
    api.versionsFrom("METEOR@1.2");
    api.use([
        "meteor-platform",
        "check",
        "tracker",
        "underscore",
        "coffeescript",
        "mongo",
        "ejson"
    ]);
    api.use("iron:router@1.0.0", ["client", "server"], { weak: true });

    api.use([
        "templating",
        "spacebars",
        "blaze",
        "session"
    ], "client");

    api.addFiles([
        "lib/pages.coffee"
    ]);

    api.addFiles([
        "client/templates.html",
        "client/controllers.coffee",
        "client/main.css"
    ], "client");

    api.addAssets([
        "public/loader.gif"
    ], ["client"]);
});

Package.onTest(function(api){
    api.use([
        "meteor-platform",
        "coffeescript",
        "alethes:pages"
    ]);

    api.addAssets([
        "public/loader.gif"
    ], "client");
});
