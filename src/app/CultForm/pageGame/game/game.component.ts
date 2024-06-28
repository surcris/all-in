import { Component , OnInit, Renderer2, ElementRef} from '@angular/core';
import { HeaderCultFormComponent } from '../../header-cult-form/header-cult-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JoueurService } from '../../../services/game/joueur.service';
import { MobService } from '../../../services/game/mob.service';
import { CombatZoneComponent } from '../combat-zone/combat-zone.component';
import { MenuGameComponent } from '../menu-game/menu-game.component';
import { AttributGameComponent } from '../attribut-game/attribut-game.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageGameService } from '../../../services/game/local-storage-game.service';
import { Joueur } from '../../../model/joueur.model';
import { CombatService } from '../../../services/game/combat.service';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [HeaderCultFormComponent, RouterOutlet, RouterLink, RouterLinkActive, CombatZoneComponent, MenuGameComponent, AttributGameComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  // private combatService:CombatService = new CombatService()
  constructor(private combatService: CombatService) {
    
  }

  ngOnInit() {
    this.combatService.initialisationCombat();
    
    // console.log(this.combatService.getJoueur())
    this.combatService.partagerJoueur()
  }



 
}
