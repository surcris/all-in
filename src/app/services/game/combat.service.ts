import { Injectable } from '@angular/core';
import { MobService } from './mob.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { JoueurService } from './joueur.service';
import { Joueur } from '../../model/joueur.model';
import { Mob } from '../../model/mob.model';
import { LocalStorageGameService } from './local-storage-game.service';
import { GameComponent } from '../../CultForm/pageGame/game/game.component';
MobService
JoueurService

@Injectable({
  providedIn: 'root'
})
export class CombatService {

  private localStorageService:LocalStorageGameService = new LocalStorageGameService()

  private l_mob: MobService = new MobService;
  private l_perso: JoueurService = new JoueurService;

  joueur:Joueur = this.l_perso.getJoueur();
  public mob:Mob = this.l_mob.getMob();

  private compteR: number = 10;
  private timeoutId: any = null;
  private tourPlayerAct: string = '';
  
  private joueurAJoue: boolean = false;
  private statusCombat:boolean = false;
  private nbrTour:number = 0;

  private subject = new BehaviorSubject<any>(null);
  public btnCombatBoucle:boolean = false;


  constructor() {
    // this.initJoueur()
    // this.initInfo(this.joueur,this.mob)
  }

  partagerJoueur() {
    this.subject.next(this.joueur);
    // console.log("De partagerJoueur",this.joueur)
  }

  clearJoueur() {
    this.subject.next(null);
  }

  getJoueur(): Observable<any> {
    return this.subject.asObservable();
  }

  initialisationCombat(){
    this.initJoueur();

    this.initParametreCombat();

    // this.partagerJoueur();
  }

  initJoueur(){
    const l = this.localStorageService.getItemJoueur("Joueur")
    if (l !== null) {
      this.joueur = l;
      this.partagerJoueur()
      console.log("donnée Joueur importé du localStrorage")
    }else{
      this.partagerJoueur()
      console.log("donnée Joueur non importé")
    }
  }
  


  reinitPlayers(){

    this.joueur.setVieAct(this.joueur.getVieMax())
    console.log("REINIT ",this.joueur)
    // this.mob.setVieAct(this.mob.getVieMax())
    this.mob = this.l_mob.getNewMob()
    // console.log("REInit Personnage : ",this.joueur,this.mob)
    // this.initInfo(this.joueur,this.mob)

  }

  initParametreCombat(){
    // this.startTour(); // commence le compte a rebour du tour
    this.joueurAJoue = false;
    this.tourPlayerAct = 'joueur';
    this.statusCombat = false;
    
    
  }

  getMobService():Mob{
    return this.mob
  }
  getJoueurService():Joueur{
    return this.joueur
  }

  initInfo(joueur: Joueur, mob: Mob) {
    // console.log("Init Info : ",this.joueur,this.mob)
    // Initialiser les Players 
    this.updateInfoJoueur()
    this.updateInfoMob()
  }


  setbtnCombatBoucle(){
    this.btnCombatBoucle = !this.btnCombatBoucle ;
    if (this.btnCombatBoucle) {
      console.log("Combat en boucle Activer")
    }else{
      console.log("Combat en boucle Désactiver")
    }
  }

  async relanceCombatAfterBoucle(){
    if (!this.statusCombat) {
      await this.cbtTbT()
    }
  }

  updateInfoMob() {
    // console.log("Dans update Mob",mob);
    this.mob = this.l_mob.getNewMob();
    // console.log("Dans update Mob Parti 2 :",this.mob);
    // const infoMob = {
    //   nom: this.mob.getNom(),
    //   vieAct: this.mob.getVieAct(),
    //   vieMax: this.mob.getVieMax(),
    //   niveau: this.mob.getNiveau(),
    // };
    // this.infoMobSubject.next(infoMob); // mise à jour infoMob
    
  }

