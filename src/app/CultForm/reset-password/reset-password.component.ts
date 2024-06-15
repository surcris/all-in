import { Component } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { CryptService } from '../../services/crypt.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderCultFormComponent,NgIf],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  errorMessage: string = '';
  successMessage: string = '';
  authResForm: FormGroup ;
  formSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private auth: AuthService, private crypt: CryptService){
    this.authResForm = this.formBuilder.group({
      email: ['' , [Validators.required, Validators.email]],
      
    })
  }

  resetPassword() {
    this.errorMessage = '';
    this.successMessage = '';
    

    this.auth.resetPassword(this.crypt.encrypt(this.authResForm.value.email))
      .then((res) => {
        this.successMessage = res;
        console.log(res)
      })
      .catch((err) => {
        this.errorMessage = err;
      })
    
  }
}
