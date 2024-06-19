import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { PersonnageService } from '../../../services/game/personnage.service';
import { MobService } from '../../../services/game/mob.service';


@Component({
  selector: 'app-combat-zone',
  standalone: true,
  imports: [],
  templateUrl: './combat-zone.component.html',
  styleUrl: './combat-zone.component.scss'
})
export class CombatZoneComponent implements OnInit{
  private mob: MobService = new MobService;
  private perso: PersonnageService = new PersonnageService;

  myWidthEnemy: number = this.mob.getPourcentVie();
  myWidthPerso: number = this.perso.getPourcentVie();
  enemyBarre: any;
  persoBarre: any;

  jNom:string | undefined;
  jNiveau:number | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef,) {
    
  }

  

  ngOnInit() {
    // Set the CSS variable on the app-root element
    this.jNom = this.perso.getJoueur().getPseudo();
    this.jNiveau = this.perso.getJoueur().getNiveau();
    this.enemyBarre = this.el.nativeElement.querySelector('.Enemy-barre');
    this.persoBarre = this.el.nativeElement.querySelector('.Perso-barre');
    
    if (this.enemyBarre && this.persoBarre) {
      // console.log(this.perso.getJoueur().getAir())
      this.renderer.setStyle(this.enemyBarre, 'width', `${this.myWidthEnemy * 1}%`);
      this.renderer.setStyle(this.persoBarre, 'width', `${this.myWidthPerso }%`);
    }else{
      console.log('pas trouver')
    }
  }
}
