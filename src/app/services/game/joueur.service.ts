import { Injectable } from '@angular/core';
import { Joueur } from '../../model/joueur.model';


@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private joueur: Joueur;

  
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

  getDataJoueur(data: any){
    const b = {
      "_pseudo": data._pseudo,      // pseudo
      "_vieMax": data._vieMax,         // vieMax
      "_vieAct": data._vieAct,         // vieAct
      "_niveau": data._niveau,           // niveau
      "_eau": data._eau,          // eau
      "_feu":data._feu,          // feu
      "_air":data._air,          // air
      "_terre":data._terre,          // terre
      "_puissance":data._puissance,          // puissance
      "_dommage":data._dommage,          // dommage
      "_degatBrut":data._degatBrut,           // degatBrut
      "_resEau":data._resEau,          // resEau
      "_resFeu":data._resFeu,          // resFeu
      "_resTerre":data._resTerre,          // resTerre
      "_resAir":data._resAir,          // resAir
      "_resBrut":data._resBrut,           // resBrut
      "_energie":data._energie,           // xp
      "_energieLvl":data._energieLvl 
    }
    return b
     
    
  }

  setJoueur(data: any){

    const joueur = new Joueur(
      data._pseudo,      // pseudo
      data._vieMax,         // vieMax
      data._vieAct,         // vieAct
      data._niveau,           // niveau
      data._eau,          // eau
      data._feu,          // feu
      data._air,          // air
      data._terre,          // terre
      data._puissance,          // puissance
      data._dommage,          // dommage
      data._degatBrut,           // degatBrut
      data._resEau,          // resEau
      data._resFeu,          // resFeu
      data._resTerre,          // resTerre
      data._resAir,          // resAir
      data._resBrut,           // resBrut
      data._energie,           // xp
      data._energieLvl          // expLvl
    );
    
    return joueur;
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
