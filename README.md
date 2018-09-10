# AngularForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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
===========================================================================================================
Angular and forms
Note - In general wkt, when we submit the form data it will go to backend but page reloads
but Our Intention for using Angular is bcoz to achieve SPA (No reloading of page)

Angular at backside run an Object is called -> NgForm
This Object has  fields like value (which has key value pairs of the form fields), valid, controls, dirty,disabled,enabled,errors,control,etc...

Angular has 2 approach for forms
Template-Driven approach (Angular infers the form Object from the DOM)
Reactive approach (Form is created programmatically in .ts and synchronized with the DOM)

FormsModule,//FormsModule -> Is for Template-driven approach for FORM Creation

<input 
      type="text"
      id="username" 
      class="form-control"
      ngModel 
      name="username"
            >
This ngModel tells angular that this input is a control for our Angular form [NgForm] (is callled Registring the control to ANgular Form Object)            
--------------------------------------------------------------------------------------------------------

