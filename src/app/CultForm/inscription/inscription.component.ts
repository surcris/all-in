import { Component, OnInit } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../services/auth.service';
import { CryptService } from '../../services/crypt.service';

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
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router,private authService: AuthService,private crypt: CryptService){
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
          pseudo: this.crypt.encrypt(this.authInsForm.value.pseudo),
          email: this.crypt.encrypt(this.authInsForm.value.email),
          password: this.crypt.encrypt(this.authInsForm.value.mdp)
        };

        this.authService.inscription(formData.email, formData.password)
          .then(res => {
            if (res === true) {
              this.router.navigate(['/HomeCult']);
            }else{
              this.messageError = res;
            }
          })
          .catch(err => {
            console.error(err)
            this.messageError = "Une erreur est survenue lors de la connexion";
          })
          
        
      }
    }
  }
}
