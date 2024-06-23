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
  joueurObs = new BehaviorSubject<any>(null);
  joueur = this.joueurObs.asObservable();
  private lsj = new LocalStorageGameService();

  constructor(private l_Combat: CombatService) {
    
  }

  ngOnInit() {
    this.initJoueur();
  }


  initJoueur(){
    const l = this.lsj.getItemJoueur("Joueur")
    if (l !== null) {
      // this.joueurObs.next(l)
      this.l_Combat.sendJoueur(l)
      console.log("EEE",l)
    }else{
      const j = new JoueurService().getJoueur()
      // this.joueurObs.next(j)
      this.l_Combat.sendJoueur(j)
      console.log("DDD",j)
    }
  }

  updateJoueurMain(joueur: any) {
    const currentJoueur = this.joueurObs;
    if (currentJoueur) {
      const updatedJoueur = joueur;
      
      this.joueurObs.next(updatedJoueur);
      console.log('Joueur mis à jour :', updatedJoueur);
    }
  }
 
}
