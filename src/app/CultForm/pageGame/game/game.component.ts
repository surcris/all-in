import { Component } from '@angular/core';
import { HeaderCultFormComponent } from '../../header-cult-form/header-cult-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [HeaderCultFormComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
