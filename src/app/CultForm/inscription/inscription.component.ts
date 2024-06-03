import { Component, OnInit } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js'


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, HeaderCultFormComponent, NgIf],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent implements OnInit{

  authInsForm:FormGroup;
  formSubmitted: boolean = false;
  messageError:string = "";
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router){
    this.authInsForm = this.formBuilder.group({
      pseudo: ['' , Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      mdp: ['' , Validators.required],
      cmdp: ['' , Validators.required]
    })
  }
  ngOnInit(): void {
      
  }
  onSubmit(){
    this.formSubmitted = true;

    
    if (!this.authInsForm.invalid) {
      if (this.authInsForm.value.cmdp != this.authInsForm.value.mdp) {
        this.messageError = "les mots de passe doivent être identique"
      }else{
        this.messageError = "";

        const formData = {
          pseudo: CryptoJS.AES.encrypt(this.authInsForm.value.pseudo,environment.akey).toString() ,
          email: CryptoJS.AES.encrypt(this.authInsForm.value.email,environment.akey).toString() ,
          password: CryptoJS.AES.encrypt(this.authInsForm.value.mdp,environment.akey).toString() 
        };

        // this.http.put(environment.apiUrltest+"auth/resetmdp", {email:formData.email}).subscribe(
        //   (response: any) => {
        //     console.log('Form Reset', response);
            
            
            
        //   },
        //   error => {
        //     console.error('Error submitting form', error);
        //   }
        // );

        this.http.put(environment.apiUrltest+"/auth/inscripUser", formData).subscribe(
          (response: any) => {
            console.log('Form submitted successfully', response);
            
            this.router.navigate(['/HomeCult']);
            
          },
          error => {
            console.error('Error submitting form', error);
            this.messageError = error.error.message
          }
        );

        
      }
    }
  }
}
