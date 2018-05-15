# Epynotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Developing Path 

adding service worker feature to the project

`ng add @angular/pwa --project epynotes`

install HttpServer 

`npm -g install http-server` and run it: `http-server ./dist/epynotes`

Add angular material using new feature introduced on 6.0.0v of angular CLI:

`ng add @angular/material`

Add firebase library to use in angular from [github](https://github.com/angular/angularfire2)

`npm install firebase angularfire2 --save`

compatibility with ng6 and rxjs6

`npm install rxjs@6 rxjs-compat@6 --save`

install firebase tools

`npm install -g firebase-tools`

`firebase login` login to firebase

`firebase init` init the project and select `Hosting` in the options. Now select the Firebase project: `epynotes`. PUblic directory: `dist/epynotes`.
Redirect to /index.html?: `yes`. Overryde: `NO`


`firebase deploy` deploy it
