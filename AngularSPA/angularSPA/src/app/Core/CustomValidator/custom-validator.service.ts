import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, Form } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  patternValidator():ValidatorFn{
    //This validator function is for the password and confirm password field
    //This validator function will check if the user password meets our requirements
    //requirements:
    //minimum password length: 8 characters
    //must contain at least one uppercase letter and one lowercase letter
    //must contain a number

    return (control:AbstractControl): {[key:string]:any} => {
      if (!control.value){
        return null!;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null! : { invalidPassword : true };
    };
  }

  MatchPassword(password:string, confirmPassword:string){
    return (formGroup:FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if (!passwordControl || !confirmPasswordControl){
        return null;
      }
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']){
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({ passwordMismatch : true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
      return null;
    }
  }

  constructor() { }
}
