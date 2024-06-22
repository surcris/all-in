import { Injectable } from '@angular/core';
import { Joueur } from '../../model/joueur.model';


@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private joueur: Joueur
  constructor() {
    this.joueur = new Joueur(
      'Hero',      // pseudo
      100,         // vieMax
      100,         // vieAct
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

  calculerDegats(
    dommage: number,
    puissance: number,
    statElementaire: number,
    resistanceElementaire: number,
    resBrut: number
  ): number {
    const dommagesElementaires = dommage + puissance * (statElementaire / 100);
    const resistanceTotale = resistanceElementaire + resBrut;
    const facteurResistance = 1 - (resistanceTotale / 100);

    return dommagesElementaires * facteurResistance;
  }

  sortAir(
    resistanceElementaire: number,
    resBrut: number
  ){
    
    return this.calculerDegats(this.getJoueur().getDommage(),this.getJoueur().getPuissance(),this.getJoueur().getAir()+10,resistanceElementaire,resBrut)
  }

  sortEau(
    resistanceElementaire: number,
    resBrut: number
  ){
    
    return this.calculerDegats(this.getJoueur().getDommage(),this.getJoueur().getPuissance(),this.getJoueur().getEau()+10,resistanceElementaire,resBrut)
  }
  sortFeu(
    resistanceElementaire: number,
    resBrut: number
  ){
    
    return this.calculerDegats(this.getJoueur().getDommage(),this.getJoueur().getPuissance(),this.getJoueur().getFeu()+10,resistanceElementaire,resBrut)
  }
  sortTerre(
    resistanceElementaire: number,
    resBrut: number
  ){
    
    return this.calculerDegats(this.getJoueur().getDommage(),this.getJoueur().getPuissance(),this.getJoueur().getTerre()+10,resistanceElementaire,resBrut)
  }
}
