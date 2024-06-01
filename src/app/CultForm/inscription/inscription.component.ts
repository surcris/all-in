import { Component } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [HeaderCultFormComponent],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {

  onSubmit(){
    
  }
}
