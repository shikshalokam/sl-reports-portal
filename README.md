# SlAngularBasic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

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

## Integrate Custom library in to our application
1) This library have to be in outside of our application folder
2) Run `ng build libraryName` to build the library
3) Go inside the 'dist/libraryName' and run `npm pack` 
4) Then 'libraryName-0.0.1.tgz' file will get generated ith above command
5) Run `npm install "file://path"` in our angular application with the path the generated 'tgz' file.
6) Now we can import that library and we can use in our application.
