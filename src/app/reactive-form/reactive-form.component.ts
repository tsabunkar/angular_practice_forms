import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  genders = ['male', 'female'];
  signUpForm: FormGroup;

  ngOnInit() {
    /*   this.signUpForm = new FormGroup({
        'usernameControl' : new FormControl(null),//1st argum - Initial value for formcontrol,
        // 2nd argum - Validation or array of validation, 3rd argum - asynchronous validation
        'emailControl' : new FormControl(null),
        'genderControl' : new FormControl("male")
      }) */

    this.signUpForm = new FormGroup({
      'usernameControl': new FormControl(null, Validators.required),
      'emailControl': new FormControl(null, [Validators.email, Validators.required]),
      'genderControl': new FormControl("male")
    })

  }//end of ngOnInit()

  onSubmitOfForm() {
    console.log('reactive form is submitted ');
    console.log(this.signUpForm);
  }


}
