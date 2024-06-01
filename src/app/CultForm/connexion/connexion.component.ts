import { Component } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [HeaderCultFormComponent],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  onSubmit(){
    
  }
}
