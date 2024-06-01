import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import * as CryptoJS from 'crypto-js'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderCultFormComponent, NgIf],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
 
  authCoForm: FormGroup;
  messageError:String;
  formSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient){
    this.authCoForm = this.formBuilder.group({
      email: ['' , [Validators.required, Validators.email]],
      password: ['' , Validators.required]
    })

    this.messageError = '';
  }
  ngOnInit() {
    
  }
  m:string = "";
  test(){
    console.log(environment.akey)
  }
  decrypt(ciphertext:string,key:string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  onSubmit(){

    this.formSubmitted = true;
    
    if(!this.authCoForm.invalid){
     
      const formData = {
        email: this.authCoForm.value.email,
        password: this.authCoForm.value.password
      };
      
      // console.log(CryptoJS.AES.encrypt(this.authCoForm.value.password,environment.akey).toString() )
      // console.log(formData)
      this.http.put(environment.apiUrl+"/auth/connexionUser", formData).subscribe(
        (response: any) => {
          // console.log('Form submitted successfully', response);
          
          // this.m = response.message;
          // localStorage.setItem('akey', response.message);
          
        },
        error => {
          console.error('Error submitting form', error);
        }
      );
      
    }
  }
}
