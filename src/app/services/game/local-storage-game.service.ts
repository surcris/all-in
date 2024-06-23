import { Injectable } from '@angular/core';
import { CryptService } from '../crypt.service';
import { JoueurService } from './joueur.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageGameService {
  private cryptService:CryptService = new CryptService()
  constructor() { }

  setItem(key: string, value: string | any): void {
    
    const v = JSON.stringify(value)
    const encryptValueString = this.cryptService.encrypt(v)
    localStorage.setItem(key, encryptValueString);
    
  }

  getItemJoueur(key: string): any | null {
    const d = localStorage.getItem(key);
    if (d !== null) {
      const decryptValueString = this.cryptService.decrypt(d);
      const r = JSON.parse(decryptValueString)
      const j = new JoueurService().setJoueur(r)
      return j;
    }else{
      return null;
    }
    
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
