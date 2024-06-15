import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase } from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, authState, fetchSignInMethodsForEmail,AuthError } from '@angular/fire/auth';
import { catchError, map } from 'rxjs/operators';
import admin from '../../../firebaseAdmin';
import { environment } from '../../environments/environment';
import { CryptService } from './crypt.service';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private auth: Auth, private crypt: CryptService) {}
  
  private handleError(error: any) {
    console.error('Authentication Erreur:', error);
    
  }

  async isSignIn(email: string): Promise<Boolean> {
    
    // const userRecord = await admin.auth().getUserByEmail(email);
    return fetchSignInMethodsForEmail(this.auth, email)
      .then((signInMethods) => {
        // const isEmailAvailable = !signInMethods.includes('password');
        if (signInMethods.length > 0) {
          
          return true;
        }
        else {
          return false;
        }
      })
      .catch(error => {
        console.error("Error lors de le vérification de l'email:", error);
        return false;
      });


  }
  // Méthode pour l'inscription avec email et mot de passe
  async inscription(email: string, password: string): Promise<any> {
    try {
      
      const l_demail = this.crypt.decrypt(email)
      const l_dpassword = this.crypt.decrypt(password)
      const isEmailAvailable = await this.isSignIn(l_demail);

      if (!isEmailAvailable) {
        console.log("Création de l'utilisateur en cours");
        createUserWithEmailAndPassword(this.auth, l_demail, l_dpassword)
          .then((res) => { console.log(res); return true; })
          .catch((error: AuthError) => {

            console.error(error.code);
            return error.code;
          });

      } else {
        console.log("Utilisateur existant");
        return "Utilisateur existant" ;
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error('Erreur lors de l\'inscription :', err.code);
        return err.code;
      } else {
        console.error('Erreur lors de l\'inscription :', err);
        return "Erreur lors de l\'inscription";
      }
      
      // throw new Error('Erreur inscription : ' + error.message);
    }
  }
  

  // Méthode pour la connexion avec email et mot de passe
  async connexion(email: string, password: string): Promise<any> {
    try {
      
      const l_demail = this.crypt.decrypt(email)
      const l_dpassword = this.crypt.decrypt(password)
     
      const isEmailAvailable = await this.isSignIn(l_demail);
      console.log(isEmailAvailable)
      if (isEmailAvailable) {
        // console.log("Utilisateur existant");
        const res = await signInWithEmailAndPassword(this.auth, l_demail, l_dpassword);
        console.log(res);
        return true;
      }else {
        console.log("Utilisateur non existant");
        return "Utilisateur non existant";
      }
      
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error('Erreur lors de la connexion:', err.code);
        return err.code;
      } else {
        console.error('Erreur inconnue lors de la connexion:', err);
        return "Erreur inconnue lors de la connexion";
      }
      // return { message: err };
    }
   
  }

  // Méthode pour la déconnexion
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  // Méthode pour réinitialiser le mot de passe
  async resetPassword(email: string): Promise<any> {
    try {
      const l_demail = this.crypt.decrypt(email)
      const isEmailAvailable = await this.isSignIn(l_demail);

      if (isEmailAvailable) {
        sendPasswordResetEmail(this.auth, l_demail)
          .then((res) => {console.log(res); return { message: "Connexion réussi" }; })
          .catch((error: AuthError) => {

            console.error(error.code);
            return { message: error.code };
          });
      }
    } catch (err: unknown) {
      console.error('Erreur lors de la réinitialisation du mot de passe', err);
    }
    
  }

  // Méthode pour vérifier l'état de l'authentification
  isAuthenticated(): Observable<boolean> {
    return authState(this.auth).pipe(
      map(user => !!user)
    );
  }


}
