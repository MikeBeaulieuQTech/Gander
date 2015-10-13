# Gander

Gander is a dashboard to give you usable metrics for a range of open source projects in one quick look. It is designed for individuals who are responsible for running Open Source Offices or keeping track of multiple Open Source projects.

## To get started

```shell
$ git clone git@github.com:paypal/Gander.git
$ cd Gander
$ npm install
$ # add a github personal access token to `app.json`
$ # update the organizations in `app.json` with orgs of your interest.
$ npm run build
$ npm start
$ open http://localhost:8000
```

## Internals

Gander is a [Kraken-js](http://krakenjs.com/) based Node.js application with the client side views written in [React](https://facebook.github.io/react/). Internally Gander app consists of two main parts, a Syncer and the web application itself. To avoid hitting the Github apis often, Gander's Syncer syncs data with Github apis every hour and stores it in LevelDB. The web application is responsible for displaying the data in the desired format. Also, Gander is structured to be an Isomorphic/Universal app. It utilizes [react-engine](https://github.com/paypal/react-engine) to enable isomorphism.

### Build
Gander is written in ES6 JavaScript, which forces a build step to happen to be compatible with Node <= 0.12.x. We use Babel tool to compile the ES6 into ES5 compatible code. Grunt tasks do the heavy lifting of the build process and all tasks are located inside the `tasks` folder. During active development, watch grunt task can be used to actively watch for file changes and rebuild.

### Configuration
All app config is read off of app.json present in the project root. Make sure to provide a valid github access token which is needed for the app to talk to the Github apis to fetch data. The config file also has a configuration to specify an array of organizations' data to fetch from the Github.

### Client
The Gander client is a pure react app. Gander uses react-router to support routing on the client side. All registered routes can be found here `src/public/js/routes.jsx` and all these routes are reshared on the server side while mounting them on Kraken-js/Express. The client has one main layout view file `src/public/js/views/layout.jsx` and all other sub views can be found here in this directory `src/public/js/views/`. The react views are written in JSX format and while running the grunt build task they get converted back into pure JavaScript.


## License
MIT - http://opensource.org/licenses/MIT
