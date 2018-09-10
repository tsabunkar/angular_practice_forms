import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  ngOnInit() { }

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
  answerValue = "";
  genders = ['male', 'female', 'others'];

  userObj = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  isFormSubmitted: boolean = false;


  onSubmitOfForm() { //NgForm-> is Angular form Object which run at backside
    console.log('form is submitted !');
    console.log(this.singupForm);
    this.userObj.username = this.singupForm.value.userDataGroup.usernameControl
    this.userObj.email = this.singupForm.value.userDataGroup.emailControl
    this.userObj.secretQuestion = this.singupForm.value.secretControl
    this.userObj.answer = this.singupForm.value.questionAnswerControl
    this.userObj.gender = this.singupForm.value.gender

    this.isFormSubmitted = true; //form is submitted

    this.singupForm.reset();//this will reset previous value entered in the form 
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*  
      this.singupForm.setValue({ //we can set the value of the whole NgForm programmatically using this setValue()
        userDataGroup: {
          usernameControl: suggestedName,
          emailControl: ''
        },
        secretControl: 'pet',
        questionAnswerControl: '',
        gender: 'male'
      }); 
      */

    //?This above approach is not a better approach so using form object with patchValue()

    this.singupForm.form.patchValue({
      userDataGroup: {
        usernameControl: suggestedName
      }
    })

    //! Thus setValue() -> Is to set the whole NgForm Progrmmatically
    //! whereas patchValue() -> Is to set the part/patch of fields/controls in NgForm Progrmmatically

  }

}
