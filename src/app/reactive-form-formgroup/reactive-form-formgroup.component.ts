import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-formgroup',
  templateUrl: './reactive-form-formgroup.component.html',
  styleUrls: ['./reactive-form-formgroup.component.css']
})
export class ReactiveFormFormgroupComponent implements OnInit {


  constructor() { }

  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserNames = ['ram', 'sita']

  ngOnInit() {

    this.signUpForm = new FormGroup({
      'userDataFormGroup': new FormGroup({
        // 'usernameControl': new FormControl(null, [Validators.required, this.customValidator]),//! to solve this error "Cannot read property 'forbiddenUserNames' of undefined"
        'usernameControl': new FormControl(null, [Validators.required, this.customValidator.bind(this)]),//! use bind() method
        'emailControl': new FormControl(null, [Validators.email, Validators.required], [this.customValidatorAsync.bind(this)]), //* 3rd argum is for async validator
      }),
      'genderControl': new FormControl("male"),
      'hobbiesControl': new FormArray([new FormControl('Cricket')])
      // 'hobbiesControl': new FormArray([])
    })

  }//end of ngOnInit()

  onSubmitOfForm() {
    console.log('reactive form is submitted ');
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const controlCreated = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbiesControl')).push(controlCreated)
  }

  //creating a custom validator, Validator is just a function which validates
  //this below function shld return {key: value} -> {myNameIsForbidden: true/false}
  //?These are synchronous Validator
  customValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) { //! we get error- "Cannot read property 'forbiddenUserNames' of undefined"
      return { 'myNameIsForbidden': true }
    }
    return null; //NOTE- never return -> {'myNameIsForbidden': false}
  }

  //?THese are async validator (Which wait for the server to process some implementation/logic)
  //here we are validating the emailid, by throwing error message if email address is abc@gmail.com
  customValidatorAsync(control: FormControl): Observable<any> | Promise<any> | null {
    const prmoiseObj = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'abc@gmail.com') {
          resolve({ 'emailIsForbidden': true })
        } else {
          resolve(null);
        }
      }, 5000)

    })

    return prmoiseObj;
  }

}
