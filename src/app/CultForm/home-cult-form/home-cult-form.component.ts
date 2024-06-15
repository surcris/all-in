import { Component, OnInit  } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { RealDBService } from '../../services/real-db.service';


@Component({
  selector: 'app-home-cult-form',
  standalone: true,
  imports: [HeaderCultFormComponent],
  templateUrl: './home-cult-form.component.html',
  styleUrl: './home-cult-form.component.scss'
})
export class HomeCultFormComponent implements OnInit {

  items$: Observable<any> | undefined;

  constructor(private dbService: AuthService,private realdb: RealDBService) { }

  ngOnInit() {
    // this.items$ = this.dbService.getItems();
  }

  
}
