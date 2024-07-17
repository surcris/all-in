export abstract class Personnage {

  protected vieMax!: number;
  protected vieAct!: number;

  // protected nom!: string;

  protected eau!: number;
  protected feu!: number;
  protected air!: number;
  protected terre!: number;
  protected puissance!: number;
  protected dommage!: number;
  protected degatBrut!: number;
  protected resEau!: number;
  protected resFeu!: number;
  protected resTerre!: number;
  protected resAir!: number;
  protected resBrut!: number;

  protected niveau!: number;

  protected domaine?: string;
  protected niveauDomaineRang?: number;


  // Implémentation des getters et setters
  getVieMax(): number {
    return this.vieMax;
  }
  setVieMax(value: number): void {
    this.vieMax = value;
  }

  getVieAct(): number {
    return this.vieAct;
  }
  setVieAct(value: number): void {
    // console.log("valeur Mob : ", value);
    if (value < 0) {

      this.vieAct = 0;
    } else if (value > this.getVieMax()) {

      this.vieAct = this.getVieMax();
    } else {

      this.vieAct = value;
    }

  }

  getNiveau(): number {
    return this.niveau;
  }
  setNiveau(value: number): void {
    this.niveau = value;
  }

  getEau(): number {
    return this.eau;
  }
  setEau(value: number): void {
    this.eau = value;
  }

  getFeu(): number {
    return this.feu;
  }
  setFeu(value: number): void {
    this.feu = value;
  }

  getAir(): number {
    return this.air;
  }
  setAir(value: number): void {
    this.air = value;
  }

  getTerre(): number {
    return this.terre;
  }
  setTerre(value: number): void {
    this.terre = value;
  }

  getPuissance(): number {
    return this.puissance;
  }
  setPuissance(value: number): void {
    this.puissance = value;
  }

  getDommage(): number {
    return this.dommage;
  }
  setDommage(value: number): void {
    this.dommage = value;
  }

  getDegatBrut(): number {
    return this.degatBrut;
  }
  setDegatBrut(value: number): void {
    this.degatBrut = value;
  }

  getResEau(): number {
    return this.resEau;
  }
  setResEau(value: number): void {
    this.resEau = value;
  }

  getResFeu(): number {
    return this.resFeu;
  }
  setResFeu(value: number): void {
    this.resFeu = value;
  }

  getResTerre(): number {
    return this.resTerre;
  }
  setResTerre(value: number): void {
    this.resTerre = value;
  }

  getResAir(): number {
    return this.resAir;
  }
  setResAir(value: number): void {
    this.resAir = value;
  }

  getResBrut(): number {
    return this.resBrut;
  }
  setResBrut(value: number): void {
    this.resBrut = value;
  }



  getDomaine(): string | undefined {
    return this.domaine;
  }
  setDomaine(value: string | undefined): void {
    this.domaine = value;
  }

  getNiveauDomaineRang(): number | undefined {
    return this.niveauDomaineRang;
  }
  setNiveauDomaineRang(value: number | undefined): void {
    this.niveauDomaineRang = value;
  }
  

  getPourcentVie(): number {
    return this.getVieAct() * 100 / this.getVieMax()
  }

  // abstract build(): any

}