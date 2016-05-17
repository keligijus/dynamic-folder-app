#Dynamic Folder App

This app, displays a folder tree with unlimited depth.
A user can expand folder branches and add child nodes to any branch.

An active branch is always highlighted.

##Usage

You need [npm](https://docs.npmjs.com/getting-started/installing-node), [bower](http://bower.io/#install-bower) and [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to run the app.

Run `$ npm install`, `$ bower install`, `$ gulp serve` and you're good.

Sorry for a ton (~160mb) of files. That's the price we'll have to pay for using Yoeman.

##Choices & Decisions

I've used a [Gulp Angular Generator](https://github.com/Swiip/generator-gulp-angular) for rapid development.

Angular is perfect for this kind of task as it allows a lot of tasks to be done directly in HTML.

The app calls a template of a tree node recursively. This way it's possible to achieve virtually unlimited depth of the folder tree.