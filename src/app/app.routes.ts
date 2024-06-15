import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HomeCultFormComponent } from './CultForm/home-cult-form/home-cult-form.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './CultForm/inscription/inscription.component';
import { ConnexionComponent } from './CultForm/connexion/connexion.component';
import { ResetPasswordComponent } from './CultForm/reset-password/reset-password.component';
import { AuthGuard } from './auth.guard';



export const routes: Routes = [
    { path: '', title: "accueil", component: HomeComponent },
    { path: 'HomeCult', loadComponent: () => import('./CultForm/home-cult-form/home-cult-form.component').then(m => m.HomeCultFormComponent) },
    { path: 'Contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
    { path: 'inscription',title:"inscription" , loadComponent: () => import('./CultForm/inscription/inscription.component').then(m => m.InscriptionComponent)},
    { path: 'connexion',title:"connexion" , loadComponent: () => import('./CultForm/connexion/connexion.component').then(m => m.ConnexionComponent) },
    { path: 'resetPassword',title:"resetPassword" , loadComponent: () => import('./CultForm/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }