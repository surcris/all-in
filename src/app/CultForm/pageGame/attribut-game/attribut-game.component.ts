import { Component, OnInit, SimpleChanges, OnChanges, Input, OnDestroy} from '@angular/core';
import { GameComponent } from '../game/game.component';
import { Joueur } from '../../../model/joueur.model';
import { JoueurService } from '../../../services/game/joueur.service';
import { Subscription } from 'rxjs';
import { CombatService } from '../../../services/game/combat.service';

@Component({
  selector: 'app-attribut-game',
  standalone: true,
  imports: [],
  templateUrl: './attribut-game.component.html',
  styleUrl: './attribut-game.component.scss'
})
export class AttributGameComponent implements OnInit, OnDestroy {
  joueurObs:Joueur | null = null;
  @Input() ds:any | null = null;
  private joueurSubscription: Subscription | null = null;
  data: string | any = "";

  // private l_Combat: CombatService = new CombatService;

  joueur: any[] = [];
  subscription: Subscription | any = null;

  constructor(private gameComponent: GameComponent,private cb: CombatService) {
    this.cb = new CombatService();
    this.joueurObs = this.cb.joueur
    // console.log("Attribut",this.cb.joueur)
  }

  
  ngOnInit(): void {

   
    this.subscription = this.cb.getJoueur().subscribe(joueur => {
      if (joueur) {
        console.log('Attribut',joueur)
        this.joueurObs = joueur
        
      } else {
        // clear messages when empty message received
        this.joueur = [];
      }
    });

    

    
  }

  ngOnDestroy(): void {
    if (this.joueurSubscription) {
      this.joueurSubscription.unsubscribe();
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['joueurObs']) {
  //     console.log('Changement détecté dans joueurObs:', changes['joueurObs'].currentValue);
  //   }
  // }
  
}
