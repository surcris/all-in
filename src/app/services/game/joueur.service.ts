import { Injectable } from '@angular/core';
import { Joueur } from '../../model/joueur.model';


@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private joueur!: Joueur;

  
  constructor() {
   
  }

  getJoueur(): Joueur {
    return this.joueur;
  }

  getPourcentVie(): number {
    return this.joueur.getPourcentVie()
  }

  getDataJoueur(): object{
    const objJoueur = {
      "pseudo": this.joueur.getPseudo(),      // pseudo
      "vieMax": this.joueur.getVieMax(),         // vieMax
      "vieAct": this.joueur.getVieAct(),         // vieAct
      "niveau": this.joueur.getNiveau(),           // niveau
      "eau": this.joueur.getEau(),          // eau
      "feu":this.joueur.getFeu(),          // feu
      "air":this.joueur.getAir(),          // air
      "terre":this.joueur.getTerre(),          // terre
      "puissance":this.joueur.getPuissance(),          // puissance
      "dommage":this.joueur.getDommage(),          // dommage
      "degatBrut":this.joueur.getDegatBrut(),           // degatBrut
      "resEau":this.joueur.getResEau(),          // resEau
      "resFeu":this.joueur.getResFeu(),          // resFeu
      "resTerre":this.joueur.getResTerre(),          // resTerre
      "resAir":this.joueur.getResAir(),          // resAir
      "resBrut":this.joueur.getResBrut(),           // resBrut
      "energie":this.joueur.getEnergie(),           // energie
      "energieLvl":this.joueur.getEnergieLvl()    // energielvl
    }
    return objJoueur
     
    
  }

  buildJoueur():Joueur{
      
      this.joueur.setPseudo("Hero"),      // pseudo
      this.joueur.setVieMax(1000),         // vieMax
      this.joueur.setVieAct(1000),         // vieAct
      this.joueur.setNiveau(1),           // niveau
      this.joueur.setEau(10),          // eau
      this.joueur.setFeu(10),          // feu
      this.joueur.setAir(10),          // air
      this.joueur.setTerre(10),          // terre
      this.joueur.setPuissance(10),          // puissance
      this.joueur.setDommage(10),          // dommage
      this.joueur.setDegatBrut(10),           // degatBrut
      this.joueur.setResEau(10),          // resEau
      this.joueur.setResFeu(10),          // resFeu
      this.joueur.setResTerre(10),          // resTerre
      this.joueur.setResAir(10),          // resAir
      this.joueur.setResBrut(10),           // resBrut
      this.joueur.setEnergie(0),           // energie
      this.joueur.setEnergieLvl(10000)          // energieLvl
 
    return this.joueur;
  }

  setJoueur(data: any): void{

    // const joueur = new Joueur(
      
      this.joueur.setPseudo(data.pseudo),      // pseudo
      this.joueur.setVieMax(data.vieMax),         // vieMax
      this.joueur.setVieAct(data.vieAct),         // vieAct
      this.joueur.setNiveau(data.niveau),           // niveau
      this.joueur.setEau(data.eau),          // eau
      this.joueur.setFeu(data.feu),          // feu
      this.joueur.setAir(data.air),          // air
      this.joueur.setTerre(data.terre),          // terre
      this.joueur.setPuissance(data.puissance),          // puissance
      this.joueur.setDommage(data.dommage),          // dommage
      this.joueur.setDegatBrut(data.degatBrut),           // degatBrut
      this.joueur.setResEau(data.resEau),          // resEau
      this.joueur.setResFeu(data.resFeu),          // resFeu
      this.joueur.setResTerre(data.resTerre),          // resTerre
      this.joueur.setResAir(data.resAir),          // resAir
      this.joueur.setResBrut(data.resBrut),           // resBrut
      this.joueur.setEnergie(data.energie),           // xp
      this.joueur.setEnergieLvl(data.energieLvl)          // expLvl
    // );
    
    // return this.joueur;
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
