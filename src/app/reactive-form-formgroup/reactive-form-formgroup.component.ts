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
  isFormSubmitted: boolean = false;
  userObj = {
    username: '',
    email: '',
    gender: '',
    hobbies : []
  }


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
    });
    //!Value changes
    // this.signUpForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })
    //!Status changes
    // this.signUpForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    // })
    //!setting/predefining the values for complete reactive form
    // this.signUpForm.setValue({
    //   'userDataFormGroup': {
    //     "usernameControl": 'Tejas',
    //     'emailControl': 'tsabunkar@gmail.com'
    //   },
    //   'genderControl': 'male',
    //   'hobbiesControl': []
    // })

    //!setting/predefining the part/patch of the reactive form
    this.signUpForm.patchValue({ 
      'userDataFormGroup': {
        "usernameControl": 'Tejas',
      }
    })


  }//end of ngOnInit()

  onSubmitOfForm() {
    console.log('reactive form is submitted ');
    console.log(this.signUpForm);

    this.userObj.username = this.signUpForm.value.userDataFormGroup.usernameControl
    this.userObj.email = this.signUpForm.value.userDataFormGroup.emailControl
    this.userObj.gender = this.signUpForm.value.genderControl
    this.userObj.hobbies = this.signUpForm.value.hobbiesControl

    this.isFormSubmitted = true;
    this.signUpForm.reset();//reseting all the controls/fields in the form
  }

  onAddHobby() {
    const controlCreated = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbiesControl')).push(controlCreated)
  }

  //creating a custom validator, Validator is just a function which validates
  //this below function shld return {key: value} -> {myNameIsForbidden: true/false}
  //These are //? synchronous Validator

  customValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) { //! we get error- "Cannot read property 'forbiddenUserNames' of undefined"
      return { 'myNameIsForbidden': true }
    }
    return null; //NOTE- never return -> {'myNameIsForbidden': false}
  }

  //THese are //?async validator (Which wait for the server to process some implementation/logic)
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
  }//end of customValidatorAsync()

}
