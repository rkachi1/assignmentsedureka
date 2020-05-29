import { Directive, Input } from '@angular/core';
import { Validator,AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmpasswordvalidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmpasswordvalidatorDirective,
    multi:true
  }]
})

export class ConfirmpasswordvalidatorDirective implements Validator{
  @Input() appConfirmpasswordvalidator:string;  // the input is declared in order to pass the incoming confirmpasswordvalue entered in the form in the template

  // the validate method will recieve the confirmpassword string as the validator
  validate(control:AbstractControl): { [key:string ]: any} | null {
    const controlToCompare = control.parent.get(this.appConfirmpasswordvalidator);
    if(controlToCompare.value !== control.value){
      return {'notEqual': true }
    }
    return null;
  }


}
