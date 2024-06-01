import { Component, OnInit } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderCultFormComponent, NgIf],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent implements OnInit{

  authInsForm:FormGroup;
  formSubmitted: boolean = false;
  messageError:string = "";
  constructor(private formBuilder: FormBuilder,private http: HttpClient){
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
          pseudo: this.authInsForm.value.pseudo,
          email: this.authInsForm.value.email,
          password: this.authInsForm.value.mdp
        };

        // this.http.put(environment.apiUrl+"/api/user/addUserA", formData).subscribe(
        //   (response: any) => {
        //     // console.log('Form submitted successfully', response);
            
            
            
        //   },
        //   error => {
        //     console.error('Error submitting form', error);
        //   }
        // );

        console.log("CARRE")
      }
    }
  }
}
