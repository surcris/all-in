import { Personnage } from "./personnage.model";

export class Joueur extends Personnage{
    
    
    

    private pseudo!: string;
    private energie!: number;
    private energieLvl!: number;
    

    constructor() {
        super();
    }

    getPseudo(): string {
        return this.pseudo;
    }
    setPseudo(value: string): void {
        this.pseudo = value;
    }

    
    getEnergie(): number {
        return this.energie;
    }
    setEnergie(value: number): void {
        
        if(value < 0){
            this.energie = 0;
        }else if( value > this.getEnergieLvl() ){
            this.energie = this.getEnergieLvl();
        }else{
            this.energie = value;
        }
    }

    getEnergieLvl(): number {
        return this.energieLvl;
    }
    setEnergieLvl(value: number): void {
        this.energieLvl = value;
    }

    // override build() {
    //     throw new Error("Method not implemented.");
    // }

}