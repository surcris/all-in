import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleMenu(){
    const menu = document.querySelector('.menu-link')
    const icon = document.querySelector('.hamburger-icon')
    menu?.classList.toggle('open')
    icon?.classList.toggle('open')
  }
}
