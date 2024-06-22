export interface Personnage {
  // Vie
  getVieMax(): number;
  setVieMax(value: number): void;

  getVieAct(): number;
  setVieAct(value: number): void;

  // Niveau
  getNiveau(): number;
  setNiveau(value: number): void;

  // Éléments
  getEau(): number;
  setEau(value: number): void;

  getFeu(): number;
  setFeu(value: number): void;

  getAir(): number;
  setAir(value: number): void;

  getTerre(): number;
  setTerre(value: number): void;

  // Statistiques de combat
  getPuissance(): number;
  setPuissance(value: number): void;

  getDommage(): number;
  setDommage(value: number): void;

  getDegatBrut(): number;
  setDegatBrut(value: number): void;

  // Résistances
  getResEau(): number;
  setResEau(value: number): void;

  getResFeu(): number;
  setResFeu(value: number): void;

  getResTerre(): number;
  setResTerre(value: number): void;

  getResAir(): number;
  setResAir(value: number): void;

  getResBrut(): number;
  setResBrut(value: number): void;

  // Expérience
  // getXp(): number;
  // setXp(value: number): void;

  // getExpLvl(): number;
  // setExpLvl(value: number): void;

  // Domaine
  getDomaine(): string | undefined;
  setDomaine(value: string | undefined): void;

  getNiveauDomaineRang(): number | undefined;
  setNiveauDomaineRang(value: number | undefined): void;
}