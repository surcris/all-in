import { Component, OnInit, SimpleChanges, OnChanges, Input, OnDestroy} from '@angular/core';
import { GameComponent } from '../game/game.component';
import { Joueur } from '../../../model/joueur.model';
import { JoueurService } from '../../../services/game/joueur.service';
import { Subscription } from 'rxjs';
import { CombatService } from '../../../services/game/combat.service';
import { object } from '@angular/fire/database';

@Component({
  selector: 'app-attribut-game',
  standalone: true,
  imports: [],
  templateUrl: './attribut-game.component.html',
  styleUrl: './attribut-game.component.scss'
})
export class AttributGameComponent implements OnInit, OnDestroy {
 

  joueurObs: any = null;
  subscription: Subscription | any = null;

  constructor(private combatService: CombatService) {
    
  }

  
  ngOnInit(): void {
    
    this.combatService.getJoueur().subscribe(joueur => {
      this.joueurObs = joueur;
      // Object.assign(this.joueurObs, joueur);
      console.log("attcc", this.joueurObs)
    });

    

    
  }

  ngOnDestroy(): void {
    // if (this.joueurSubscription) {
    //   this.joueurSubscription.unsubscribe();
    // }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['joueurObs']) {
  //     console.log('Changement détecté dans joueurObs:', changes['joueurObs'].currentValue);
  //   }
  // }
  
}
