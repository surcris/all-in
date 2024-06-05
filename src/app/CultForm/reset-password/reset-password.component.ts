import { Component } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';
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
  constructor(private formBuilder: FormBuilder,private http: HttpClient){
    this.authResForm = this.formBuilder.group({
      email: ['' , [Validators.required, Validators.email]],
      
    })
  }

  resetPassword() {
    this.errorMessage = '';
    this.successMessage = '';

    this.http.put(environment.apiUrl+"/auth/resetmdp",{email: this.authResForm.value.email}).subscribe(
      (response: any) => {
        console.log('Form submitted successfully', response);
        this.successMessage = 'Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.';
        // this.m = response.message;
        // localStorage.setItem('akey', response.message);
        // this.router.navigate(['/HomeCult']);
      },
      error => {
        // console.error('Error submitting form', error);
        this.errorMessage = error.error.message
      }
    );
    
  }
}
