import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  public formAuth: FormGroup = this.formBuilder.group({
   email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required]]
  });

  public msgError!:string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService){}

  public submitForm(){
    if(this.formAuth?.valid){
      this.authService.signIn({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password
      }).subscribe({
        next: res => res,
        error: e => this.msgError = e
      })
    }
  }
}
