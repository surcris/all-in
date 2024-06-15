import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as CryptoJS from 'crypto-js'
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { CryptService } from '../../services/crypt.service';
AuthService
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeaderCultFormComponent, NgIf],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
 
  authCoForm: FormGroup;
  messageError:String;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router,private authService: AuthService,private crypt: CryptService){
    this.authCoForm = this.formBuilder.group({
      email: ['' , [Validators.required, Validators.email]],
      password: ['' , Validators.required]
    })

    this.messageError = '';
  }
  ngOnInit() {
    
  }

  
  decrypt(ciphertext:string,key:string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  // string encrypt(ciphertext:string,key:string){
  //   return CryptoJS.AES.encrypt(this.authCoForm.value.password,environment.akey).toString()
  // }
  onSubmit(){

    this.formSubmitted = true;
    
    if(!this.authCoForm.invalid){
     
      const formData = {
        email: this.crypt.encrypt(this.authCoForm.value.email),
        password: this.crypt.encrypt(this.authCoForm.value.mdp)
      };

      this.authService.connexion(formData.email, formData.password)
        .then(res => {
          if (res === true) {
            this.router.navigate(['/HomeCult']);
          }else{
            if (res == "auth/missing-password") {
              this.messageError = "Erreur d'identification";
            }else{
              //console.log(res)
              this.messageError = res;
            }
            
          }
        })
        .catch(err => {
          console.error(err);
          this.messageError = "Une erreur est survenue lors de la connexion";
        })

      
    }
  }
}
