import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [HeaderCultFormComponent],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {

  authCoForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.authCoForm = this.formBuilder.group({
      email: ['' , Validators.required],
      password: ['' , Validators.required]
    })
  }
  ngOnInit() {
    
  }

  onSubmit(){
    
  }
}
