import { Personnage } from "./personnage.model";

export class Mob implements Personnage {

    private _vieMax: number;
    private _vieAct: number;

    private _nom: string;

    private _eau: number;
    private _feu: number;
    private _air: number;
    private _terre: number;
    private _puissance: number;
    private _dommage: number;
    private _degatBrut: number;
    private _resEau: number;
    private _resFeu: number;
    private _resTerre: number;
    private _resAir: number;
    private _resBrut: number;

    private _niveau: number;
    

    private _domaine?: string;
    private _niveauDomaineRang?: number;

    constructor(
        vieMax: number,
        vieAct: number,

        nom: string,

        eau: number,
        feu: number,
        air: number,
        terre: number,
        puissance: number,
        dommage: number,
        degatBrut: number,
        resEau: number,
        resFeu: number,
        resTerre: number,
        resAir: number,
        resBrut: number,

        niveau: number,
        // xp: number,
        // expLvl: number,
        
        domaine?: string,
        niveauDomaineRang?: number
    ) {
        this._vieMax = vieMax;
        this._vieAct = vieAct;
        this._nom = nom;
        this._niveau = niveau;
        this._eau = eau;
        this._feu = feu;
        this._air = air;
        this._terre = terre;
        this._puissance = puissance;
        this._dommage = dommage;
        this._degatBrut = degatBrut;
        this._resEau = resEau;
        this._resFeu = resFeu;
        this._resTerre = resTerre;
        this._resAir = resAir;
        this._resBrut = resBrut;

        this._domaine = domaine;
        this._niveauDomaineRang = niveauDomaineRang;
    }

    getNom(): string {
        return this._nom;
    }
    setNom(value: string): void {
        this._nom = value;
    }

    // Implémentation des getters et setters
    getVieMax(): number {
        return this._vieMax;
    }
    setVieMax(value: number): void {
        this._vieMax = value;
    }

    getVieAct(): number {
        return this._vieAct;
    }
    setVieAct(value: number): void {
        // console.log("valeur Mob : ", value);
        if(value < 0){
            
            this._vieAct = 0;
        }else if( value > this.getVieMax() ){
            
            this._vieAct = this.getVieMax();
        }else{
            
            this._vieAct = value;
        }
        
        
    }

    getNiveau(): number {
        return this._niveau;
    }
    setNiveau(value: number): void {
        this._niveau = value;
    }

    getEau(): number {
        return this._eau;
    }
    setEau(value: number): void {
        this._eau = value;
    }

    getFeu(): number {
        return this._feu;
    }
    setFeu(value: number): void {
        this._feu = value;
    }

    getAir(): number {
        return this._air;
    }
    setAir(value: number): void {
        this._air = value;
    }

    getTerre(): number {
        return this._terre;
    }
    setTerre(value: number): void {
        this._terre = value;
    }

    getPuissance(): number {
        return this._puissance;
    }
    setPuissance(value: number): void {
        this._puissance = value;
    }

    getDommage(): number {
        return this._dommage;
    }
    setDommage(value: number): void {
        this._dommage = value;
    }

    getDegatBrut(): number {
        return this._degatBrut;
    }
    setDegatBrut(value: number): void {
        this._degatBrut = value;
    }

    getResEau(): number {
        return this._resEau;
    }
    setResEau(value: number): void {
        this._resEau = value;
    }

    getResFeu(): number {
        return this._resFeu;
    }
    setResFeu(value: number): void {
        this._resFeu = value;
    }

    getResTerre(): number {
        return this._resTerre;
    }
    setResTerre(value: number): void {
        this._resTerre = value;
    }

    getResAir(): number {
        return this._resAir;
    }
    setResAir(value: number): void {
        this._resAir = value;
    }

    getResBrut(): number {
        return this._resBrut;
    }
    setResBrut(value: number): void {
        this._resBrut = value;
    }

    

    getDomaine(): string | undefined {
        return this._domaine;
    }
    setDomaine(value: string | undefined): void {
        this._domaine = value;
    }

    getNiveauDomaineRang(): number | undefined {
        return this._niveauDomaineRang;
    }
    setNiveauDomaineRang(value: number | undefined): void {
        this._niveauDomaineRang = value;
    }
}