import { Mob } from "../model/mob.model";

const listNom = ["Triangle","Carré","Rectangle","Pentagone","Hexagone","Octogone"];

function choixNom(): number {
    return Math.floor(Math.random() * listNom.length);
}

function choixNiveau(): number {
    return Math.floor(Math.random() * 20) + 1; // Niveau entre 1 et 20
}

export function createMob(): Mob {
    // Assignez des valeurs par défaut pour un nouveau mob
    return new Mob(
        70, // vieMax
        70, // vieAct
        listNom[choixNom()], // nom
        10, // eau
        10, // feu
        10, // air
        10, // terre
        50, // puissance
        20, // dommage
        5, // degatBrut
        10, // resEau
        10, // resFeu
        10, // resTerre
        10, // resAir
        5, // resBrut
        choixNiveau() // niveau
    );
}