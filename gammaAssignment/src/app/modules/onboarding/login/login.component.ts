import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { CommonServiceService } from '../../../services/common-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(protected fb: FormBuilder,protected commonService: CommonServiceService,protected router: Router) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required]],
      'password':['',[Validators.required]]
    });
  }

  login(){
    if(this.loginForm.valid){
      const obj = {
        'email_id': this.loginForm.controls.email.value,
        'password': this.loginForm.controls.password.value
      }
      this.commonService.login(obj).subscribe((resp)=>{
        console.log(resp);
        let userData = resp
        if(resp && resp['email_id']){
          localStorage.setItem('userEmailId', userData['email_id']);
          this.router.navigate(['/experience'])
        }
      })
    }else
    return
  }

}
