import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./homeMobile.component.scss']
})
export class HomeComponent {

}
