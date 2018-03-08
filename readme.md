# SourceData SmartFigures Template

## Development requirements

This project requires gulp-cli installed globally as the first dependency (and, of course, node.js and npm)

Install node/npm for your system by following the instructions [here](https://nodejs.org/en/)

Then install the gulp cli globally (this will make it available from anywhere on your system):

```
npm install -g gulp-cli
```

Then install the rest of the project dependencies using npm:

```
npm install
```

A post-install script will do an initial compile of the scss files and put the results in styles/main.css

When developing, you should run the "gulp" command from the command line. This will open a browser session (using Browsersync), watch the scss files in src/scss for changes and recompile/refresh the browser when you change anything. Changes to index.html will also refresh the browser.

Note: Autoprefixer is used to add browser prefixing to the styles in the scss files. Without compiling the scss files into css using Gulp, the styles may not be cross-browser safe.

22/01/2018 - update: the project also now uses webpack to compile the javascript imported through src/js/main.js - as with the SCSS files, an initial compile will be done on installation and, by running the default "gulp" task, webpack will watch the JS files in /src/js for changes and recompile when a change happens.

## Modifying the contents

All the styles and scripts are contained in the /src directory, under /src/js or /src/scss. In the scss directory, the styles are (quite roughly) broken down into categories. When running `gulp build` these are concatenated into the /styles/main.css file which should be the file used in production.

All the styles work under a container with the class .smartFigure in order to prevent any conflicts with styling in pages containing the figure. So, for example, the "button" styling applies to all `.smartFigure button` elements.

The only exception is the lightbox, where a container with the ID #smartFigureLightBox is the outer container, with all styles applied beneath it.

## Build

if you are compiling the resources for a live build, you can just run "gulp build"

```
gulp build
```

This will concatenate and minify any script and scss files into scripts/main.js and styles/main.css

You will need the contents of the scripts and styles directories plus the images directory containing any images that you are not getting dynamically from elsewhere.

## Implementation

If adding this template to a framework where dynamic content is inserted, please see the comments inserted in index.html (for the main SmartFigure) and fullimage.html (for the lightbox).

Please note that the Javascript included in this repository is just prototype content written in plain Javascript. It is functional on modern browsers (IE11+) but is intended as a placeholder with the assumption that event-handling will be managed by a Javascript framwork in production. 
