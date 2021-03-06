import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormFormgroupComponent } from './reactive-form-formgroup/reactive-form-formgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormFormgroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//FormsModule -> Is for Template-driven approach for FORM Creation
    ReactiveFormsModule,//ReactiveFormsModule ->  Is for Reactive-driven approach for FORM Creation
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