  updateInfoJoueur() {
    // this.joueur ;
    // const infoJoueur = {
    //   pseudo: this.joueur.getPseudo(),
    //   vieAct: this.joueur.getVieAct(),
    //   vieMax: this.joueur.getVieMax(),
    //   niveau: this.joueur.getNiveau(),
    // };
    // this.infoJoueurSubject.next(infoJoueur); // mise à jour infoJoueur
    // this.jObs.updateJoueurMain(this.joueur)
    this.partagerJoueur()
    console.log("Update",this.joueur);
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

  calculDegatsElementaire(
    attaquant: Joueur | Mob,
    cible: Joueur | Mob,
    element: string

  ): number | undefined {


    element = element.toLowerCase(); // convertion string a lowercase pour accepter les majuscule et minuscule dans la données
    // entite = entite.toLowerCase(); // convertion string a lowercase pour accepter les majuscule et minuscule dans la données

    if (attaquant instanceof Joueur) {
      switch (element) {
        case 'eau':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getEau(),
            cible.getResEau(),
            cible.getResBrut()
          );

        case 'air':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getAir(),
            cible.getResAir(),
            cible.getResBrut()
          );

        case 'feu':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getFeu(),
            cible.getResFeu(),
            cible.getResBrut()
          );

        case 'terre':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getTerre(),
            cible.getResTerre(),
            cible.getResBrut()
          );

