import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header-cult-form',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header-cult-form.component.html',
  styleUrl: './header-cult-form.component.scss'
})
export class HeaderCultFormComponent {

}
