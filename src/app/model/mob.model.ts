import { Personnage } from "./personnage.model";

export class Mob extends Personnage {
    


    private nom!: string;
  

    constructor() {
        super()
    }
    
    getNom(): string {
        return this.nom;
    }
    setNom(value: string): void {
        this.nom = value;
    }

    // override build() {
    //     throw new Error("Method not implemented.");
    // }
    
}