        default:
          console.error(`Élément inconnu: ${element}`);
          return undefined;
      }
    } else if (attaquant instanceof Mob) {
      switch (element) {
        case 'eau':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getEau(),
            cible.getResEau(),
            cible.getResBrut()
          );

        case 'air':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getAir(),
            cible.getResAir(),
            cible.getResBrut()
          );

        case 'feu':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getFeu(),
            cible.getResFeu(),
            cible.getResBrut()
          );

        case 'terre':
          return this.calculerDegats(
            attaquant.getDommage(),
            attaquant.getPuissance(),
            attaquant.getTerre(),
            cible.getResTerre(),
            cible.getResBrut()
          );

        default:
          console.error(`Élément inconnu: ${element}`);
          return undefined;
      }
    } else {
      console.error(`Attaquant inconnue: ${typeof attaquant}`);
      return undefined;
    }
  }

  calculerEnergieGagnee(joueur: Joueur, mob: Mob): number {
    const differenceNiveaux = joueur.getNiveau() - mob.getNiveau();

    // Ajustement de l'énergie en fonction de la différence de niveaux
    let energieGagnee = 100; // Exemple de valeur de base

    if (differenceNiveaux > 0) {
      // Si le joueur est d'un niveau supérieur au mob
      energieGagnee -= differenceNiveaux * 10; // Réduction linéaire
    } else if (differenceNiveaux < 0) {
      // Si le mob est d'un niveau supérieur au joueur
      energieGagnee += Math.abs(differenceNiveaux) * 10; // Augmentation linéaire
    }

    return energieGagnee;
  }

  calculRecompense(joueur: Joueur, mob: Mob) {
    const eneGain = this.calculerEnergieGagnee(joueur, mob);
    this.joueur.setEnergie(eneGain)
    console.log('Énergie gagnée', eneGain);
  }

  stopTour() {
    // console.log('Stop')
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null; // Réinitialiser l'ID du timeout
      this.compteR = 10;
    }
  }

  startTour() {
    // console.log('Start')
    this.timeoutId = setTimeout(() => {
      this.compteR = this.compteR - 0.1;
      // console.log(this.compteR);
      if (this.compteR <= 0) {
        console.log("Arriver a 0")
        this.joueurAJoue = true;
        this.stopTour();
      } else {
        this.startTour();
      }
    }, 100);
  }

  tourJoueur(sort: number) {
    if (this.tourPlayerAct === "joueur") {
      const JcM = sort

      // console.log('Dégâts du joueur', JcM);
      if (typeof JcM !== "undefined") {
        this.mob.setVieAct(this.mob.getVieAct() - JcM);
        // console.log("Tour Joueur : " ,this.mob)
        // Mettez à jour les informations du mob
        this.tourPlayerAct="mob";
        // this.updateInfoMob(); // À implémenter dans le composant
        this.joueurAJoue = true;
      }
    }
  }

  tourMob() {
    if (this.tourPlayerAct === "mob") {
      console.log("Tour : ", this.tourPlayerAct);
      
        const McJ = this.calculDegatsElementaire(this.mob, this.joueur, "air");
        // console.log('Dégâts du Mob', McJ);
        if (typeof McJ !== "undefined") {
          this.joueur.setVieAct(this.joueur.getVieAct() - McJ);
          this.partagerJoueur()
          console.log(this.joueur.getVieAct())
          // Mettez à jour les informations du joueur
          // this.updateInfoJoueur(this.joueur); // À implémenter dans le composant
          this.joueurAJoue = true;
        }
      
    }
  }

  saveInfoJoueur(){
    this.updateInfoJoueur()
    this.updateInfoMob()
    this.localStorageService.setItem("Joueur",this.joueur)
    console.log("info sauvegarder")
  }

  getInfoJoueur(){
    const r = this.localStorageService.getItemJoueur("Joueur")
    console.log(r)
  }

  finCombat(joueur: Joueur,mob: Mob ) {
    this.reinitPlayers()
    
    this.statusCombat = false;
    this.tourPlayerAct = "";
    this.nbrTour=0;

    if (mob.getVieAct() <= 0) {
      // console.log("Victoire du Joueur")
      this.calculRecompense(joueur, mob)
      this.saveInfoJoueur();
    }else{
      // console.log("Victoire du Mob")
    }
  }

  changePlayer() {
    this.tourPlayerAct = this.tourPlayerAct === 'mob' ? 'joueur' : 'mob';
  }

  attendreClicBouton(): Promise<string> {
    return new Promise<string>((resolve) => {
      const boutons = document.querySelectorAll('[id^="btn-"]') // Remplacez par l'ID de votre bouton
    
      // console.log(boutons)
      if (boutons && this.tourPlayerAct === "joueur") {
        boutons.forEach((bouton) => {
          bouton.addEventListener("click", () => {
              // console.log("Bouton appuyé !");
              resolve(bouton.id); // Résout la promesse avec l'id du bouton cliqué
          });
      });
        
      }

    });
  }

  async attenteJ() {
    if (this.tourPlayerAct === "joueur") {
    let t: NodeJS.Timeout | null;
    
      // console.log("En attente de l'appui sur le bouton...");
      const attente = new Promise<string>((resolve) => {
        t = setTimeout(() => {
          // console.log("Joueur Temps écoulé !");
          this.tourPlayerAct="mob";
          resolve("Temps écoulé !"); // Résout la promesse après 10 secondes
        }, 10000);
      });
      await Promise.race([attente, this.attendreClicBouton()])
        .then((v) => {
          // console.log("Bouton appuyé ou temps écoulé !",v);
          if (t) {
            clearTimeout(t); // Annule le setTimeout si le bouton a été cliqué
            t = null;
          }

        });
    }
  }

  async attenteM() {
    if (this.tourPlayerAct === "mob") {
      this.tourMob();
    }

  }


  async cbtTbT(){
 
    this.nbrTour++;
    this.statusCombat = true;
    // this.tourPlayerAct = 'joueur';
    // console.log("++++++++++ Tour ",this.nbrTour," +++++++++")
    await this.attenteJ();
    

    if (this.joueur.getVieAct() === 0 || this.mob.getVieAct() === 0) {
      this.finCombat(this.joueur, this.mob);
      // return
      if (this.btnCombatBoucle ) {
        console.log("Fin du combat info reinitialiser pour un nouveau combat.")
        await this.cbtTbT()

      } else {
        this.tourPlayerAct="";
        console.log("Fin du combat")
        return
      }
      
    }
    
    // Pause de 1 secondes
    await new Promise(resolve => setTimeout(resolve, 1000));

    // setTimeout(() => {
    this.attenteM()
    this.tourPlayerAct="joueur";

    if (this.joueur.getVieAct() === 0 || this.mob.getVieAct() === 0) {
      this.finCombat(this.joueur, this.mob);
      // return
      if (this.btnCombatBoucle ) {

        await this.cbtTbT()

      } else {
        this.tourPlayerAct="";
        return
      }
      
    }else{
      // console.log("2.2")
      // console.log("++++++++++ END Tour ",this.nbrTour," +++++++++")
      await this.cbtTbT()
    }
    
  }

  

}
