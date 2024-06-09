import { Component, OnInit  } from '@angular/core';
import { HeaderCultFormComponent } from '../header-cult-form/header-cult-form.component';
import { ApiService } from '../../api.service';
ApiService
@Component({
  selector: 'app-home-cult-form',
  standalone: true,
  imports: [HeaderCultFormComponent],
  templateUrl: './home-cult-form.component.html',
  styleUrl: './home-cult-form.component.scss'
})
export class HomeCultFormComponent {

  message: string | undefined;
  
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    

    
  }

  callApi(){
      this.apiService.getMessage().subscribe((data: any) => {
        console.log(data)
        this.message = data;
      });
    }
}
