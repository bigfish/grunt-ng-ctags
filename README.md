# grunt-ng-ctags

> Generate CTags from an Angular.js project

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ng-ctags --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ng-ctags');
```

## The "ng_ctags" task

### Overview
In your project's Gruntfile, add a section named `ng_ctags` to the data object passed into `grunt.initConfig()`.

In this example, tags are generated from source files specified in the `files` section, and written to a tags file
in the same dir as the Gruntfile.

```js
grunt.initConfig({
    ng_ctags: {
      tags: {
        options: {
        },
        files: {
          'tags': ['app/scripts/controllers/**.js'],
        },
      },
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
