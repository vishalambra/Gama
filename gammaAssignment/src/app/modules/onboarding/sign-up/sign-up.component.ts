import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss','../login/login.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpform: FormGroup;

  constructor(protected fb: FormBuilder,protected commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.initSignUpForm();
  }

  initSignUpForm(){

    this.signUpform = this.fb.group({
      'email': ['', [Validators.required]],
      'name' : ['', [Validators.required]],
      'password':['',[Validators.required]]
    });
  }

  signUp(){
    if(this.signUpform.valid){
      const obj = {
        'email_id': this.signUpform.controls.email.value,
        'name': this.signUpform.controls.name.value,
        'password': this.signUpform.controls.password.value
      }
      this.commonService.signUp(obj).subscribe((resp)=>{
        console.log(resp);
      })
    }else
    return
  }

}
