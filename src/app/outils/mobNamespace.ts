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
    //  export function createMob(): Mob {
    //     // Assignez des valeurs par défaut pour un nouveau mob
    //     return new Mob(
    //         1000, // vieMax
    //         1000, // vieAct
    //         listNom[choixNom()], // nom
    //         10, // eau
    //         10, // feu
    //         10, // air
    //         10, // terre
    //         50, // puissance
    //         20, // dommage
    //         5, // degatBrut
    //         10, // resEau
    //         10, // resFeu
    //         10, // resTerre
    //         10, // resAir
    //         5, // resBrut
    //         choixNiveau() // niveau
    //     );
    // }
}