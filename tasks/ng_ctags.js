/*
 * grunt-ng-ctags
 * https://github.com/bigfish/ng-ctags
 *
 * Copyright (c) 2014 David Wilhelm
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('ng_ctags', 'Generate CTags from an Angular.js project', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    var tags = [];

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
        //find vars attached to $scope
        //restrict to LHS, where first thing on line is $scope
        //since this is the usual pattern for assignment
        var scopeVarRE = /\$scope\.([$a-zA-Z0-9_]+)\s*\=/gm;
        var scopeVars = {};
        var src = grunt.file.read(filepath);
        var matches = scopeVarRE.exec(src);
        var varName;
        var tag = '';
        var tab = '	';
        while (matches) {
          varName = matches[1];
          //make tag if we haven't already
          if (!scopeVars[varName]) {
            scopeVars[varName] = varName;
            //output ctag
            tag = varName + tab + filepath + tab + '/$scope.' + varName + '/';
            tags.push(tag);
          }
          matches = scopeVarRE.exec(src, scopeVarRE.lastIndex);
        }
      });

      // Write the destination file.
      grunt.file.write(f.dest, tags.sort().join('\n'));

      // Print a success message.
      grunt.log.writeln('CTags file "' + f.dest + '" created.');
    });
  });

};
