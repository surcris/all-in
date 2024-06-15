import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'
import { environment } from '../../environments/environment';
environment

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }

  encrypt(message: string): string {
    try {
      return CryptoJS.AES.encrypt(message, environment.akey).toString();
    } catch (error) {
      console.error('Encryption erreur:', error);
      return '';
    }
  }

  decrypt(message: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(message, environment.akey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Decryption erreur:', error);
      return '';
    }
  }
}
