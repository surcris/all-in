import { Component } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';

@Component({
  selector: 'app-home-cult-form',
  standalone: true,
  imports: [HeaderCultFormComponent],
  templateUrl: './home-cult-form.component.html',
  styleUrl: './home-cult-form.component.scss'
})
export class HomeCultFormComponent {

}
