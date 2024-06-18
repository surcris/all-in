import { Injectable } from '@angular/core';
import { Mob } from '../../model/mob.model';
Mob
@Injectable({
  providedIn: 'root'
})
export class MobService {
  private mob: Mob;

  constructor() { 
    this.mob = new Mob(
      
      1000,         // vieMax
      777,         // vieAct
      'Mob',      // pseudo
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

  getMob(): Mob {
    return this.mob;
  }

  getPourcentVie(): number {
    return this.getMob().getVieAct()*100/this.getMob().getVieMax()
  }
}
