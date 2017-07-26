# ExtReact TechTalk - Building Responsive React Apps with ExtReact

This code was presented during the ExtReact Tech Talk titled "Building Responsive React Apps with ExtReact" on July, 27, 2017

## Quick Start

If you haven't already, sign in to Sencha's NPM registry:

```
npm login --registry=http://npm.sencha.com --scope=@extjs
```

Then, run the following to clone and build the project:

    git clone https://github.com/sencha/ext-react-responsive-techtalk.git
    npm install
    npm start

This will start the app and open it in a browser window.  By default it tries to find
an open port starting with 8080.  You can override the default port by providing `--env.port=(port)` 
as a command line argument.

For example to use port 8081:

    npm start -- --env.port=8081

You can also run and serve a production build using:

    npm run build
    npm run prod
