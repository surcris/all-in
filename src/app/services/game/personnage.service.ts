import { Injectable } from '@angular/core';
import { Joueur } from '../../model/joueur.model';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  private joueur: Joueur
  constructor() {
    this.joueur = new Joueur(
      'Hero',      // pseudo
      1000,         // vieMax
      10,         // vieAct
      1,           // niveau
      10,          // eau
      10,          // feu
      10,          // air
      10,          // terre
      50,          // puissance
      20,          // dommage
      5,           // degatBrut
      10,          // resEau
      10,          // resFeu
      10,          // resTerre
      10,          // resAir
      5,           // resBrut
      0,           // xp
      100          // expLvl
    );
  }

  getJoueur(): Joueur {
    return this.joueur;
  }

  getPourcentVie(): number {
    return this.getJoueur().getVieAct()*100/this.getJoueur().getVieMax()
  }
}