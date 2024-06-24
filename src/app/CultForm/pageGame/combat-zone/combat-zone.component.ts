import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { JoueurService } from '../../../services/game/joueur.service';
import { MobService } from '../../../services/game/mob.service';
import { CombatService } from '../../../services/game/combat.service';
import { LocalStorageGameService } from '../../../services/game/local-storage-game.service';
import { Subscription } from 'rxjs';
import { GameComponent } from '../game/game.component';
import { Joueur } from '../../../model/joueur.model';
GameComponent

@Component({
  selector: 'app-combat-zone',
  standalone: true,
  imports: [],
  templateUrl: './combat-zone.component.html',
  styleUrl: './combat-zone.component.scss'
})
export class CombatZoneComponent implements OnInit {
  private localStorageService:LocalStorageGameService = new LocalStorageGameService()
  private l_mob: MobService = new MobService;
  private l_perso: JoueurService = new JoueurService;
  // private l_Combat: CombatService = new CombatService;

  private gameMain: GameComponent = new GameComponent();

  private joueur = new GameComponent();
  public mob = this.l_Combat.getMobService();


  myWidthEnemy: number = this.l_mob.getPourcentVie();
  myWidthPerso: number = this.l_perso.getPourcentVie();

  enemyBarre: any;
  persoBarre: any;

  jNom: string | undefined;
  jNiveau: number | undefined;

  infoJoueur:any;
  infoMob:any;



  constructor(private renderer: Renderer2, private el: ElementRef, private l_Combat: CombatService) {

    
   
  }



  ngOnInit() {

    // this.l_Combat.initInfo(this.joueur,this.mob)
    this.enemyBarre = this.el.nativeElement.querySelector('.Enemy-barre');
    this.persoBarre = this.el.nativeElement.querySelector('.Perso-barre');

    if (this.enemyBarre && this.persoBarre) {
      // console.log(this.perso.getJoueur().getAir())
      this.renderer.setStyle(this.enemyBarre, 'width', `${this.myWidthEnemy * 1}%`);
      this.renderer.setStyle(this.persoBarre, 'width', `${this.myWidthPerso}%`);
    } else {
      console.log('pas trouver')
    }

    // S'abonner aux changements des informations du joueur
    // this.l_Combat.infoJoueur$.subscribe(infoJoueur => {
    //   this.infoJoueur = infoJoueur;
    // });
    // // S'abonner aux changements des informations du mob
    // this.l_Combat.infoMob$.subscribe(infoMob => {
    //   this.infoMob = infoMob;
    // });


    this.l_Combat.initCombat()
    if (this.gameMain.j instanceof Joueur ) {
      this.l_Combat.reinitPersonnage(this.gameMain.j);
    }
    
    this.startCombat()
    
  }

  skillCase1(){
    // this.l_Combat.clicK()
    const air = this.l_perso.sortAir(this.mob.getResAir(),this.mob.getResBrut())
    this.l_Combat.tourJoueur(air)
    this.l_Combat.sendJoueur(this.joueur)
    // console.log(air)
  }

  skillCase2(){
    const eau = this.l_perso.sortEau(this.mob.getResEau(),this.mob.getResBrut())
    this.l_Combat.tourJoueur(eau)
    // console.log(eau)
  }
  skillCase3(){
    const feu = this.l_perso.sortFeu(this.mob.getResFeu(),this.mob.getResBrut())
    this.l_Combat.tourJoueur(feu)
    // console.log(feu)
  }
  skillCase4(){
    const terre = this.l_perso.sortTerre(this.mob.getResTerre(),this.mob.getResBrut())
    this.l_Combat.tourJoueur(terre)
    // console.log(terre)
  }

  btnBoucle(){
    this.l_Combat.setbtnCombatBoucle();
    this.l_Combat.relanceCombatAfterBoucle()
  }

  async startCombat() {

    await this.l_Combat.cbtTbT()
    

  }

  attendre(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // saveInfoJoueur(){
  //   this.localStorageService.setItem("Joueur",this.joueur)
  //   console.log("info sauvegarder")
  // }

  getInfoJoueur(){
    const r = this.localStorageService.getItemJoueur("Joueur")
    
    // assigner les donner du localstorage a joueur 
    // if (typeof r !== 'string') {
      // Object.assign(this.joueur, r);
    // }else {
    // console.log("infojoueur sauvegarder erreur")
    //}
    // this.l_Combat.sendMessage(this.joueur)
    

    console.log(r, this.joueur)
  }
  
  

}
