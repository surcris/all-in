import { Component , OnInit, Renderer2, ElementRef} from '@angular/core';
import { HeaderCultFormComponent } from '../../header-cult-form/header-cult-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JoueurService } from '../../../services/game/joueur.service';
import { MobService } from '../../../services/game/mob.service';
import { CombatZoneComponent } from '../combat-zone/combat-zone.component';
import { MenuGameComponent } from '../menu-game/menu-game.component';
import { AttributGameComponent } from '../attribut-game/attribut-game.component';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [HeaderCultFormComponent, RouterOutlet, RouterLink, RouterLinkActive, CombatZoneComponent, MenuGameComponent, AttributGameComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  constructor() {
    
  }

  

  ngOnInit() {
    
  }

  // Test modification width barre de vie 
  // attck(){
  //   this.myWidth = 100;
  //   this.renderer.setStyle(this.bodyGame, 'width', `${this.myWidth * 1}%`);
  //   console.log(this.myWidth)
  // }
 
}
