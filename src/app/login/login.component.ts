import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

//Tip
//You can define the control with just the initial value, but if your 
//controls need sync or async validation, add sync and async validators as the second and third items in the array.
  loginForm = this.formBuilder.group({
    userName : ['',Validators.required],
    password : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(50)]]
  })

  constructor(private formBuilder: FormBuilder,private loginService: LoginService) { }

  onSubmit(){
    //console.warn();
    this.loginService.login(this.loginForm.value).subscribe(user =>{
      console.log(user.userName);
    });
  }
}
