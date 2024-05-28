import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HomeCultFormComponent } from './CultForm/home-cult-form/home-cult-form.component';
import { ContactComponent } from './contact/contact.component';



export const routes: Routes = [
    { path: '', title: "accueil", component: HomeComponent },
    { path: 'HomeCult', loadComponent: () => import('./CultForm/home-cult-form/home-cult-form.component').then(m => m.HomeCultFormComponent) },
    { path: 'Contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }