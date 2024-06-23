import { Injectable } from '@angular/core';
import { CryptService } from '../crypt.service';

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

  getItem(key: string): any | null {
    const d = localStorage.getItem(key);
    if (d !== null) {
      const decryptValueString = this.cryptService.decrypt(d);
      const r = JSON.parse(decryptValueString)

      return r;
    }else{
      return "Ne contient aucune information";
    }
    
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
