import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HomeCultFormComponent } from './CultForm/home-cult-form/home-cult-form.component';
import { InscriptionComponent } from './CultForm/inscription/inscription.component';
import { ConnexionComponent } from './CultForm/connexion/connexion.component';




export const routes: Routes = [
    { path: '', title: "accueil", component: HomeComponent },
    { path: 'HomeCult', component: HomeCultFormComponent },
    { path: 'inscription',title:"inscription" , component: InscriptionComponent },
    { path: 'connexion',title:"connexion" , component: ConnexionComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }