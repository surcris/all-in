import { Injectable } from '@angular/core';
import { Mob } from '../../model/mob.model';
import {createMob} from '../../outils/mobFactory'

@Injectable({
  providedIn: 'root'
})
export class MobService {
  private mob: Mob;

  constructor() { 
    this.mob = createMob()
  }

  getNewMob(): Mob {
    this.mob = createMob()
    // console.log(this.getMob())
    
    return this.mob;
  }

  getMob(): Mob {
    
    return this.mob;
  }
  getMobC(): void {
    console.log(this.getMob())
  }
  getPourcentVie(): number {
    return this.getMob().getVieAct()*100/this.getMob().getVieMax()
  }
}
