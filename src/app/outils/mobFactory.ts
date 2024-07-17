import { Mob } from "../model/mob.model";

const listNom = ["Triangle","Carré","Rectangle","Pentagone","Hexagone","Octogone"];
const mob = new Mob()

function choixNom(): number {
    return Math.floor(Math.random() * listNom.length);
}

function choixNiveau(): number {
    return Math.floor(Math.random() * 20) + 1; // Niveau entre 1 et 20
}

export function createMob(): Mob {
    // Assignez des valeurs par défaut pour un nouveau mob
    

    mob.setNom(listNom[choixNom()]),      // pseudo
    mob.setVieMax(1000),         // vieMax
    mob.setVieAct(1000),         // vieAct
    mob.setNiveau(choixNiveau()),           // niveau
    mob.setEau(10),          // eau
    mob.setFeu(10),          // feu
    mob.setAir(10),          // air
    mob.setTerre(10),          // terre
    mob.setPuissance(10),          // puissance
    mob.setDommage(10),          // dommage
    mob.setDegatBrut(10),           // degatBrut
    mob.setResEau(10),          // resEau
    mob.setResFeu(10),          // resFeu
    mob.setResTerre(10),          // resTerre
    mob.setResAir(10),          // resAir
    mob.setResBrut(10)           // resBrut
    
    return mob;
}

