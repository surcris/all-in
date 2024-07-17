import { Mob } from "../model/mob.model";

export namespace MobNamespace{
    export interface Mob {
        vieMax: number;
        vieAct: number;
        nom: string;
        eau: number;
        feu: number;
        air: number;
        terre: number;
        puissance: number;
        dommage: number;
        degatBrut: number;
        resEau: number;
        resFeu: number;
        resTerre: number;
        resAir: number;
        resBrut: number;
        niveau: number;
    }

    const listNom = ["Triangle","Carré","Rectangle","Pentagone","Hexagone","Octogone"];
    
    function choixNom(): number {
       return Math.floor(Math.random() * (listNom.length-1));
    }

    function choixNiveau(): number {
        return Math.floor(Math.random() * (50 - 1) + 1);
     }
    
}