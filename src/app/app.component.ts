import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*  onSubmitOfForm(formElement: HTMLFormElement) {
     console.log('form is submitted !');
     console.log(formElement);
 
   } */

  /* onSubmitOfForm(formElement: NgForm) { //NgForm-> is Angular form Object which run at backside
    console.log('form is submitted !');
    console.log(formElement);
    
  } */

  @ViewChild('FormElem') singupForm: NgForm;
  defaultQuestion = 'pet'

  onSubmitOfForm() { //NgForm-> is Angular form Object which run at backside
    console.log('form is submitted !');
    console.log(this.singupForm);

  }
}
